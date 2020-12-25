import { isUndefined } from '@utils/isUndefined'
import { noop } from '../functions'
import { isFunction } from '../type'
import { and } from './and'

export const ifElse = <T = unknown>(
  condition: (_: T) => boolean,
  onTrue?: (_: T) => any,
  onFalse: (_: T) => T = noop,
) => (_value?: T) => {
  const valueIsCallback = and(isUndefined(onTrue), isFunction(_value))
  const isTrusty = condition(_value)
  if (valueIsCallback() && isTrusty) {
    // @ts-ignore
    _value()

    return
  }

  return isTrusty ? onTrue(_value) : onFalse(_value)
}
