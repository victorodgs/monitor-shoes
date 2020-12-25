export const arrayToObject = array =>
  array.reduce(
    (obj, item) => ({
      ...obj,
      [item.key]: item,
    }),
    {},
  )
