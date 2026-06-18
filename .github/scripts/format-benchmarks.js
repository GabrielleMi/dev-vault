import fs from 'fs';
import path from 'path';

try {
  const rawPath = path.resolve('vitest-raw.json');
  const outputPath = path.resolve('bench-results.json');

  if (!fs.existsSync(rawPath)) {
    console.error(`Error: Input file not found at ${rawPath}`);
    process.exit(1);
  }

  const raw = JSON.parse(fs.readFileSync(rawPath, 'utf8'));
  const formatted = [];

  if (raw.files) {
    raw.files.forEach((file) => {
      if (file.groups) {
        file.groups.forEach((group) => {
          if (group.benchmarks) {
            group.benchmarks.forEach((bench) => {
              const fullName = group.name ? `${group.name} > ${bench.name}` : bench.name;
              formatted.push({
                name: fullName,
                value: Math.round(bench.hz),
                unit: 'hz'
              });
            });
          }
        });
      } else if (file.tasks) {
        file.tasks.forEach((task) => {
          if (task.type === 'suite' && task.tasks) {
            const groupName = task.name;
            task.tasks.forEach((subTask) => {
              if (subTask.type === 'benchmark' && subTask.result?.benchmark) {
                formatted.push({
                  name: `${groupName} > ${subTask.name}`,
                  value: Math.round(subTask.result.benchmark.hz),
                  unit: 'hz'
                });
              }
            });
          } else if (task.type === 'benchmark' && task.result?.benchmark) {
            formatted.push({
              name: task.name,
              value: Math.round(task.result.benchmark.hz),
              unit: 'hz'
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
