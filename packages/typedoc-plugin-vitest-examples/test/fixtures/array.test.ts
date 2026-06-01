it('should handle basic logic', () => {
  const x = 1;
  expect(x).toBe(1);
});

it('should handle multi-line objects', () => {
  const data = { a: 1 };
  expect(data).toEqual({ a: 1 });
});
