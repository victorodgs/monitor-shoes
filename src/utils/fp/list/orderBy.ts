interface OrderBy<T, K extends keyof T> {
  key: K
  reverse?: boolean
  primer?(value: T[K]): unknown
}

export const orderBy = <T>(args: keyof T | OrderBy<T, keyof T>) => {
  const { key, reverse, primer }: OrderBy<T, keyof T> =
    typeof args === 'object' ? args : { key: args }

  const keyFn = primer ? (x: T) => primer(x[key]) : (x: T) => x[key]

  return (a: T, b: T) => {
    const valueA = keyFn(a)
    const valueB = keyFn(b)

    if (
      (typeof valueA === 'number' && typeof valueB === 'number') ||
      (typeof valueA === 'string' && typeof valueB === 'string')
    ) {
      // @ts-ignore
      return (reverse ? -1 : 1) * (valueA > valueB) - (valueB > valueA)
    }
    throw new Error(
      'orderBy: function primer type invalid. Can be type number|string',
    )
  }
}
