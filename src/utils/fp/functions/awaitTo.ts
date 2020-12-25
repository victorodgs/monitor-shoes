export const awaitTo = (_fn: (value?: any) => Promise<unknown>) => <T>(
  _fn2: (value?: T) => T,
  _fnError?: (err?: Error) => any,
) => (_value?: any) => {
  _fn(_value)
    .then(_fn2)
    .catch(err => {
      console.error(err)
      _fnError(err)
    })

  return _value
}
