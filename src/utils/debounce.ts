const DEBOUNCES_STATE = {}
const DEFAULT_TIME = 300

export const debounce = (fn, milliseconds = DEFAULT_TIME) => (...args) =>
  new Promise(resolve => {
    if (typeof fn !== 'function') {
      throw new Error('debounce require only function')
    }

    const key = fn.name
    if (DEBOUNCES_STATE[key]) {
      clearTimeout(DEBOUNCES_STATE[key])
    }

    DEBOUNCES_STATE[key] = setTimeout(() => resolve(fn(...args)), milliseconds)
  })
