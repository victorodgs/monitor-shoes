import { to } from './to'

export const request = async (url, options = {}, trying = 1) => {
  // TODO: Fazer timeout
  const [err, result] = await to(fetch(url, options))

  if (err && trying >= 3) {
    throw err
  }

  if (err) {
    return request(url, options, trying + 1)
  }

  return result
}
