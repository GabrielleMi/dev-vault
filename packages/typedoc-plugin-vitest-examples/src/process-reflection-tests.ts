import * as path from 'node:path';
import * as ts from 'typescript';
import { Application, Comment, CommentTag, DeclarationReflection } from 'typedoc';
import { EXAMPLE_ALLOWED_TAG, getOrCreateSourceFile, log } from './utils.js';
import { extractTestCode } from './extract-test-code.js';

const getCodeLanguage = (filePath: string) => {
  const extension = path.extname(filePath).toLowerCase();

  if (extension.includes('ts') || extension.includes('tsx')) {
    return 'typescript';
  }

  return 'javascript';
};

const isFunctionLike = (node: ts.Node) => ts.isFunctionExpression(node) || ts.isArrowFunction(node);

const findExampleTestComment = (comments: ts.CommentRange[] | undefined, sourceFile: ts.SourceFile) => {
  if (!comments) {
    return;
  }

  for (let i = 0; i < comments.length; i++) {
    const commentRange = comments[i];
    const commentText = sourceFile.text.substring(commentRange.pos, commentRange.end);

    if (commentText.includes(EXAMPLE_ALLOWED_TAG)) {
      return commentText;
    }
  }
};

export function processReflectionTests(
  app: Application,
  reflection: DeclarationReflection,
  testFilePath: string
): number {
  const functionName = reflection.name;
  let examplesAdded = 0;

  app.logger.verbose(log(`Entering addExamplesFromTests for ${functionName}. Scanning single file: ${testFilePath}.`));

  const [ sourceFile, testFileContent ] = getOrCreateSourceFile(testFilePath);

  const codeLanguage = getCodeLanguage(testFilePath);
  let hasDescribe = false;

  ts.forEachChild(sourceFile, function visit(node: ts.Node) {
    if (ts.isCallExpression(node)) {
      const callName = node.expression.getText(sourceFile);

      if (callName === 'describe' && ts.isStringLiteral(node.arguments[0])) {
        const describeTitle = node.arguments[0].text;
        if (describeTitle === functionName) {
          app.logger.verbose(log(`-- Found 'describe' block for '${functionName}' in ${path.basename(testFilePath)}.`));
          hasDescribe = true;

          if (node.arguments[1] && isFunctionLike(node.arguments[1])) {
            ts.forEachChild(node.arguments[1].body, visit);
          }

          hasDescribe = false;
          return;
        }
      }

      const isTest = callName === 'test' || callName === 'it';

      if (!isTest || !ts.isStringLiteral(node.arguments[0])) {
        return;
      }

      const testTitle = (node.arguments[0] as ts.StringLiteral).text;
      const callbackArg = node.arguments[1];

      app.logger.verbose(log(`--- Found 'it'/'test' block: '${testTitle}'`));

      const precedingComments = ts.getLeadingCommentRanges(sourceFile.text, node.pos);
      const exampleTestComment = findExampleTestComment(precedingComments, sourceFile);

      if (exampleTestComment) {
        app.logger.verbose(log(`---- ${EXAMPLE_ALLOWED_TAG} found for '${testTitle}'. Extracting code.`));

        if (isFunctionLike(callbackArg)) {
          const exampleText = exampleTestComment.split(EXAMPLE_ALLOWED_TAG)[1]?.trim() || '';
          const bracketMatch = exampleText.match(/^\[([^\]]+)\]\s*(.*)/);
          const targetFunctionName = bracketMatch ? bracketMatch[1] : null;
          const rawTitle = bracketMatch ? bracketMatch[2] : exampleText;
          const exampleTitle = rawTitle.trim() || testTitle;

          const isTarget = targetFunctionName
            ? targetFunctionName === reflection.name
            : hasDescribe;

          if (!isTarget) {
            return;
          }

          const transformedCodeString = extractTestCode(sourceFile, testFileContent, callbackArg.body);

          if (!reflection.comment) {
            reflection.comment = new Comment();
          }

          const commentName: `@${string}` = `@example: ${exampleTitle}`;
          const existingComment = reflection.comment.blockTags.find((tag) => tag.tag === commentName);

          if (existingComment && existingComment.content.length > 0) {
            app.logger.verbose(log(`----- Merging examples with the same name "${commentName}"`));
            const last = existingComment.content.at(existingComment.content.length - 1);
            // eslint-disable-next-line no-useless-escape
            const newText = `${last!.text.replace(/(\n\`\`\`)(?!.*\1)/, '')}\n\n${transformedCodeString}\n\`\`\``;

            existingComment.content.at(existingComment.content.length - 1)!.text = newText;
          } else {
            const newExampleTag = new CommentTag(commentName, [{ kind: 'code', text: `\`\`\`${codeLanguage}\n${transformedCodeString}\n\`\`\`` }]);
            reflection.comment.blockTags.push(newExampleTag);
            app.logger.verbose(`DEBUG: Tags après push: ${reflection.comment.blockTags.length}`);
          }

          examplesAdded++;
          app.logger.verbose(log(`----- Added example "${testTitle}" to ${reflection.name}.`));
        } else {
          app.logger.warn(log(`----- Could not extract code for test "${testTitle}" (callback is not a function expression/arrow function).`));
        }
      } else {
        app.logger.verbose(log(`---- Skipped test "${testTitle}" (no ${EXAMPLE_ALLOWED_TAG}).`));
      }
    }

    if (ts.isSourceFile(node) || ts.isBlock(node) || ts.isExpressionStatement(node)) {
      ts.forEachChild(node, visit);
    }
  });

  return examplesAdded;
}
