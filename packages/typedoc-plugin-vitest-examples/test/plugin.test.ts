import { beforeAll, describe, expect, it } from 'vitest';
import { DeclarationReflection, type ProjectReflection } from 'typedoc';
import { createTestApp } from './test-utils';

describe('Full Plugin Integration Flow', () => {
  let project: ProjectReflection;

  beforeAll(async () => {
    project = await createTestApp();
  }, 15000);

  it('should successfully inject examples into TypeDoc reflection', async () => {
    const reflection = project?.getChildByName('addNumbers');
    expect(reflection).toBeDefined();

    if (reflection instanceof DeclarationReflection) {
      const tags = reflection.signatures?.[0]?.comment?.blockTags || [];
      const hasOriginalTag = tags.some((t) => t.tag === '@examplesFromTests');
      const exampleTag = tags.find((t) => t.tag.startsWith('@example:'));

      expect(hasOriginalTag).toBe(false);
      expect(exampleTag).toBeDefined();
      expect(exampleTag?.content[0].text).toContain('// Output:');
    }
  });

  it('should successfully inject examples using bracket syntax', async () => {
    const reflection = project?.getChildByName('concatStrings');
    expect(reflection).toBeDefined();

    if (reflection instanceof DeclarationReflection) {
      const tags = reflection.signatures?.[0]?.comment?.blockTags || [];
      const exampleTag = tags.find((t) => t.tag.startsWith('@example:'));

      expect(exampleTag).toBeDefined();
      expect(exampleTag?.tag).toBe('@example: Merging two strings');
      expect(exampleTag?.content[0].text).toContain('const result = concatStrings');
    }
  });
});
