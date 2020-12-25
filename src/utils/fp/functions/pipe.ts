export function pipe<T, U, V>(fn1: (t: T) => U, fn2: (u: U) => V): (t?: T) => V
export function pipe<T, U, V, W>(
  fn1: (t: T) => U,
  fn2: (u: U) => V,
  fn3: (v: V) => W,
): (t?: T) => W

export function pipe<T, U, V, W, X>(
  fn1: (t: T) => U,
  fn2: (u: U) => V,
  fn3: (v: V) => W,
  fn4: (w: W) => X,
): (t?: T) => X

export function pipe<T, U, V, W, X, Y>(
  fn1: (t: T) => U,
  fn2: (u: U) => V,
  fn3: (v: V) => W,
  fn4: (w: W) => X,
  fn5: (w: X) => Y,
): (t?: T) => Y

export function pipe(...fns: Function[]) {
  return value => fns.reduce((v, fn) => fn(v), value)
}
