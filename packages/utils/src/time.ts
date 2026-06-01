import { DAY, HOUR, MILLISECOND, MINUTE, SECOND, TIME_UNIT_CONVERSION, WEEK } from './constants.js';

export type ConvertableTimeUnit = typeof MILLISECOND | typeof SECOND | typeof MINUTE | typeof HOUR | typeof DAY | typeof WEEK;

/**
 * Converts a time value.
 *
 * @param value A number to convert
 * @param fromUnit The unit of the number to convert
 * @param toUnit The targeted unit
 *
 * @see Constants </br>
 * {@link MILLISECOND}</br>
 * {@link SECOND}</br>
 * {@link MINUTE}</br>
 * {@link HOUR}</br>
 * {@link DAY}</br>
 * {@link WEEK}
 *
 * @examplesFromTests ../test/time.test.js
 */
export function convertTimeUnit(value: number, fromUnit: ConvertableTimeUnit, toUnit: ConvertableTimeUnit) {
  if (fromUnit === toUnit) {
    console.warn(`Nothing to convert (from ${fromUnit} to ${toUnit})`);

    return value;
  }

  return (value * TIME_UNIT_CONVERSION[fromUnit]) / TIME_UNIT_CONVERSION[toUnit];
}
