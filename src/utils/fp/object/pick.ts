export const pick = <T>(obj: T = {} as T) => <K extends keyof T>(
  key: K,
): T[K] => obj[key] as any
