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

try {
  const rawPath = path.resolve('vitest-raw.json');
  const outputPath = path.resolve('bench-results.json');

  if (!fs.existsSync(rawPath)) {
    console.error(`Error: Input file not found at ${rawPath}`);
    process.exit(1);
  }

  const raw = JSON.parse(fs.readFileSync(rawPath, 'utf8'));
  const formatted = [];
  const seenNames = new Set();

  const pushBenchmark = (name, hz) => {
    if (!name || !Number.isFinite(hz)) {
      return;
    }

    if (seenNames.has(name)) {
      throw new Error(`Duplicate benchmark name detected: "${name}". Ensure benchmark names are unique across suites.`);
    }

    seenNames.add(name);
    formatted.push({
      name,
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
      if (file.groups) {
        file.groups.forEach((group) => {
          if (group.benchmarks) {
            group.benchmarks.forEach((bench) => {
              const hz = getHz(bench);
              const fullName = joinName(group.name, bench.name) || bench.fullName || bench.name;
              pushBenchmark(fullName, hz);
            });
          }
        });
      } else if (file.tasks) {
        walkTasks(file.tasks, file.name ? [ file.name ] : []);
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
