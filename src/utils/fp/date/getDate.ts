import { normalizeDate } from './normalizeDate'

export const getDate = (date: string | ReturnType<typeof normalizeDate>) => {
  const normalized = typeof date === 'string' ? normalizeDate(date) : date

  if (normalized) {
    const { day, month, year } = normalized

    return new Date(`${month}-${day}-${year}`)
  }

  return false
}
