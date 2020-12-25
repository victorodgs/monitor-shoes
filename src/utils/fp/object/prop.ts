export const prop = <Type extends object>(key: keyof Type) => (
  obj: Partial<Type> = {},
) => obj[key] ?? {}
