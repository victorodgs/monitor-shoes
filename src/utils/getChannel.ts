import { loadLocal, saveLocal } from '@services/storage'

const SEARCH_KEY_CHANNEL = 'channel'

export const getChannel = () => {
  const { search } = window.location
  const params = new URLSearchParams(search)

  if (params.has(SEARCH_KEY_CHANNEL)) {
    const channel = params.get(SEARCH_KEY_CHANNEL)
    saveLocal('channel', channel)
    return channel
  }
  const channel = loadLocal<string>('channel')
  if (channel) {
    return channel
  }

  return 'app'
}
