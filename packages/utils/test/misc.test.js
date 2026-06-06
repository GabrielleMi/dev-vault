import { cloneDeep } from '../src';

describe('cloneDeep', () => {
  describe('arrays', () => {
    it('should be deep cloned', () => {
      const original = [ 1, 2, [ 3, 4 ] ];
      const cloned = cloneDeep(original);

      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
      expect(cloned[2]).not.toBe(original[2]);
    });

    it('should be handled when empty', () => {
      const original = [];
      const cloned = cloneDeep(original);
      expect(cloned).toEqual([]);
      expect(cloned).not.toBe(original);
    });
  });

  describe('plain objects', () => {
    it('should be deep cloned', () => {
      const original = { a: 1, b: { c: 2 } };
      const cloned = cloneDeep(original);

      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
      expect(cloned.b).not.toBe(original.b);
    });

    it('should be handled when empty', () => {
      const original = {};
      const cloned = cloneDeep(original);
      expect(cloned).toEqual({});
      expect(cloned).not.toBe(original);
    });

    it('should deep clone deeply nested structures', () => {
      const original = {
        level1: {
          level2: [
            { name: 'item1', value: 10 },
            { name: 'item2', data: { id: 'xyz' } }
          ]
        }
      };
      const cloned = cloneDeep(original);

      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
      expect(cloned.level1).not.toBe(original.level1);
      expect(cloned.level1.level2).not.toBe(original.level1.level2);
      expect(cloned.level1.level2[0]).not.toBe(original.level1.level2[0]);
      expect(cloned.level1.level2[1].data).not.toBe(original.level1.level2[1].data);
    });

    it('should handle circular references', () => {
      const original = { a: 1, arr: [], b: {} };
      original.b = original; // Direct circular reference
      original.arr.push(original); // Array circular reference

      const cloned = cloneDeep(original);

      expect(cloned).not.toBe(original);
      expect(cloned.a).toBe(original.a);
      expect(cloned.b).toBe(cloned); // Cloned object refers to itself
      expect(cloned.arr[0]).toBe(cloned); // Cloned array refers to itself

      // Modify original to ensure clone is independent
      original.a = 99;
      expect(cloned.a).not.toBe(99);
    });

    it('should handle nested circular references', () => {
      const parent = {};
      const child = { data: 10, parent };
      parent.child = child;

      const clonedParent = cloneDeep(parent);

      expect(clonedParent).not.toBe(parent);
      expect(clonedParent.child).not.toBe(parent.child);
      expect(clonedParent.child?.parent).toBe(clonedParent); // Nested circular reference maintained

      clonedParent.child.data = 20;
      expect(child.data).toBe(10); // Ensure independence
    });
  });

  describe('built-in objects', () => {
    it('should clone Date objects', () => {
      const original = new Date();
      const cloned = cloneDeep(original);

      expect(cloned).toEqual(original); // Value equality
      expect(cloned).not.toBe(original); // Reference inequality
      expect(cloned.getTime()).toBe(original.getTime());
    });

    it('should clone RegExp objects and preserve flags (not lastIndex)', () => {
      const original = /abc/gi;
      original.lastIndex = 5; // structuredClone does NOT preserve this
      const cloned = cloneDeep(original);

      expect(cloned).toEqual(original); // Checks source and flags
      expect(cloned).not.toBe(original); // New instance
      expect(cloned.source).toBe(original.source);
      expect(cloned.flags).toBe(original.flags);
      expect(cloned.lastIndex).toBe(0); // Expected behavior if using new RegExp or structuredClone for RegExp
      expect(original.lastIndex).toBe(5); // Original is unchanged
    });

    it('should deep clone Map objects', () => {
      const objInMap = { val: 1 };

      // @ts-expect-error testing
      const original = new Map([
        [ 'key1', 'value1' ],
        [ 2, objInMap ],
        [ objInMap, 3 ]
      ]);
      const cloned = cloneDeep(original);

      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
      // @ts-expect-error testing
      expect(cloned.get(2)).not.toBe(original.get(2));
      // @ts-expect-error testing
      expect(cloned.get(2)).toEqual(original.get(2));
      expect(Array.from(cloned.keys()).find((k) => k.val === 1)).not.toBe(objInMap);
    });

    it('should deep clone Set objects', () => {
      const objInSet = { val: 1 };
      const original = new Set([ 1, 'a', objInSet ]);
      const cloned = cloneDeep(original);

      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
      expect(Array.from(cloned.values()).find((v) => v.val === 1)).not.toBe(objInSet);
      expect(Array.from(cloned.values()).find((v) => v.val === 1)).toEqual(objInSet);
    });

    it('should clone FormData objects correctly', () => {
      const original = new FormData();
      original.append('text', 'Hello World');
      original.append('file', new File(['content'], 'test.txt', { type: 'text/plain' }));

      const cloned = cloneDeep(original);

      expect(cloned).not.toBe(original);
      expect(cloned instanceof FormData).toBe(true);

      // @ts-expect-error testing
      const originalEntries = Array.from(original.entries());
      const clonedEntries = Array.from(cloned.entries());

      expect(clonedEntries.length).toBe(originalEntries.length);
      expect(clonedEntries[0][0]).toBe('text');
      expect(clonedEntries[0][1]).toBe('Hello World');
      expect(clonedEntries[1][0]).toBe('file');
      expect(clonedEntries[1][1]).toBe(originalEntries[1][1]);
      expect(clonedEntries[1][1] instanceof File).toBe(true);

      cloned.append('newField', 'newValue');
      // @ts-expect-error testing
      expect(Array.from(original.entries()).length).toBe(2);
      expect(Array.from(cloned.entries()).length).toBe(3);
    });

    it('should clone ArrayBuffer using structuredClone', () => {
      const original = new ArrayBuffer(8);
      const view1 = new Uint8Array(original);
      view1[0] = 10;
      const cloned = cloneDeep(original);

      expect(cloned).not.toBe(original);
      expect(cloned instanceof ArrayBuffer).toBe(true);
      expect(cloned.byteLength).toBe(original.byteLength);

      const view2 = new Uint8Array(cloned);
      expect(view2[0]).toBe(10);

      view2[0] = 20;
      expect(view1[0]).toBe(10);
    });

    it('should clone Blob using structuredClone', async () => {
      const original = new Blob(['hello world'], { type: 'text/plain' });
      const cloned = cloneDeep(original);

      expect(cloned).not.toBe(original);
      expect(cloned instanceof Blob).toBe(true);
      expect(cloned.size).toBe(original.size);
      expect(cloned.type).toBe(original.type);

      const originalText = await original.text();
      const clonedText = await cloned.text();
      expect(clonedText).toBe(originalText);
    });

    it('should copy functions by reference', () => {
      const fn = () => console.warn('test');
      const original = { func: fn };
      const cloned = cloneDeep(original);

      expect(cloned.func).toBe(original.func);
      expect(typeof cloned.func).toBe('function');
    });
  });

  it('should clone instances of custom classes and preserve prototype chain', () => {
    class MyClass {
      value;
      nested;
      constructor(val) {
        this.value = val;
        this.nested = { id: 1 };
      }

      getValue() {
        return this.value;
      }
    }
    const original = new MyClass(10);
    const cloned = cloneDeep(original);

    expect(cloned).not.toBe(original);
    expect(cloned).toBeInstanceOf(MyClass);
    expect(cloned.value).toBe(original.value);
    expect(cloned.getValue()).toBe(original.getValue());
    expect(cloned.nested).not.toBe(original.nested);
    expect(cloned.nested).toEqual(original.nested);

    cloned.value = 20;
    cloned.nested.id = 2;
    expect(original.value).toBe(10);
    expect(original.nested.id).toBe(1);
  });

  it('should handle undefined properties correctly (and not omit them)', () => {
    const original = { a: 1, b: undefined, c: { d: undefined } };
    const cloned = cloneDeep(original);
    expect(cloned).toEqual(original);
    expect('b' in cloned).toBe(true);
    expect('d' in cloned.c).toBe(true);
  });

  it('should handle complex mixed data types and structures', () => {
    const original = {
      id: 1,
      name: 'Complex Object',
      data: [
        {
          prop1: 'value1',
          prop2: new Date('2023-01-01'),
          prop3: { subProp: /regex/i }
        },
        new Map([[ 'mKey', { mVal: 1 } ]]),
        new Set([ 10, { sVal: 20 } ])
      ],
      settings: {
        enabled: true,
        config: null,
        callback: () => { /* noop */ }
      },
      circular: {},
      formData: new FormData()
    };
    original.circular = original;
    original.formData.append('test', 'data');
    original.formData.append('file', new File(['abc'], 'abc.txt'));

    const cloned = cloneDeep(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);

    expect(cloned.data).not.toBe(original.data);
    expect(cloned.data[0]).not.toBe(original.data[0]);
    // @ts-expect-error testing
    expect(cloned.data[0].prop2).not.toBe(original.data[0].prop2);
    // @ts-expect-error testing
    expect(cloned.data[0].prop3).not.toBe(original.data[0].prop3);
    // @ts-expect-error testing
    expect(cloned.data[0].prop3.subProp).not.toBe(original.data[0].prop3.subProp);

    expect(cloned.data[1]).not.toBe(original.data[1]);
    expect(cloned.data[1] instanceof Map).toBe(true);
    // @ts-expect-error testing
    expect(cloned.data[1].get('mKey')).not.toBe(original.data[1].get('mKey'));

    expect(cloned.data[2]).not.toBe(original.data[2]);
    expect(cloned.data[2] instanceof Set).toBe(true);
    expect(Array.from(cloned.data[2].values()).find((v) => v.sVal === 20)).not.toBe(
      // @ts-expect-error testing
      Array.from(original.data[2].values()).find((v) => v.sVal === 20)
    );

    expect(cloned.settings).not.toBe(original.settings);
    expect(cloned.settings.callback).toBe(original.settings.callback); // Function copied by reference

    expect(cloned.circular).toBe(cloned);

    expect(cloned.formData).not.toBe(original.formData);
    expect(cloned.formData instanceof FormData).toBe(true);
    // @ts-expect-error testing
    expect(Array.from(cloned.formData.entries())).toEqual(Array.from(original.formData.entries()));

    cloned.name = 'Modified';
    cloned.data[0].prop1 = 'newVal';
    (cloned.data[1]).get('mKey').mVal = 99;
    cloned.settings.enabled = false;

    expect(original.name).toBe('Complex Object');
    // @ts-expect-error testing
    expect(original.data[0].prop1).toBe('value1');
    // @ts-expect-error testing
    expect((original.data[1]).get('mKey').mVal).toBe(1);
    expect(original.settings.enabled).toBe(true);
  });
});
