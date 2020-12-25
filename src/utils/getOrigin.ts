import { Origins } from '../store/constants'
import { NOT } from './logic'
import { dispatchNewRelic } from './fp/events/dispatchNewRelic'

let memoOrigin: Origins
export const getOrigin = () => {
  if (memoOrigin) {
    return memoOrigin
  }

  const pathOrigin = __DEV__ && process.env.REACT_APP_PARTNER
  const originByUrl = window.location.pathname.split('/')[1]

  const origin = (originByUrl || pathOrigin) as Origins

  if (NOT(origin)) {
    dispatchNewRelic(new Error('Failed to load origin'))

    return undefined
  }

  memoOrigin = origin

  return origin
}
