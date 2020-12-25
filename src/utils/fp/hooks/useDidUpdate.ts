import React from 'react'
import { ifElse } from '../logical/ifElse'
import { isFunction } from '../type'

export const useDidUpdate = (
  callback: (prop?: any) => any,
  when: any[],
): void => {
  const didUpdate = () => ifElse(isFunction)(callback)
  React.useEffect(didUpdate, when)
}
