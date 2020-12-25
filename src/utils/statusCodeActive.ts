import { useHistory } from 'react-router'

export const StatusCodeActive = () => {
  const {
    location: { pathname },
  } = useHistory()

  const statusActive =
    pathname.indexOf('/personal-data/') !== -1 &&
    pathname.substring(pathname.length - 3, pathname.length)

  return statusActive
}

export const getTitleByStatusCode = titles => {
  return titles[StatusCodeActive()] || titles.default
}
