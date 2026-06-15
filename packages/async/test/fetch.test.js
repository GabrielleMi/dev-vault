import { ftch } from '../src';

describe('ftch()', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should successfully parse and return JSON data', async () => {
    const mockData = { id: '1', name: 'Monstera' };

    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify(mockData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );

    const result = await ftch('/api/plants/1');

    expect(fetch).toHaveBeenCalledWith('/api/plants/1');
    expect(result).toEqual(mockData);
  });

  it('should return null when HTTP status is 204 No Content', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(null, { status: 204 })
    );

    const result = await ftch('/api/plants/1');

    expect(result).toBeNull();
  });

  it('should return plain text if Content-Type is not JSON', async () => {
    const mockText = 'Success text';
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(mockText, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      })
    );

    const result = await ftch('/api/text-endpoint');

    expect(result).toBe(mockText);
  });

  it('should fallback to default status text if error JSON has no message', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({}), {
        status: 404,
        statusText: 'Not Found',
        headers: { 'Content-Type': 'application/json' }
      })
    );

    await expect(ftch('/api/unknown')).rejects.toThrow('HTTP Error : 404 Not Found');
  });

  it('should propagate AbortError untouched when cancelled via AbortController', async () => {
    const controller = new AbortController();
    const abortError = new DOMException('The user aborted a request.', 'AbortError');

    vi.spyOn(globalThis, 'fetch').mockRejectedValue(abortError);

    const requestPromise = ftch('/api/long-request', { signal: controller.signal });

    await expect(requestPromise).rejects.toThrowError(abortError);
    await expect(requestPromise).rejects.toHaveProperty('name', 'AbortError');
  });

  it('should wrap unknown/network generic errors and attach them to cause', async () => {
    const networkError = new TypeError('Failed to fetch');
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(networkError);

    await expect(ftch('/api/broken-network')).rejects.toThrow('Failed to fetch');

    try {
      await ftch('/api/broken-network');
    } catch (error) {
      expect(error).toBe(networkError);
    }
  });

  it('should throw HTTP Error with custom message if json parsing fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
      json: vi.fn().mockRejectedValue(new Error('Invalid JSON'))
    }));

    await expect(ftch('https://api.test/data')).rejects.toThrow('HTTP Error : 404 Not Found');
  });

  it('should throw TypeError when a non-Error object is thrown', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue('String error'));

    await expect(ftch('https://api.test/data')).rejects.toThrow('An unknown network error occurred.');

    try {
      await ftch('https://api.test/data');
    } catch (e) {
      expect(e.cause).toBe('String error');
    }
  });
});
