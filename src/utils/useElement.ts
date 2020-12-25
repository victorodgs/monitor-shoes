import React from 'react'

const BASE_FONTE_SIZE = 16

export enum VariablesCss {
  height = '--height',
  heightMax = '--max-height',
  heightMin = '--min-height',
  width = '--width',
  background = '--background',
  color = '--color',
  zIndex = '--z-index',
  overflow = '--overflow',
  grow = '--flex-grow',
  basis = '--flex-basis',
  shrink = '--flex-shrink',
  margin = '--margin',
  padding = '--padding',
  display = '--display',
}

export const calcToRem = (px: number) =>
  px ? String(`${px / BASE_FONTE_SIZE}rem`) : 'initial'

const normalizeValue = (value: string | number) =>
  isNaN(Number(value)) && typeof value === 'string'
    ? value
    : calcToRem(Number(value))

export const useElement = <T extends HTMLDetailsElement>() => {
  const ref = React.useRef<T>()
  const setProperty = (
    propCss: keyof typeof VariablesCss,
    value: number | string,
  ) => {
    const mapperPropCssLiteral = {
      [propCss]: () => value as string,
      [VariablesCss.height]: () => normalizeValue(value),
      [VariablesCss.heightMax]: () => normalizeValue(value),
      [VariablesCss.heightMin]: () => normalizeValue(value),
      [VariablesCss.width]: () => normalizeValue(value),
      [VariablesCss.margin]: () => normalizeValue(value),
      [VariablesCss.padding]: () => normalizeValue(value),
    }

    ref.current.style.setProperty(propCss, mapperPropCssLiteral[propCss]())
  }

  return { ref, setProperty }
}
