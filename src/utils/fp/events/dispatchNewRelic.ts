/**
 *
 * API -> https://docs.newrelic.com/docs/browser/new-relic-browser
 *
 */

import { generateUUID } from '../../uuid'

let timeoutId
export const dispatchNewRelic = (e: Error, attributes = {}) => {
  if (__DEV__) {
    console.warn('[New Relic]', e, attributes)
    return
  }
  if (!window && window.newrelic) return

  const nr = window && window.newrelic

  if (!nr) {
    timeoutId = setTimeout(() => dispatchNewRelic(e, attributes), 50)
    return
  }

  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  const interaction = nr.interaction()
  let uuid
  try {
    uuid = localStorage.getItem('uuid')
    if (!uuid) {
      uuid = generateUUID()
      localStorage.setItem('uuid', uuid)
    }
    interaction.setAttribute('uuid', uuid)
  } catch (error) {
    nr.noticeError(error)
    interaction.setName('error', 'Tracker')
    interaction.setAttribute('error', error)
  } finally {
    const error = e.message
    nr.noticeError(e)
    interaction.setName(`view page: ${window.location.pathname}`, 'Tracker')
    interaction.setName('error', 'Tracker')
    interaction.setAttribute('error', error)

    interaction.setName('origin', 'Tracker')
    interaction.setAttribute('origin', window.location.pathname.split('/')[1])

    Object.keys(attributes).forEach(key =>
      interaction.setAttribute(key, attributes[key]),
    )

    interaction.save()
  }
}
;(() => {
  window.addEventListener('offline', e => {
    if (!window.navigator.onLine) {
      dispatchNewRelic(new Error('offline'))
    }
  })
})()
