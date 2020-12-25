import { isObject } from './isObject'

export const pick = <T extends object, K extends keyof T>(obj: T) => (
  ...keys: K[]
): Partial<Pick<T, K>> =>
  keys.reduce<T>(
    (acc, _key) => ({
      ...acc,
      [_key]: obj[_key],
    }),
    {} as any,
  )

export const pickValue = <T extends object, K extends keyof T>(obj: T) => <A>(
  key: K,
  defaultValue?: any,
): A => (isObject(obj) ? obj[key] ?? defaultValue : defaultValue)
