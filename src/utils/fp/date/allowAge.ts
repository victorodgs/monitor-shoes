import { NOT } from '@utils/logic'
import { normalizeDate } from './normalizeDate'

const oneYearInMilliseconds = 31557600000

export const allowAge = ({ minAge = 1, maxAge = 100 }) => date => {
  const dateSplitter = normalizeDate(date)

  if (NOT(dateSplitter)) {
    return false
  }

  const { year, month, day } = dateSplitter

  const timestampInputted = new Date(`${month}/${day}/${year}`).getTime()

  const age = Math.floor(
    (new Date().getTime() - timestampInputted) / oneYearInMilliseconds,
  )

  const ageNotAllowed = !(age >= minAge && age <= maxAge)

  if (ageNotAllowed) {
    return false
  }

  return true
}
