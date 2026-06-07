import { ChainPromise } from '../src';

const reject = () => Promise.reject(new Error('error'));
const fulfill = () => Promise.resolve('success');

describe('ChainPromise', () => {
  describe('all', () => {
    test('should chain promises', async () => {
      await expect(ChainPromise.all([ fulfill, fulfill ]))
        .resolves
        .toEqual([ 'success', 'success' ]);
    });

    test('should throw when one of the promise fails', async () => {
      await expect(ChainPromise.all([ fulfill, reject ]))
        .rejects
        .toThrow('error');
    });
  });
});
