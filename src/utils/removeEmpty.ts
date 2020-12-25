import { isNil } from './isNil'
import { isUndefined } from './isUndefined'
import { NOT } from './logic'

const bool = Boolean
const getKeys = obj => Object.keys(obj)
const not = _fn => _value => !_fn(_value)
const noop = a => a
const size = obj => getKeys(obj).length
const and = (a, b) => value => bool(a(value) && b(value))
const isObject = value =>
  typeof value === 'object' &&
  NOT(Array.isArray(value)) &&
  and(not(isUndefined), not(isNil))(value)
const or = (...args) => value => bool(args.find(_ => bool(_(value))))
const pick = _key => value => value[_key]
const set = _key => value => (_key ? { [_key]: value } : {})
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)
const ifElse = (condition, onTrue, onFalse = noop) => value =>
  condition(value) ? onTrue(value) : onFalse(value)
const mergeWith = obj => value => ({ ...obj, ...value })
const reduce = (onArray, fn) => <T>(value: T) =>
  onArray(value).reduce((_acc, _key) => fn(_acc, _key)(value), {}) as T

const canRemove = not(or(isUndefined, isNil, and(isObject, not(size))))

const map = fn => (array = []) => array.map(fn)

export const removeEmpty = reduce(getKeys, (acc, _key) =>
  pipe(
    pick(_key),
    ifElse(isObject, removeEmpty),
    ifElse(Array.isArray, map(removeEmpty)),
    ifElse(canRemove, set(_key)),
    mergeWith(acc),
  ),
)
