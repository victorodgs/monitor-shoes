type Hook<P, T> = (props: P) => T

export const composeHooks = <T, P = any>(hooks: Array<Hook<T, P>>) => (
  Component: (props: P) => JSX.Element,
) => (props: T) => {
  const newProps = {
    ...(hooks.reduce(
      (_props, _hook) => ({
        ..._props,
        ..._hook(props),
      }),
      {},
    ) as P),
  }

  return Component(newProps)
}
