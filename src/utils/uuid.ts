const STORAGE_KEY = '_IVAR_UUID'

export const generateUUID = () =>
  // @ts-ignore
  (String([1e7]) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (a: number) =>
    // @ts-ignore
    (a ^ ((Math.random() * 16) >> (a / 4))).toString(16),
  )

export const getLocalUUID = () => {
  const uuid = localStorage.getItem(STORAGE_KEY)

  if (!uuid) {
    const newUuid = generateUUID()
    localStorage.setItem(STORAGE_KEY, newUuid)

    return newUuid
  }

  return uuid
}
