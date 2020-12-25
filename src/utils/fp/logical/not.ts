import { isFunction } from '../type'

export const not = <T>(_fn?: (_value?: T) => T) => (_value?: T) => {
  if (isFunction(_fn)) {
    return !_fn(_value)
  }

  return !_value
}
