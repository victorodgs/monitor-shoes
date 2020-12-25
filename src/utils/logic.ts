import { toNumberDecimal } from '@utils/converter'

export const NOT = <T>(x: T): boolean => !x
export const mod = modNumber => num => num % modNumber
export const isEqual = a => b => b === a

export const calcPercentage = (
  income: number | string,
  quota: number | string,
) => {
  const _income = toNumberDecimal(income)
  const _quota = toNumberDecimal(quota)
  const percentageResult = (_quota / _income) * 100

  return Math.round(percentageResult)
}
