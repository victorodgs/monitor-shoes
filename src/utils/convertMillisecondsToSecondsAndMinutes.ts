const ONE_MINUTE_IN_MILLISECONDS = 60000
const ONE_SECOND_IN_MILLISECONDS = 1000

export const convertMillisecondsToSecondsAndMinutes = (
  milliseconds: number,
) => ({
  minutes: Math.floor(milliseconds / ONE_MINUTE_IN_MILLISECONDS),
  seconds: Number(
    (
      (milliseconds % ONE_MINUTE_IN_MILLISECONDS) /
      ONE_SECOND_IN_MILLISECONDS
    ).toFixed(0),
  ),
})
