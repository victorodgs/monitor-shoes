export const fromEventValue = (_fn: (value: string) => any) => event => {
  const {
    target: { value },
  } = event

  _fn(value)
}
