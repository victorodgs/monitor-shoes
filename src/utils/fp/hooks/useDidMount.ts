import React from 'react'
import { ifElse } from '../logical/ifElse'
import { isFunction } from '../type'

export const useDidMount = (callback: (value: any) => any): any => {
  const didMount = () => {
    ifElse(isFunction)(callback)
  }

  React.useEffect(didMount, [])
}
