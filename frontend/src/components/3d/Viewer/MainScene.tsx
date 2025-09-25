import * as React from 'react'

import Controls from './Controls'
import { InfiniteGrid } from './InfiniteGrid'
import Stage from './Stage'

export const MainScene: React.FC<SceneProps> = ({
  children,
  hideGizmo = false,
  enableDamping = false,
  center,
}) => {
  return (
    <>
      <Controls hideGizmo={hideGizmo} enableDamping={enableDamping} />
      <Stage center={center}>{children}</Stage>
      <InfiniteGrid />
    </>
  )
}

type SceneProps = {
  hideGizmo?: boolean
  enableDamping?: boolean
  center?: boolean
  children: React.ReactNode
}
