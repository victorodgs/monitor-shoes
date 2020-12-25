export const validateCNH = (cnh: string) => {
  const char1 = cnh.charAt(0)
  let i
  let v
  let j

  if (cnh.replace(/[^\d]/g, '').length !== 11 || char1.repeat(11) === cnh) {
    return false
  }

  for (i = 0, j = 9, v = 0; i < 9; i += 1, j -= 1) {
    v += Number(cnh.charAt(i)) * j
  }

  let dsc = 0
  let vl1 = v % 11

  if (vl1 >= 10) {
    vl1 = 0
    dsc = 2
  }

  for (i = 0, j = 1, v = 0; i < 9; i += 1, j += 1) {
    v += Number(cnh.charAt(i)) * j
  }

  const x = v % 11
  const vl2 = x >= 10 ? 0 : x - dsc

  return `${vl1}${vl2}` === cnh.substr(-2)
}
