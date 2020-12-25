const oneThousand = 1000
const sixty = 60
const oneDayInHours = 24
const yearInDays = 365.25

export const differenceBetweenDates = (newDate, oldDate) => {
  let diff = (newDate.getTime() - oldDate.getTime()) / oneThousand
  diff /= sixty * sixty * oneDayInHours

  return Math.abs(Math.round(diff / yearInDays))
}
