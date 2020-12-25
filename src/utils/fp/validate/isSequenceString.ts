import { NOT } from '@utils/logic'

export const isSequenceString = (text: string) => {
  for (let index = 0; index < text.length - 2; index++) {
    const currentChar = text.charCodeAt(index)
    const oneCharLater = text.charCodeAt(index + 1)
    const twoCharLater = text.charCodeAt(index + 2)

    return NOT(
      (currentChar + 1 === oneCharLater && currentChar + 2 === twoCharLater) ||
        (currentChar - 1 === oneCharLater && currentChar - 2 === twoCharLater),
    )
  }
}
