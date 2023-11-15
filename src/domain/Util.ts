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