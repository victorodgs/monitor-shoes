import { ifElse } from '../logical'
import { isTrusty } from '../type'
import { noop } from './noop'

const memo = {}
export const once = (_fn: (...args: any[]) => any) => (_args?: any[]) =>
  ifElse(isTrusty, noop, _value => (_value = _fn(_args)))(memo[_fn.name])
