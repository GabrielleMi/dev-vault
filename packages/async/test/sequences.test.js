import { Sequential, streamPromises, streamSettledPromises } from '../src';

const reject = () => Promise.reject(new Error('error'));
const fulfill = () => Promise.resolve('success');

describe('ChainPromise', () => {
  describe('all', () => {
    test('should chain promises', async () => {
      await expect(Sequential.all([ fulfill, fulfill ]))
        .resolves
        .toEqual([ 'success', 'success' ]);
    });

    test('should throw when one of the promise fails', async () => {
      await expect(Sequential.all([ fulfill, reject ]))
        .rejects
        .toThrow('error');
    });
  });
});

describe('Stream utilities', () => {
  describe('streamPromises', () => {
    test('should yield results sequentially', async () => {
      const results = [];
      for await (const res of streamPromises([ fulfill, fulfill ])) {
        results.push(res);
      }

      expect(results).toEqual([ 'success', 'success' ]);
    });

    test('should throw immediately on first failure (fail-fast)', async () => {
      const results = [];
      await expect(async () => {
        for await (const res of streamPromises([ fulfill, reject ])) {
          results.push(res);
        }
      })
        .rejects.toThrow('error');

      expect(results).toEqual(['success']);
    });
  });

  describe('streamSettledPromises', () => {
    test('should yield settled results sequentially', async () => {
      const results = [];
      for await (const res of streamSettledPromises([ fulfill, reject ])) {
        results.push(res);
      }

      expect(results).toEqual([
        { status: 'fulfilled', value: 'success' },
        { status: 'rejected', reason: new Error('error') }
      ]);
    });

    test('should continue processing even if one fails', async () => {
      const results = [];
      for await (const res of streamSettledPromises([ reject, fulfill ])) {
        results.push(res);
      }

      expect(results[0].status).toBe('rejected');
      expect(results[1].status).toBe('fulfilled');
    });
  });
});
