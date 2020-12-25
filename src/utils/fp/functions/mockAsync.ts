import { awaitTo } from './awaitTo'
import { timeout } from './timeout'

const promise = _value => new Promise(resolve => timeout(resolve)(_value))

export const mockAsync = awaitTo(promise)
