import { isPromise, dispatchNewRelic } from './fp'

export type ErrorTo = Error & { code?: string }

export const to = <T>(
  promise: Promise<T>,
): Promise<[ErrorTo | undefined, T]> => {
  if (!isPromise(promise)) {
    dispatchNewRelic(new Error('unknown error'), {
      message: `[lib:to]: isn't promise`,
    })
  }

  return (
    promise
      .then<[undefined, T]>((res: T) => [undefined, res])
      // tslint:disable-next-line: no-any
      .catch<[ErrorTo, any]>((err: ErrorTo) => [err, undefined])
  )
}
