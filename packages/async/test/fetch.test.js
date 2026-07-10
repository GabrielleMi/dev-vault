import { buildRequestBody, constructURL, ftch, Ftcher, serializeQuery } from '../src';

describe('constructURL()', () => {
  it('should collapse duplicated slashes in the pathname while keeping protocol slashes', () => {
    const result = constructURL('https://api.test/', '/v1//plants');

    expect(result).toBe('https://api.test/v1/plants');
  });

  it('should normalize repeated slashes in nested path segments', () => {
    const result = constructURL('https://api.test/base//', '/v1///plants//42');

    expect(result).toBe('https://api.test/base/v1/plants/42');
  });

  it('should joins segments with a slash', () => {
    const result = constructURL('https://api.test/base', 'v1///plants//42');

    expect(result).toBe('https://api.test/base/v1/plants/42');
  });

  it('should ignore empty parameters', () => {
    expect(constructURL('', '')).toBe('');
    expect(constructURL('', 'test')).toBe('test');
  });
});

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
    expect(result).toBeInstanceOf(Response);
    expect(result.data).toEqual(mockData);
  });

  it('should return null when HTTP status is 204 No Content', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(null, { status: 204 })
    );

    const result = await ftch('/api/plants/1');

    expect(result).toBeInstanceOf(Response);
    expect(result.data).toBeNull();
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

    expect(result).toBeInstanceOf(Response);
    expect(result.data).toBe(mockText);
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

  it('should parse JSON when response headers are provided as header tuples', async () => {
    const mockData = { ok: true };

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      status: 200,
      ok: true,
      headers: [[ 'Content-TYPE', 'application/json' ]],
      json: vi.fn().mockResolvedValue(mockData),
      text: vi.fn(),
      blob: vi.fn()
    }));

    const result = await ftch('/api/tuple-headers');

    expect(result.data).toEqual(mockData);
  });

  it('should parse text when response headers are provided as a plain object', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      status: 200,
      ok: true,
      headers: { 'Content-TYPE': 'text/plain' },
      json: vi.fn(),
      text: vi.fn().mockResolvedValue('ok-text'),
      blob: vi.fn()
    }));

    const result = await ftch('/api/object-headers');

    expect(result.data).toBe('ok-text');
  });

  it('should fallback to blob parsing when content type cannot be determined', async () => {
    const mockBlob = new Blob(['bin'], { type: 'application/octet-stream' });

    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      status: 200,
      ok: true,
      headers: undefined,
      json: vi.fn(),
      text: vi.fn(),
      blob: vi.fn().mockResolvedValue(mockBlob)
    }));

    const result = await ftch('/api/blob-fallback');

    expect(result.data).toBe(mockBlob);
  });
});

describe('serializeQuery()', () => {
  it('should serialize nested objects and repeated array values', () => {
    const result = serializeQuery({
      page: 2,
      tags: [ 'indoor', 'green' ],
      filter: { active: true }
    });

    expect(result).toBe('page=2&tags=indoor&tags=green&filter%5Bactive%5D=true');
  });

  it('should omit undefined values and keep null values according to nullMode', () => {
    const result = serializeQuery({
      search: undefined,
      archived: null
    }, {
      nullMode: 'literal',
      omitUndefined: true
    });

    expect(result).toBe('archived=null');
  });

  it('should support indices array format', () => {
    const result = serializeQuery({
      tags: [ 'indoor', 'green' ]
    }, {
      arrayFormat: 'indices'
    });

    expect(result).toBe('tags%5B0%5D=indoor&tags%5B1%5D=green');
  });

  it('should support comma array format', () => {
    const result = serializeQuery({
      tags: [ 'indoor', 'green' ]
    }, {
      arrayFormat: 'comma'
    });

    expect(result).toBe('tags%2C0=indoor&tags%2C1=green');
  });

  it('should support dot object format', () => {
    const result = serializeQuery({
      filter: { active: true }
    }, {
      objectFormat: 'dot'
    });

    expect(result).toBe('filter.active=true');
  });

  it('should support json object format', () => {
    const result = serializeQuery({
      filter: { active: true, page: 1 }
    }, {
      objectFormat: 'json'
    });

    expect(result).toBe('filter=%7B%22active%22%3Atrue%2C%22page%22%3A1%7D');
  });

  it('should serialize booleans numerically when booleanFormat is numeric', () => {
    const result = serializeQuery({
      active: false,
      featured: true
    }, {
      booleanFormat: 'numeric'
    });

    expect(result).toBe('active=0&featured=1');
  });

  it('should fallback to empty object key separator for unknown objectFormat values', () => {
    const result = serializeQuery({
      filter: { active: true }
    }, {
      objectFormat: 'invalid-format'
    });

    expect(result).toBe('filter=true');
  });

  it('should keep appending repeated keys after they are converted to arrays', () => {
    const result = serializeQuery({
      tags: [ 'a', 'b', 'c' ]
    }, {
      arrayFormat: 'repeat'
    });

    expect(result).toBe('tags=a&tags=b&tags=c');
  });

  it('should keep the key with an empty value when nullMode is empty', () => {
    const result = serializeQuery({
      archived: null
    }, {
      nullMode: 'empty'
    });

    expect(result).toBe('archived=');
  });

  it('should fallback to omission when nullMode is unknown', () => {
    const result = serializeQuery({
      archived: null
    }, {
      nullMode: 'unsupported-null-mode'
    });

    expect(result).toBe('');
  });

  it('should serialize Date values using ISO string', () => {
    const result = serializeQuery({
      createdAt: new Date('2026-07-08T12:00:00.000Z')
    });

    expect(result).toBe('createdAt=2026-07-08T12%3A00%3A00.000Z');
  });
});

describe('serializeBody()', () => {
  it('should serialize objects as URLSearchParams for urlencoded bodies', () => {
    const result = buildRequestBody({
      page: 1,
      tags: [ 'a', 'b' ]
    }, { format: 'urlencoded' });

    expect(result).toBeInstanceOf(URLSearchParams);
    expect(result.toString()).toBe('page=1&tags=a&tags=b');
  });

  it('should serialize blobs and scalar values into FormData for multipart bodies', () => {
    const file = new Blob(['hello'], { type: 'text/plain' });
    const result = buildRequestBody({
      title: 'avatar',
      files: [file]
    }, {
      format: 'form',
      arrayFormat: 'bracket'
    });

    expect(result).toBeInstanceOf(FormData);
    expect(result.get('title')).toBe('avatar');
    expect(result.get('files[]')).toBeInstanceOf(Blob);
  });

  it('should serialize JSON bodies with JSON.stringify', () => {
    const result = buildRequestBody({
      name: 'Monstera',
      active: true
    }, { format: 'json' });

    expect(result).toBe('{"name":"Monstera","active":true}');
  });

  it('should apply cleanup options before JSON.stringify', () => {
    const result = buildRequestBody({
      name: 'Monstera',
      empty: '',
      archived: null,
      extra: undefined
    }, {
      format: 'json',
      omitEmptyString: true,
      omitNull: true,
      omitUndefined: true
    });

    expect(result).toBe('{"name":"Monstera"}');
  });

  it('should return undefined for nullish bodies', () => {
    expect(buildRequestBody(null, { format: 'json' })).toBeUndefined();
    expect(buildRequestBody(undefined, { format: 'json' })).toBeUndefined();
  });

  it('should keep URLSearchParams as-is', () => {
    const params = new URLSearchParams('a=1&b=2');
    const result = buildRequestBody(params, { format: 'urlencoded' });

    expect(result).toBe(params);
  });

  it('should omit null values for urlencoded bodies when omitNull is true', () => {
    const result = buildRequestBody({
      active: true,
      archived: null
    }, {
      format: 'urlencoded',
      omitNull: true
    });

    expect(result).toBeInstanceOf(URLSearchParams);
    expect(result.toString()).toBe('active=true');
  });

  it('should omit arrays that normalize to empty when omitEmptyArray is true', () => {
    const result = buildRequestBody({
      items: [undefined]
    }, {
      format: 'json',
      omitUndefined: true,
      omitEmptyArray: true
    });

    expect(result).toBe('{}');
  });

  it('should omit objects that normalize to empty when omitEmptyObject is true', () => {
    const result = buildRequestBody({
      filter: {
        archived: undefined
      }
    }, {
      format: 'json',
      omitUndefined: true,
      omitEmptyObject: true
    });

    expect(result).toBeUndefined();
  });

  it('should return non-plain values unchanged by normalizeJsonValue fallback in text format', () => {
    const fnBody = () => 'x';
    const result = buildRequestBody(fnBody, { format: 'text' });

    expect(result).toContain('=>');
  });

  it('should keep ArrayBuffer bodies as-is', () => {
    const body = new ArrayBuffer(8);
    const result = buildRequestBody(body, { format: 'json' });

    expect(result).toBe(body);
  });

  it('should keep ReadableStream bodies as-is', () => {
    const body = new ReadableStream({
      start(controller) {
        controller.enqueue(new Uint8Array([ 1, 2, 3 ]));
        controller.close();
      }
    });

    const result = buildRequestBody(body, { format: 'json' });
    expect(result).toBe(body);
  });

  it('should fallback to text format when no format is provided', () => {
    const result = buildRequestBody({ name: 'Monstera' });

    expect(result).toBe('[object Object]');
  });
});

describe('Ftcher', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should complete requests successfully when a consumer signal is provided', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );

    const controller = new AbortController();
    const onAbort = vi.fn();

    const client = new Ftcher({
      baseURL: 'https://api.test',
      hooks: {
        onAbort
      }
    });

    const response = await client.get('/plants', { signal: controller.signal });

    expect(response.data).toEqual({ ok: true });
    expect(onAbort).not.toHaveBeenCalled();
  });

  it('should abort a request when consumer signal aborts while using internal signal merging', async () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation((_, init) => {
      const signal = init?.signal;

      return new Promise((resolve, reject) => {
        if (signal?.aborted) {
          reject(new DOMException('The operation was aborted.', 'AbortError'));
          return;
        }

        signal?.addEventListener('abort', () => {
          reject(new DOMException('The operation was aborted.', 'AbortError'));
        }, { once: true });

        setTimeout(() => {
          resolve(new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }));
        }, 50);
      });
    });

    const controller = new AbortController();
    const onAbort = vi.fn();

    const client = new Ftcher({
      baseURL: 'https://api.test',
      hooks: {
        onAbort
      }
    });

    const request = client.get('/plants', { signal: controller.signal });

    controller.abort();

    await expect(request).rejects.toHaveProperty('name', 'AbortError');
    expect(onAbort).toHaveBeenCalledTimes(1);
  });

  it('should still reject non-abort errors when a consumer signal is provided', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('boom'));

    const controller = new AbortController();

    const client = new Ftcher({
      baseURL: 'https://api.test',
      hooks: {
        onAbort: vi.fn()
      }
    });

    await expect(client.get('/plants', { signal: controller.signal })).rejects.toThrow('boom');
  });

  it('should trigger onAbort immediately when request signal is already aborted', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );

    const controller = new AbortController();
    controller.abort();

    const addSpy = vi.spyOn(controller.signal, 'addEventListener');
    const onAbort = vi.fn();

    const client = new Ftcher({
      baseURL: 'https://api.test',
      hooks: {
        onAbort
      }
    });

    await client.get('/plants', { signal: controller.signal });

    expect(onAbort).toHaveBeenCalledTimes(1);
    expect(addSpy).not.toHaveBeenCalled();
  });

  it('should merge signals without AbortSignal.any when a signal is already aborted', async () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation((_, init) => {
      if (init?.signal?.aborted) {
        return Promise.reject(new DOMException('The operation was aborted.', 'AbortError'));
      }

      return Promise.resolve(new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }));
    });

    const originalAnyDescriptor = Object.getOwnPropertyDescriptor(AbortSignal, 'any');
    Object.defineProperty(AbortSignal, 'any', { value: undefined, configurable: true });

    try {
      const controller = new AbortController();
      controller.abort(new Error('consumer aborted'));

      const onAbort = vi.fn();
      const client = new Ftcher({
        baseURL: 'https://api.test',
        hooks: {
          onAbort
        }
      });

      await expect(client.get('/plants', { signal: controller.signal })).rejects.toHaveProperty('name', 'AbortError');
      expect(onAbort).toHaveBeenCalledTimes(1);
    } finally {
      if (originalAnyDescriptor) {
        Object.defineProperty(AbortSignal, 'any', originalAnyDescriptor);
      }
    }
  });

  it('should merge signals without AbortSignal.any and react to abort events', async () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation((_, init) => {
      const signal = init?.signal;

      return new Promise((resolve, reject) => {
        if (signal?.aborted) {
          reject(new DOMException('The operation was aborted.', 'AbortError'));
          return;
        }

        signal?.addEventListener('abort', () => {
          reject(new DOMException('The operation was aborted.', 'AbortError'));
        }, { once: true });

        setTimeout(() => {
          resolve(new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
          }));
        }, 50);
      });
    });

    const originalAnyDescriptor = Object.getOwnPropertyDescriptor(AbortSignal, 'any');
    Object.defineProperty(AbortSignal, 'any', { value: undefined, configurable: true });

    try {
      const controller = new AbortController();
      const addSpy = vi.spyOn(controller.signal, 'addEventListener');
      const removeSpy = vi.spyOn(controller.signal, 'removeEventListener');

      const onAbort = vi.fn();
      const client = new Ftcher({
        baseURL: 'https://api.test',
        hooks: {
          onAbort
        }
      });

      const request = client.get('/plants', { signal: controller.signal });
      controller.abort();

      await expect(request).rejects.toHaveProperty('name', 'AbortError');
      expect(onAbort).toHaveBeenCalledTimes(1);
      expect(addSpy).toHaveBeenCalledWith('abort', expect.any(Function));
      expect(removeSpy).toHaveBeenCalledWith('abort', expect.any(Function));
    } finally {
      if (originalAnyDescriptor) {
        Object.defineProperty(AbortSignal, 'any', originalAnyDescriptor);
      }
    }
  });

  it('should abort in-flight requests when destroy is called', async () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation((_, init) => {
      const signal = init?.signal;

      return new Promise((_, reject) => {
        if (signal?.aborted) {
          reject(new DOMException('The operation was aborted.', 'AbortError'));
          return;
        }

        signal?.addEventListener('abort', () => {
          reject(new DOMException('The operation was aborted.', 'AbortError'));
        }, { once: true });
      });
    });

    const onAbort = vi.fn();
    const client = new Ftcher({
      baseURL: 'https://api.test',
      hooks: {
        onAbort
      }
    });

    const request = client.get('/plants');
    client.destroy();

    await expect(request).rejects.toHaveProperty('name', 'AbortError');
    expect(onAbort).not.toHaveBeenCalled();
  });

  it('should reject new requests after destroy', async () => {
    const client = new Ftcher({
      baseURL: 'https://api.test'
    });

    client.destroy();

    await expect(client.get('/plants')).rejects.toThrow('This Ftcher instance has been destroyed.');
  });

  it('should keep destroy idempotent', () => {
    const client = new Ftcher({
      baseURL: 'https://api.test'
    });

    expect(() => {
      client.destroy();
      client.destroy();
    }).not.toThrow();
  });

  it('should use internal serializer options when no custom serializers are provided', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );

    const client = new Ftcher({
      baseURL: 'https://api.test',
      querySerializerOptions: { arrayFormat: 'repeat' },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      bodySerializerOptions: { arrayFormat: 'repeat' }
    });

    await client.post('/plants', {
      query: { tags: [ 'a', 'b' ] },
      body: { active: true, categories: [ 'indoor', 'green' ] }
    });

    const [ url, requestInit ] = fetch.mock.calls.at(-1);
    expect(url).toBe('https://api.test/plants?tags=a&tags=b');
    expect(requestInit.method).toBe('POST');
    expect(requestInit.body).toBeInstanceOf(URLSearchParams);
    expect(requestInit.body.toString()).toBe('active=true&categories=indoor&categories=green');
  });

  it('should serialize body as JSON when content-type is application/json', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );

    const client = new Ftcher({
      baseURL: 'https://api.test',
      headers: { 'Content-Type': 'application/json' }
    });

    await client.patch('/plants/1', {
      query: { page: 1 },
      body: { active: false }
    });

    expect(fetch).toHaveBeenCalledWith('https://api.test/plants/1?page=1', expect.objectContaining({
      method: 'PATCH',
      body: '{"active":false}'
    }));
  });

  it('should prioritize configured bodySerializerOptions.format over content-type header', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );

    const client = new Ftcher({
      baseURL: 'https://api.test',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      bodySerializerOptions: { format: 'json' }
    });

    await client.post('/plants', {
      body: { active: true }
    });

    const [ , requestInit ] = fetch.mock.calls.at(-1);
    expect(requestInit.body).toBe('{"active":true}');
  });

  it('should fallback to text body format when no content-type header is provided', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );

    const client = new Ftcher({
      baseURL: 'https://api.test'
    });

    await client.post('/plants', {
      body: { active: true }
    });

    const [ , requestInit ] = fetch.mock.calls.at(-1);
    expect(requestInit.body).toBe('[object Object]');
  });

  it('should serialize body as FormData when content-type is multipart/form-data', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );

    const client = new Ftcher({
      baseURL: 'https://api.test',
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    await client.post('/plants', {
      body: { active: true }
    });

    const [ , requestInit ] = fetch.mock.calls.at(-1);
    expect(requestInit.body).toBeInstanceOf(FormData);
    expect(requestInit.body.get('active')).toBe('true');
  });

  it('should merge default headers with request headers and let request headers override defaults', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );

    const client = new Ftcher({
      baseURL: 'https://api.test',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer default-token'
      }
    });

    await client.post('/plants', {
      headers: {
        'Content-Type': 'text/plain',
        'X-Trace-Id': 'trace-123'
      },
      body: 'plain body'
    });

    const [ , requestInit ] = fetch.mock.calls.at(-1);
    expect(requestInit.headers).toBeInstanceOf(Headers);
    expect(requestInit.headers.get('content-type')).toBe('text/plain');
    expect(requestInit.headers.get('authorization')).toBe('Bearer default-token');
    expect(requestInit.headers.get('x-trace-id')).toBe('trace-123');
    expect(requestInit.body).toBe('plain body');
  });

  it('should send PUT requests through the put() helper', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );

    const client = new Ftcher({
      baseURL: 'https://api.test'
    });

    await client.put('/plants/1');

    expect(fetch).toHaveBeenCalledWith('https://api.test/plants/1', expect.objectContaining({
      method: 'PUT'
    }));
  });

  it('should send DELETE requests through the delete() helper', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );

    const client = new Ftcher({
      baseURL: 'https://api.test'
    });

    await client.delete('/plants/1');

    expect(fetch).toHaveBeenCalledWith('https://api.test/plants/1', expect.objectContaining({
      method: 'DELETE'
    }));
  });
});
