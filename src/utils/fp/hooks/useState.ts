import { KeysLocalStorage, loadLocal, saveLocal } from '@services/storage'
import { mergeRight, pick } from '@utils/fp'
import { isUndefined } from '@utils/isUndefined'
import React from 'react'
import { noop } from '../functions'
import { useDidUpdate } from './useDidUpdate'

const hashCodeObject = (obj = {}) =>
  String(
    JSON.stringify(obj)
      .split('')
      .reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0),
  )

const loadLocalStore = <T extends {}>(obj: T, key: KeysLocalStorage) => {
  const local = loadLocal<T>(key)

  if (isUndefined(local)) {
    saveLocal(key, obj)
  }

  return mergeRight(local, true)(obj)
}

interface UseStateOptions {
  allowDeep?: boolean
  allowLocalStore?: boolean
  keyLocalStorage?: KeysLocalStorage
  onSave?: any
}

export type SetState<S> = (
  obj:
    | Partial<S>
    | ((
        prev: S,
      ) => {
        [x: string]: S[keyof S]
      }),
) => Partial<S>

const memoUpdate = {}
export const useState = <S extends {}>(
  // tslint:disable-next-line: no-object-literal-type-assertion
  initialState: S = {} as S,
  options: UseStateOptions = {},
) => {
  const { allowLocalStore = false, allowDeep = false, onSave = noop } = options
  const {
    keyLocalStorage = allowLocalStore ? hashCodeObject(initialState) : '',
  } = options

  type Key = keyof S
  const [$state, _setState] = React.useState<S>(
    allowLocalStore
      ? loadLocalStore(initialState, keyLocalStorage as KeysLocalStorage)
      : initialState,
  )

  useDidUpdate(() => {
    if (allowLocalStore) {
      saveLocal(keyLocalStorage as KeysLocalStorage, onSave($state))
    }

    Object.keys(memoUpdate).forEach(_key =>
      (memoUpdate[_key] || noop)($state[_key]),
    )
  }, [$state])

  const setState = (
    obj: Partial<S> | ((prev: S) => { [x: string]: S[Key] }),
  ) => {
    let result: Partial<S>
    _setState(_prev => {
      const newState =
        typeof obj === 'function'
          ? mergeRight(obj(_prev), allowDeep)(_prev)
          : mergeRight(obj, allowDeep)(_prev)

      result = newState

      return newState
    })

    return result
  }

  const updateState = (_key: Key) => (
    // TODO: Refactor - Change order of the params
    _fn?: (value: S[Key], valueOfCall: any) => S[Key],
  ) => (valueOfCall?: any) => {
    setState(props => ({
      [_key]: isUndefined(_fn) ? valueOfCall : _fn(props[_key], valueOfCall),
    }))

    return valueOfCall
  }

  const pickState = pick($state)

  const onUpdate = (key: Key) => (_fn: (value: any) => any) => {
    // @ts-ignore
    memoUpdate[key] = _fn
  }

  return { pickState, updateState, setState, $state, onUpdate }
}
