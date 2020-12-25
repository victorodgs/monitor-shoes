const defaultSlicerNumber = -2
export const roundWithZero = (_value: any): any =>
  `0${_value}`.slice(defaultSlicerNumber)
