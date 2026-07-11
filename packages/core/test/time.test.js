import { DAY, HOUR, MILLISECOND, MINUTE, SECOND } from '../src';
import { convertTime } from '../src/time.js';

describe('convertTime', () => {
  // @isTestExample Milliseconds to seconds
  it('should convert milliseconds to seconds correctly', () => {
    expect(convertTime(5000).from(MILLISECOND).to(SECOND)).toBe(5);
  });

  // @isTestExample Seconds to minutes
  it('should convert seconds to minutes correctly', () => {
    expect(convertTime(120).from(SECOND).to(MINUTE)).toBe(2);
  });

  // @isTestExample Minutes to hours
  it('should convert minutes to hours correctly', () => {
    expect(convertTime(180).from(MINUTE).to(HOUR)).toBe(3);
  });

  it('should convert hours to days correctly', () => {
    expect(convertTime(48).from(HOUR).to(DAY)).toBe(2);
  });

  it('should convert hours to milliseconds correctly', () => {
    expect(convertTime(1).from(HOUR).to(MILLISECOND)).toBe(3600000);
  });

  it('should convert days to seconds correctly', () => {
    expect(convertTime(1).from(DAY).to(SECOND)).toBe(86400);
  });

  it('should return the original value when converting the same unit', () => {
    expect(convertTime(100).from(MILLISECOND).to(MILLISECOND)).toBe(100);
  });

  it('should handle a value of zero correctly', () => {
    expect(convertTime(0).from(SECOND).to(MINUTE)).toBe(0);
  });

  it('should handle negative values correctly', () => {
    expect(convertTime(-60).from(SECOND).to(MINUTE)).toBe(-1);
  });

  it('should handle large values correctly', () => {
    expect(convertTime(1000000).from(MILLISECOND).to(SECOND)).toBe(1000);
    expect(convertTime(10).from(DAY).to(MILLISECOND)).toBe(864000000);
  });

  it('should convert minutes to days correctly', () => {
    expect(convertTime(1440).from(MINUTE).to(DAY)).toBe(1); // 1440 minutes = 1 day
  });

  it('should handle decimal values for input correctly', () => {
    expect(convertTime(0.5).from(HOUR).to(MINUTE)).toBe(30);
  });
});
