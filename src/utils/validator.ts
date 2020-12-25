import { toNumber } from './converter'
import { isEqual, mod, NOT } from './logic'

const mod11 = mod(11)
const mergeDigits = (num1, num2) => `${num1}${num2}`
const getTwoLastDigits = cpf => `${cpf[9]}${cpf[10]}`
const getCpfNumeral = cpf => cpf.substr(0, 9).split('')

export const isRepeatingChars = str =>
  str.split('').every(elem => elem === str[0])

export const validateIncome = (value, minimumSalary) =>
  toNumber(value) >= minimumSalary

export const isIntervalOf = (value: number, min: number, max: number) =>
  value < min || value > max

const toSumOfProducts = multiplier => (result, num, i) =>
  result + num * multiplier--

const getSumOfProducts = (list, multiplier) =>
  list.reduce(toSumOfProducts(multiplier), 0)

const getValidationDigit = multiplier => cpf =>
  getDigit(mod11(getSumOfProducts(cpf, multiplier)))

const getDigit = num => (num > 1 ? 11 - num : 0)

const isRepeatingNumbersCpf = isRepeatingChars

const isValidCPF = cpf => {
  const CPF = getCpfNumeral(cpf)
  const firstDigit = getValidationDigit(10)(CPF)
  const secondDigit = getValidationDigit(11)(CPF.concat(firstDigit))

  return isEqual(getTwoLastDigits(cpf))(mergeDigits(firstDigit, secondDigit))
}

export const validateMoreThenOneMillion = value => toNumber(value) >= 100000000

export const validatePhone = phone =>
  new RegExp(
    '^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$',
  ).test(phone)

export const validateCPF = CPF =>
  NOT(isRepeatingNumbersCpf(String(CPF))) && isValidCPF(String(CPF))

export const removeEmptyAndBlank = obj => {
  const response = Object.fromEntries(
    Object.entries(obj)
      .filter(([key, v]) => {
        if (typeof v === 'string' && v.trim() === '') return false

        return v !== undefined && v !== null
      })
      .map(([key, v]) => {
        if (typeof v === 'object' && !Array.isArray(v)) {
          return [key, removeEmptyAndBlank(v)]
        }

        return [key, Array.isArray(v) ? v.map(removeEmptyAndBlank) : v]
      }),
  )

  return response
}

export const cnpjValidation = value => {
  if (NOT(value)) return false

  const validTypes =
    typeof value === 'string' || Number.isInteger(value) || Array.isArray(value)

  if (NOT(validTypes)) return false

  const numbers = value
    .toString()
    .match(/\d/g)
    .map(Number)

  const calc = number => {
    const slice = numbers.slice(0, number)
    let factor = number - 7
    let sum = 0

    for (let i = number; i >= 1; i--) {
      const sliceNumbers = slice[number - i]
      sum += sliceNumbers * factor--
      if (factor < 2) factor = 9
    }

    const result = 11 - (sum % 11)

    return result > 9 ? 0 : result
  }

  const digits = numbers.slice(12)

  const digit0 = calc(12)
  if (NOT(isEqual(digit0)(digits[0]))) return false

  const digit1 = calc(13)
  return isEqual(digit1)(digits[1])
}
