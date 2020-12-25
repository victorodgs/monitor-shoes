export const getDateIso = () => {
  const date = new Date()
  const localTime = date.getTime() - date.getTimezoneOffset() * 60 * 1000
  const localDateTime = new Date(localTime).toISOString()

  return localDateTime
}
