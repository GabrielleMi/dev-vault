import { describe, expect, it } from 'vitest';
import { createTestApp } from './test-utils';
import { DeclarationReflection } from 'typedoc';

describe('Full Plugin Integration Flow', () => {
  it('should successfully inject examples into TypeDoc reflection', async () => {
    const project = await createTestApp();

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
    const project = await createTestApp();
    const reflection = project.getChildByName('concatStrings');
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
