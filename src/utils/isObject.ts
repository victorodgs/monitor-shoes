import { isNil } from './isNil'
import { isUndefined } from './isUndefined'
import { NOT } from './logic'

export const isObject = (value: unknown) =>
  typeof value === 'object' && NOT(isUndefined(value)) && NOT(isNil(value))
