const memo = {}
const setMemo = (callback, args) =>
  (memo[callback.name][args] = callback(...args))

export const memoize = callback => (...args) => {
  if (!memo[callback.name]) {
    memo[callback.name] = {}
  }

  return memo[callback.name][args]
    ? memo[callback.name][args]
    : setMemo(callback, args)
}
