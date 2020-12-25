import { NOT } from '@utils/logic'

const extractPartsOfDateByString = (value = '') => {
  let day: string
  let month: string
  let year: string
  const [prefix] = ['/', '-'].filter(_prefix => value.match(_prefix))

  if (!prefix) {
    return false
  }

  const splitters = {
    '/': () => {
      ;[day, month, year] = value.split(prefix)
    },
    '-': () => {
      ;[year, month, day] = value.split(prefix)
    },
  }

  splitters[prefix]()

  return {
    day,
    month,
    year,
  }
}

export const normalizeDate = (value: string) => {
  const MONTH_OF_YEAR = 12
  const date = extractPartsOfDateByString(value)

  if (NOT(date)) {
    return null
  }

  // @ts-ignore
  const { day, month, year } = date

  if (NOT(day) || NOT(month) || NOT(year)) {
    return null
  }

  const daysInMonth = new Date(Number(year), Number(month), 0).getDate()
  const isGreaterThanDayOfMonth = Number(day) > daysInMonth
  const isGreaterMonthThan = Number(month) > MONTH_OF_YEAR
  const currentYear = new Date().getFullYear()
  const maxAge = 115
  const itsLive = Number(year) <= currentYear - maxAge
  const futureYear = Number(year) > new Date().getFullYear()
  const wrongYear = year.length !== 4
  const isInvalidYear = wrongYear || itsLive || futureYear

  if (isGreaterThanDayOfMonth || isGreaterMonthThan || isInvalidYear) {
    return null
  }

  return {
    day,
    month,
    year,
  }
}
