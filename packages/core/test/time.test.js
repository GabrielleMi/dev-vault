import { convertTimeUnit, DAY, HOUR, MILLISECOND, MINUTE, SECOND } from '../src';

describe('convertTimeUnit', () => {
  // @isTestExample Milliseconds to seconds
  it('should convert milliseconds to seconds correctly', () => {
    expect(convertTimeUnit(5000, MILLISECOND, SECOND)).toBe(5);
  });

  // @isTestExample Seconds to minutes
  it('should convert seconds to minutes correctly', () => {
    expect(convertTimeUnit(120, SECOND, MINUTE)).toBe(2);
  });

  // @isTestExample Minutes to hours
  it('should convert minutes to hours correctly', () => {
    expect(convertTimeUnit(180, MINUTE, HOUR)).toBe(3);
  });

  it('should convert hours to days correctly', () => {
    expect(convertTimeUnit(48, HOUR, DAY)).toBe(2);
  });

  it('should convert hours to milliseconds correctly', () => {
    expect(convertTimeUnit(1, HOUR, MILLISECOND)).toBe(3600000);
  });

  it('should convert days to seconds correctly', () => {
    expect(convertTimeUnit(1, DAY, SECOND)).toBe(86400);
  });

  it('should return the original value when converting the same unit', () => {
    const result = convertTimeUnit(100, MILLISECOND, MILLISECOND);
    expect(result).toBe(100);
  });

  it('should handle a value of zero correctly', () => {
    expect(convertTimeUnit(0, SECOND, MINUTE)).toBe(0);
  });

  it('should handle negative values correctly', () => {
    expect(convertTimeUnit(-60, SECOND, MINUTE)).toBe(-1);
  });

  it('should handle large values correctly', () => {
    expect(convertTimeUnit(1000000, MILLISECOND, SECOND)).toBe(1000);
    expect(convertTimeUnit(10, DAY, MILLISECOND)).toBe(864000000);
  });

  it('should convert minutes to days correctly', () => {
    expect(convertTimeUnit(1440, MINUTE, DAY)).toBe(1); // 1440 minutes = 1 day
  });

  it('should handle decimal values for input correctly', () => {
    expect(convertTimeUnit(0.5, HOUR, MINUTE)).toBe(30);
  });
});
