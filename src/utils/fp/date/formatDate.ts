import { NOT } from '@utils/logic'
import { normalizeDate } from './normalizeDate'
import { getDate } from './getDate'

export const formatDate = ({
  date,
  format,
}: {
  date: string
  format: 'DD/MM/YYYY' | 'YYYY-MM-DD'
}) => {
  const normalized = normalizeDate(date)

  if (NOT(normalized)) {
    return null
  }

  const { day, month, year } = normalized

  return format
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', year)
}

export const formatDateToBrl = (date: string) =>
  formatDate({
    date,
    format: 'DD/MM/YYYY',
  })

export const formatDateToUsa = (date: string) =>
  formatDate({
    date,
    format: 'YYYY-MM-DD',
  })

export const isDateHasOlder = (dateBefore: string) => (dateAfter: string) =>
  getDate(dateBefore) >= getDate(dateAfter)
