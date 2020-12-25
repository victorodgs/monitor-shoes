// tslint:disable: max-line-length

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
 *
 */
export const removeSpecialChar = (str: string) =>
  str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
