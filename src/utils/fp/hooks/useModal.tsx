import { Column } from '@components'
import React from 'react'
import { Route, useHistory } from 'react-router'
import { isUndefined } from '@utils/isUndefined'
import { NOT } from '@utils/logic'
import { awaitTo } from '../functions'
import { useState } from './useState'
import { useDidUpdate } from './useDidUpdate'

const ModalContext = React.createContext({})

interface ModalProviderState {
  [key: string]: Partial<{
    isOpen: boolean
    path?: string
    props: any
    result: any
    template: React.ReactNode
    close(value: any): any
  }>
}

const MODAL_DEFAULT_Z_INDEX = 1030
const memoResolve = {}
const memoValue = {}
export const ModalProvider = ({ children }) => {
  const { $state, setState } = useState<ModalProviderState>(
    {},
    { allowLocalStore: false, allowDeep: true },
  )
  const [currentType, setCurrentType] = React.useState('')
  const history = useHistory()

  const setType = (type: string) => {
    const toggle = () =>
      setState(({ [type]: { isOpen } }) => ({
        [type]: { isOpen: NOT(isOpen) },
      }))

    const close = args => {
      toggle()

      if (memoResolve[type]) {
        memoResolve[type](args)
      }

      history.goBack()
      memoResolve[type] = undefined
      memoValue[type] = undefined

      return args
    }

    const setTemplate = (template: React.ReactNode, props) => {
      setState({
        [type]: {
          template,
          close,
          props,
          path: `/${type.toLocaleLowerCase()}`,
        },
      })
    }

    const showAsync = value =>
      new Promise(resolve => {
        memoResolve[type] = resolve
        memoValue[type] = value
        setCurrentType(type)
        toggle()
      })

    const show = awaitTo(showAsync)

    return {
      show,
      setTemplate,
      close,
    }
  }

  useDidUpdate(() => {
    if (NOT(isUndefined($state[currentType]?.isOpen))) {
      history.push($state[currentType].path)
    }
  }, [$state[currentType]?.isOpen])

  const renderOnce = React.useMemo(
    () =>
      Object.keys($state).map((_type, index) => {
        return (
          <Route
            key={_type}
            path={$state[_type].path}
            component={() => (
              <Column height="100%" zIndex={MODAL_DEFAULT_Z_INDEX + index + 1}>
                {React.createElement($state[_type].template as any, {
                  close: $state[_type].close,
                  value: memoValue[_type],
                  ...$state[_type].props,
                })}
              </Column>
            )}
          />
        )
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [$state],
  )

  return (
    <ModalContext.Provider value={setType}>
      {children}
      {renderOnce}
    </ModalContext.Provider>
  )
}

export interface ModalProps {
  value?: any
  close(args?: any): any
}

export interface UseModalProps {
  isOpen: boolean
  close(args?: any): void
  setTemplate(ModalComponent: React.ReactNode, props: any): any
  show(_fn?: any): any
}

export const useModal = (type: string): UseModalProps =>
  (React.useContext(ModalContext) as any)(type)
