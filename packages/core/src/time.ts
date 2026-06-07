import { DAY, HOUR, MILLISECOND, MINUTE, SECOND, TIME_UNIT_CONVERSION, WEEK } from './constants.js';

export type ConvertableTimeUnit = typeof MILLISECOND | typeof SECOND | typeof MINUTE | typeof HOUR | typeof DAY | typeof WEEK;

/**
 * Converts a time value.
 *
 * @param value - The numeric time value to convert
 * @returns The converted time value.
 * @see Constants  
 * - {@link MILLISECOND}
 * - {@link SECOND}
 * - {@link MINUTE}
 * - {@link HOUR}
 * - {@link DAY}
 * - {@link WEEK}
 *
 * @examplesFromTests ../test/time.test.js
 */
export function convertTimeUnit(
  value: number,
  fromUnit: ConvertableTimeUnit,
  toUnit: ConvertableTimeUnit
): number {
  if (fromUnit === toUnit) {
    console.warn(`Nothing to convert (from ${fromUnit} to ${toUnit})`);

    return value;
  }

  return (value * TIME_UNIT_CONVERSION[fromUnit]) / TIME_UNIT_CONVERSION[toUnit];
}
