import { isFunction } from '../type'

// TODO: typo this
export const and = (a: any, b: any) => <T>(value?: T) => {
  const aIsFunction = isFunction(a)
  const bIsFunction = isFunction(b)
  if (aIsFunction && bIsFunction) {
    return a(value) && b(value)
  }

  if (aIsFunction && !bIsFunction) {
    return a(value) && b
  }

  if (!aIsFunction && bIsFunction) {
    return a && b(value)
  }

  return a && b
}
