import { isFunction } from '../type'

export const invoker = key => value => {
  if (isFunction(value[key])) {
    value[key]()
  }

  return value
}
