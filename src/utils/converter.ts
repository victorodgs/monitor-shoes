export const toNumber = (value: string | number) =>
  Number(
    String(value)
      .toString()
      .replace(/\D/g, ''),
  )

export const toNumberString = (value = '') => value.replace(/\D/g, '')

export const toNumberDecimal = (value: string | number) =>
  Number(
    String(value)
      .replace(/[^0-9,]+/g, '')
      .replace(',', '.'),
  )
