export const convertPhoneToObject = (phoneString = '') => ({
  code_area: phoneString.slice(1, 3),
  number: phoneString.slice(5, phoneString.length),
})
