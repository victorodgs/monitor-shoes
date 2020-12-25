import { isObject } from '@utils/isObject'

export const mergeRight = <T>(source: T, allowDeep?: boolean) => <P>(
  target: P,
): P & T => {
  const isDeep = prop =>
    allowDeep &&
    isObject(source[prop]) &&
    target.hasOwnProperty(prop) &&
    isObject(target[prop])
  const replaced = Object.getOwnPropertyNames(source)
    .map(prop => ({
      [prop]: (() => {
        if (Array.isArray(source[prop])) {
          return source[prop]
        }

        return isDeep(prop)
          ? mergeRight(source[prop])(target[prop])
          : source[prop]
      })(),
    }))
    .reduce((a, b) => ({ ...a, ...b }), {})

  return {
    ...target,
    ...replaced,
  } as any
}
