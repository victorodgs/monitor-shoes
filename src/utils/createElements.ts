import * as Components from '@components'
import React from 'react'

export type ComponentsByCreateElement = ComponentByCreateElement[]
interface ComponentByCreateElement {
  children?: ComponentsByCreateElement
  props?: any
  type: keyof typeof Components
}

export const createElements = components =>
  components.map((_component, index) =>
    React.createElement(Components[_component.type], {
      ..._component.props,
      key: index,
      children: _component.children
        ? createElements(_component.children)
        : null,
    }),
  )
