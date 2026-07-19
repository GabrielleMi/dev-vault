// test/test-utils.ts
import * as path from 'node:path';
import { Application } from 'typedoc';
import { fileURLToPath } from 'node:url';
import { load } from '../src';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

type TestAppOptions = {
  disableSources?: boolean;
};

export async function createTestApp(options: TestAppOptions = {}) {
  const entryPoint = path.resolve(__dirname, 'fixtures/source.ts').replace(/\\/g, '/');
  const tsconfig = path.resolve(__dirname, './tsconfig.json').replace(/\\/g, '/');
  const packageRoot = path.resolve(__dirname, '..').replace(/\\/g, '/');

  const app = await Application.bootstrap({
    entryPoints: [entryPoint],
    tsconfig: tsconfig,
    entryPointStrategy: 'expand',
    basePath: packageRoot,
    skipErrorChecking: true,
    logLevel: 'None',
    cleanOutputDir: false,
    disableSources: options.disableSources
  });

  load(app);
  const project = await app.convert();

  if (!project) {
    throw new Error('TypeDoc conversion failed. Check your paths and ts configs.');
  }

  return [ project, app ] as const;
}
