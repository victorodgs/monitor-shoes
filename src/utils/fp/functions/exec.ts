export const exec = (_fn, args = undefined) => _value => {
  _fn(args, _value)

  return _value
}
