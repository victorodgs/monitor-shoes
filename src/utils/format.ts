import { PhoneAthelstan } from '@services/kasbah'
import { isNull } from 'util'
import masker from 'vanilla-masker'

export const toBRL = (
  value: number | string,
  withPrefix?: boolean,
  withoutCents?: boolean,
) => {
  const _value = Number(value)
  const valueBrl = `${withPrefix ? 'R$' : ''} ${_value
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3}),)/g, '$1.')}`

  const valueWithoutCents = valueBrl.split(',')[0]

  if (withoutCents) {
    return valueBrl
  }

  return _value ? valueWithoutCents : valueBrl
}

export const isString = (value: unknown) => typeof value === 'string'

export const percentage = (value: number) => `${Math.round(value * 100)}%`

export const percentageNumberToString = (value: number) => `${value}%`

export const percentageStringToNumber = parseFloat

export const cep = (value: string): string =>
  isString(value) ? masker.toPattern(value, '99999-999') : value

export const phone = (
  cellphone: PhoneAthelstan = { number: '', code_area: '' },
): string =>
  isNull(cellphone)
    ? cellphone
    : masker.toPattern(
        cellphone.code_area.toString() + cellphone.number.toString(),
        '(99) 99999-9999',
      )

export const cpf = (value: string): string =>
  isString(value) ? masker.toPattern(value, '999.999.999-99') : value

export const brl = (value: string | number): string =>
  isString(value) || typeof value === 'number'
    ? masker.toMoney(value, {
        precision: 2,
        separator: ',',
        delimiter: '.',
        unit: 'R$',
      })
    : value

export const toRealBRL = (value: string | number): string => {
  let toStringNumber
  if (typeof value === 'string') {
    toStringNumber = value.replace('R$ ', '').replace(',', '.')
  }

  const valueBrl = parseFloat(toStringNumber || value)
  const convertedBrl = valueBrl.toLocaleString('pt-BR')

  return valueBrl % 1 === 0 ? `R$ ${convertedBrl},00` : `R$ ${convertedBrl}`
}
