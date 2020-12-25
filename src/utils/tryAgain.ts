export const tryAgain = <T>(fn, limit = 3, trying = 1) => async (
  ...args
): Promise<T> => {
  const result = await fn(...args)

  if (result) {
    return result
  }

  if (limit === trying) {
    return result
  }

  return tryAgain<T>(fn, limit, trying + 1)(...args)
}
