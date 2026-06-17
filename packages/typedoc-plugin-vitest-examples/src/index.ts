import * as fs from 'node:fs';
import * as path from 'node:path';
import { Application, CommentDisplayPart, Context, Converter, DeclarationReflection, ParameterType, Reflection } from 'typedoc';
import { clearSourceFileCache, EXAMPLE_ALLOWED_TAG, EXAMPLE_FROM_TESTS_TAG, log } from './utils.js';
import { processReflectionTests } from './process-reflection-tests.js';

const removeTestTag = (declarationReflection: DeclarationReflection) => {
  declarationReflection.comment!.blockTags = declarationReflection.comment!.blockTags.filter(
    (tag) => tag.tag !== EXAMPLE_FROM_TESTS_TAG
  );
};

export function load(app: Application) {
  const tagsToDeclare = [
    { name: EXAMPLE_FROM_TESTS_TAG, help: 'Source tag for typedoc-plugin-vitest' },
    { name: EXAMPLE_ALLOWED_TAG, help: 'Test tag for typedoc-plugin-vitest' }
  ];
  const currentTags = app.options.getValue('blockTags') as string[];
  const tagsSet = new Set(currentTags);

  tagsToDeclare.forEach((tag) => {
    if (!app.options.getDeclaration(tag.name)) {
      app.options.addDeclaration({
        name: tag.name,
        help: tag.help,
        type: ParameterType.String
      });

      tagsSet.add(tag.name);
    }
  });

  app.options.setValue('blockTags', Array.from(tagsSet));

  app.converter.on(Converter.EVENT_BEGIN, async (_context: Context) => {
    clearSourceFileCache();
    app.logger.info(log(`Plugin loaded. Starting conversion.`));
  });

  app.converter.on(Converter.EVENT_RESOLVE, (_context: Context, reflection: Reflection) => {
    if (!reflection.hasComment()) {
      return;
    }

    const declarationReflection = reflection as DeclarationReflection;
    const examplesFromTestsTags = declarationReflection.comment?.blockTags.filter((tag) => tag.tag === EXAMPLE_FROM_TESTS_TAG) || [];

    app.logger.verbose(log(`Resolving reflection: ${declarationReflection.name} (Kind: ${declarationReflection.kind.toString()})`));

    if (examplesFromTestsTags.length === 0) {
      return;
    }

    const sourceFileDir = declarationReflection.sources?.[0].fullFileName ? path.dirname(declarationReflection.sources[0].fullFileName) : '';

    if (!sourceFileDir) {
      app.logger.warn(log(`This plugin cannot be used with "disableSources": true. Skipping all tags for ${declarationReflection.name}.`));
      return;
    }

    examplesFromTestsTags.forEach((examplesFromTestsTag) => {
      const relativeTestFilePath = examplesFromTestsTag.content.map((part: CommentDisplayPart) => part.text).join('').trim();

      if (!relativeTestFilePath) {
        app.logger.warn(log(`${declarationReflection.name} has no path specified. Skipping.`));
        return;
      }

      const absoluteTestFilePath = path.resolve(sourceFileDir, relativeTestFilePath);

      app.logger.verbose(log(`Found ${EXAMPLE_FROM_TESTS_TAG} tag on ${declarationReflection.name}. Attempting to pull examples from: ${absoluteTestFilePath}`));

      if (!fs.existsSync(absoluteTestFilePath)) {
        app.logger.error(log(`Test file not found at: ${absoluteTestFilePath} for ${declarationReflection.name}. Please verify the path in the @examplesFromTests tag.`));
        return;
      }

      const addedExamplesCount = processReflectionTests(app, declarationReflection, absoluteTestFilePath);

      if (addedExamplesCount > 0) {
        app.logger.verbose(log(`Successfully added ${addedExamplesCount} examples to ${declarationReflection.name}.`));
        removeTestTag(declarationReflection);
      } else {
        app.logger.warn(log(`No ${EXAMPLE_ALLOWED_TAG} tests found for "${declarationReflection.name}" in "${absoluteTestFilePath}". Ensure test file path and tags are correct.`));
      }
    });
  });

  app.converter.on(Converter.EVENT_END, () => {
    clearSourceFileCache();
    app.logger.verbose(log(`Cache cleared after conversion.`));
  });
}

export default load;
