import { safeDivide } from '../src';

describe('safeDivide', () => {
  it('should return the correct quotient for positive numbers', () => {
    expect(safeDivide(6, 2)).toBe(3);
  });

  it('should return the correct quotient for negative numbers', () => {
    expect(safeDivide(-10, 2)).toBe(-5);
    expect(safeDivide(10, -2)).toBe(-5);
    expect(safeDivide(-10, -2)).toBe(5);
  });

  it('should return the correct quotient for fractional numbers', () => {
    expect(safeDivide(1, 4)).toBe(0.25);
    expect(safeDivide(0.5, 0.1)).toBe(5);
  });

  it('should return 0 when the denominator is 0 (and numerator is non-zero)', () => {
    expect(safeDivide(1, 0)).toBe(0);
    expect(safeDivide(123, 0)).toBe(0);
    expect(safeDivide(-5, 0)).toBe(0);
  });

  it('should return 0 when both numerator and denominator are 0', () => {
    expect(safeDivide(0, 0)).toBe(0);
  });

  it('should return 0 when the numerator is 0 (and denominator is non-zero)', () => {
    expect(safeDivide(0, 1)).toBe(0);
    expect(safeDivide(0, 100)).toBe(0);
    expect(safeDivide(0, -5)).toBe(0);
  });

  // @isTestExample Handling NaN
  it('should return 0 if one of the numbers is NaN', () => {
    expect(safeDivide(NaN, 1)).toBe(0);
    expect(safeDivide(NaN, 0)).toBe(0);
    expect(safeDivide(NaN, NaN)).toBe(0);
    expect(safeDivide(NaN, Infinity)).toBe(0);
    expect(safeDivide(1, NaN)).toBe(0);
    expect(safeDivide(0, NaN)).toBe(0);
    expect(safeDivide(Infinity, NaN)).toBe(0);
    expect(safeDivide(NaN, NaN)).toBe(0);
  });

  // @isTestExample Handling Infinity
  it('should return 0 if one of the numbers is infinity', () => {
    expect(safeDivide(Infinity, 2)).toBe(0);
    expect(safeDivide(-Infinity, 2)).toBe(0);
    expect(safeDivide(Infinity, 0)).toBe(0);
    expect(safeDivide(-Infinity, 0)).toBe(0);
    expect(safeDivide(Infinity, Infinity)).toBe(0);
    expect(safeDivide(Infinity, -Infinity)).toBe(0);
    expect(safeDivide(2, Infinity)).toBe(0);
    expect(safeDivide(2, -Infinity)).toBe(0);
    expect(safeDivide(0, Infinity)).toBe(0);
    expect(safeDivide(0, -Infinity)).toBe(0);
    expect(safeDivide(Infinity, Infinity)).toBe(0);
    expect(safeDivide(-Infinity, Infinity)).toBe(0);
    expect(safeDivide(Infinity, Infinity)).toBe(0);
    expect(safeDivide(Infinity, -Infinity)).toBe(0);
    expect(safeDivide(-Infinity, Infinity)).toBe(0);
    expect(safeDivide(-Infinity, -Infinity)).toBe(0);
  });

  // @isTestExample Handling null or undefined
  it('should return 0 if one of the inputs if null or undefined', () => {
    expect(safeDivide(null, 5)).toBe(0);
    expect(safeDivide(5, null)).toBe(0);
    expect(safeDivide(undefined, 5)).toBe(0);
    expect(safeDivide(5, undefined)).toBe(0);
  });
});
