import { OptionSelect } from '@components'

export const convertObjToOption = <T extends {}>(obj: T): OptionSelect[] =>
  Object.keys(obj).reduce(
    (acc, key) => [...acc, { value: key, label: obj[key] }],
    [],
  )
