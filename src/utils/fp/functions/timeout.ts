const SECONDS = 1000

export const timeout = <T>(_fn, _seconds = 0.3) => (_value?: T) => {
  setTimeout(() => _fn(_value), SECONDS * _seconds)

  return _value
}
