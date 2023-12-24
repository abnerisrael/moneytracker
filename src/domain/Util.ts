import moment, * as moments from 'moment';
import 'moment/locale/pt-br';

/**
 * Formats a string money value
 * to number.
 * 
 * @param value 
 * @returns 
 */
export const moneyToNumber = (value: string): number => {
  const matches = value.match(/(\d|,|\.)+/g);
  if (!matches) return NaN;
  const valorNumerico = parseFloat(matches.join('').replace(',', '.'));
  return valorNumerico;
}

export const dateToMoment = (date: Date) => moment(date);
