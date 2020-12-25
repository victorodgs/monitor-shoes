const SEARCH_KEY_METASESSION = 'meta_session'

export const getMetasession = () => {
  const { search } = window.location
  const params = new URLSearchParams(search)

  if (params.has(SEARCH_KEY_METASESSION)) {
    const metasession = params.get(SEARCH_KEY_METASESSION).replace(/ /g, '+')

    if (metasession[0] === '/') {
      return metasession.replace('/', '')
    }

    return metasession
  }

  return ''
}
