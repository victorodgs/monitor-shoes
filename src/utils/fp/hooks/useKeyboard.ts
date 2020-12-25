import { invoker, pipe, timeout } from '../functions'
import { prop } from '../object'
import { useDidMount } from './useDidMount'

export const useKeyboard = (
  ref: React.MutableRefObject<HTMLInputElement>,
): React.MutableRefObject<HTMLInputElement> => {
  const pipedClick = pipe(prop('current'), invoker('click'))

  const didMount = () => timeout(pipedClick, 0)(ref)

  useDidMount(didMount)

  return ref
}
