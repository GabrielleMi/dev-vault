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
      }
    });
  }

  fs.writeFileSync(outputPath, JSON.stringify(formatted, null, 2));
  console.debug(`Successfully formatted benchmarks. Output saved to ${outputPath}`);
} catch (error) {
  console.error('Failed to parse or format benchmark results:', error);
  process.exit(1);
}
