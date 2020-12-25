export const addEventNewRelic = (name: string) => {
  if (!window || !window.newrelic) return
  const nr = window && window.newrelic
  const interaction = nr.interaction()
  interaction.setAttribute('message', name)
  interaction.save()
}
