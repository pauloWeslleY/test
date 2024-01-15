import { ComponentType, FC, ReactNode, Suspense } from 'react'

type LoadableProps = { children?: ReactNode }

const Loadable = <T extends LoadableProps>(
  Component: ComponentType<T>,
): FC<T> => {
  const LoadableComponent: FC<T> = (props) => (
    <Suspense fallback={<span>carregando</span>}>
      <Component {...props} />
    </Suspense>
  )

  LoadableComponent.displayName = `Loadable(${Component.displayName || Component.name || 'Component'})`

  return LoadableComponent
}

export default Loadable