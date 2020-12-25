import { isNil } from '@utils/isNil'
import { isUndefined } from '@utils/isUndefined'

export * from './advancedTypes'

export const is = Construtor => <T>(value: T) =>
  (!isUndefined(value) && !isNil(value) && value.constructor === Construtor) ||
  value instanceof Construtor

export const isBool = is(Boolean)

export const isFunction = is(Function)

export const isPromise = is(Promise)

export const bool = Boolean
export const str = String
export const int = _ => parseInt(_, 10)
export const float = parseFloat

export const isTrusty = bool
export const isFalsy = _value => !bool(_value)

export const isTrue = _ => true
export const isFalse = _ => false
