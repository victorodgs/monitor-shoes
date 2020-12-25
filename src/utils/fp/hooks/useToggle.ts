import React from 'react'

export const useToggle = (
  initialState = false,
): [boolean, <T>(value?: T) => T] => {
  const [toggle, setToggle] = React.useState(initialState)

  const doToogle = <T>(value?: T) => {
    setToggle(_bool => !_bool)

    return value
  }

  return [toggle, doToogle]
}
