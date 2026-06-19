import fs from 'fs';
import path from 'path';

/**
 * Build a stable benchmark name by joining suite ancestry with the benchmark title.
 * Empty segments are ignored.
 */
const joinName = (...parts) => parts.filter((part) => typeof part === 'string' && part.trim().length > 0).join(' > ');

/**
 * Vitest JSON has evolved over versions; this helper normalizes the benchmark hz extraction.
 */
const getHz = (benchmarkLike) => {
  const value = benchmarkLike?.hz ?? benchmarkLike?.result?.benchmark?.hz ?? benchmarkLike?.result?.hz;
  return Number.isFinite(value) ? value : null;
};

const decodeHtmlEntities = (value) => {
  if (typeof value !== 'string') {
    return '';
  }

  return value
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&')
    .trim();
};

try {
  const rawPath = path.resolve('vitest-raw.json');
  const outputPath = path.resolve('bench-results.json');

  if (!fs.existsSync(rawPath)) {
    console.error(`Error: Input file not found at ${rawPath}`);
    process.exit(1);
  }

  const raw = JSON.parse(fs.readFileSync(rawPath, 'utf8'));
  const formatted = [];
  const seenNameCount = new Map();

  const pushBenchmark = (name, hz) => {
    if (!name || !Number.isFinite(hz)) {
      return;
    }

    const currentCount = seenNameCount.get(name) ?? 0;
    const nextCount = currentCount + 1;
    seenNameCount.set(name, nextCount);

    const uniqueName = nextCount === 1 ? name : `${name} [${nextCount}]`;

    formatted.push({
      name: uniqueName,
      value: Math.round(hz),
      unit: 'hz'
    });
  };

  const walkTasks = (tasks, parents = []) => {
    if (!Array.isArray(tasks)) {
      return;
    }

    tasks.forEach((task) => {
      if (!task || typeof task !== 'object') {
        return;
      }

      if (task.type === 'suite') {
        walkTasks(task.tasks, [ ...parents, task.name ]);
        return;
      }

      if (task.type === 'benchmark') {
        const hz = getHz(task);
        const preferredName = joinName(...parents, task.name);
        const fallbackName = typeof task.name === 'string' ? task.name : null;
        const name = preferredName || fallbackName;
        pushBenchmark(name, hz);
      }
    });
  };

  if (raw.files) {
    raw.files.forEach((file) => {
      if (file.tasks) {
        walkTasks(file.tasks, file.name ? [ file.name ] : []);
      } else if (file.groups) {
        file.groups.forEach((group, groupIndex) => {
          if (group.benchmarks) {
            group.benchmarks.forEach((bench) => {
              const groupFullName = decodeHtmlEntities(group.fullName);
              const fullName = joinName(groupFullName, bench.name);
              pushBenchmark(fullName, getHz(bench));
            });
          }
        });
      }
    });
  }

  if (formatted.length === 0) {
    console.warn('Warning: No benchmarks were formatted. Here is the raw structure keys:', Object.keys(raw));
    if (raw.files && raw.files[0]) {
      console.warn('First file keys:', Object.keys(raw.files[0]));
    }
  }

  fs.writeFileSync(outputPath, JSON.stringify(formatted, null, 2));
  console.debug(`Successfully formatted benchmarks. Output saved to ${outputPath}`);
} catch (error) {
  console.error('Failed to parse or format benchmark results:', error);
  process.exit(1);
}
