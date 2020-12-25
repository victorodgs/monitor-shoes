// TODO: please refactor this
const hasOwnDeepProperty = (target, source, prop) => {
  if (typeof target === 'object' && target !== null) {
    if (Array.isArray(target[prop])) {
      if (target[prop].length === source[prop].length) {
        return target[prop].reduce(
          // tslint:disable-next-line: no-use-before-declare
          (acc, obj, index) => acc && isDeepHasValues(obj, source[prop][index]),
          true,
        )
      }

      return false
    }
    if (target.hasOwnProperty(prop)) {
      if (source && source.hasOwnProperty(prop)) {
        return target[prop] === source[prop]
      }

      return false
    }

    return Object.keys(target).some(_key => {
      if (hasOwnDeepProperty(target[_key], source, prop)) {
        return target[prop] === source[prop]
      }

      return false
    })
  }

  return false
}

export const isDeepHasValues = <S, T>(source: S, target: T) =>
  Object.keys(source).every(key => hasOwnDeepProperty(source, target, key))
