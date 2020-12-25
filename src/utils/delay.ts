export const delay = (timerInMs = 1000) =>
  new Promise(resolve => setTimeout(resolve, timerInMs))
