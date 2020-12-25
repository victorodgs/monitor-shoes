import { isString } from '@utils/format'

export const toUpperCase = (value: string) =>
  isString(value) ? String(value).toUpperCase() : value
