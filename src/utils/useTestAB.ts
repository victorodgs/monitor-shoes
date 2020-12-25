import { useEffect, useState } from 'react'
import { isDesktop } from './getOs'
import { useDidUpdate } from './fp'

const memo = JSON.parse(localStorage.getItem('testAb')) || {}

export const EXPERIMENT_AB = {
  BV: 'HADM7vCSThOTgxhq4v6XUA',
}

export const useTestAB = (experimentId, variants, timeout = Infinity) => {
  const [variant, setVariant] = useState(null)

  useDidUpdate(() => {
    let optimizeTimedOut

    if (timeout !== Infinity) {
      optimizeTimedOut = setTimeout(() => {
        removeCallback()
        setVariant(0)
      }, timeout)
    }
    const callback = value => {
      optimizeTimedOut && clearTimeout(optimizeTimedOut)
      memo[experimentId] = Boolean(value)
      localStorage.setItem('testAb', JSON.stringify(memo))
      setVariant(Number(value))
    }
    // Documented here:
    // https://support.google.com/optimize/answer/9059383?hl=en
    // @ts-ignore
    window.gtag('event', 'optimize.callback', {
      name: experimentId,
      callback,
    })
    const removeCallback = () =>
      // @ts-ignore
      window.gtag('event', 'optimize.callback', {
        name: experimentId,
        callback: () => {},
        remove: true,
      })

    return removeCallback
  }, [experimentId])

  if (__DEV__ || isDesktop) {
    return variants[0]
  }

  return variant !== null ? variants[variant] : null
}
