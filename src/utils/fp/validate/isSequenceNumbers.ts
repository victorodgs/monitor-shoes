export const isSequenceNumbers = (text: string | number) =>
  Array.from(String(text)).every((_num, index, _numbers) => {
    const pos1 = Number(_num) + 1
    const pos2 = Number(_numbers[index + 1])
    const pos3 = pos2 + 1
    const pos4 = Number(_numbers[index + 2])

    return !(pos1 === pos2 && pos3 === pos4)
  })
