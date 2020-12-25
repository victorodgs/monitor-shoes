import { NOT } from '@utils/logic'

export const isRepeatString = (text = '') =>
  NOT(new RegExp(/(\w)\1+/).test(text))
