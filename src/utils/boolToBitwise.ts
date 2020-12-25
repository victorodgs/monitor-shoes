import { isNil } from './isNil'
import { isUndefined } from './isUndefined'

export const boolToBitwise = (value: null | undefined | boolean) => {
  if (isNil(value) || isUndefined(value)) {
    return ''
  }

  return value ? '1' : '0'
}
