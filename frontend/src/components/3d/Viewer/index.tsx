import type * as React from 'react'
import * as THREE from 'three'

import { ReplicadCombinedMesh } from '@/components/3d/Replicad/ReplicadCombinedMesh'
import { SVGViewer } from '@/components/custom/cad/SvgViewer'
import type { MeshRenderOutput, SvgRenderOutput } from '@/types/cad'

import { Canvas } from './Canvas'
import { ErrorMesh } from './ErrorMesh'
import type { SelectionType } from './hooks/useSelection'
import { useSelection } from './hooks/useSelection'
import { MainScene } from './MainScene'

THREE.Object3D.DEFAULT_UP.set(0, 0, 1)

const isSvgShapesArray = (
  shapes: (MeshRenderOutput | SvgRenderOutput)[]
): shapes is SvgRenderOutput[] => {
  return shapes.length > 0 && shapes[0].format === 'svg'
}

const isMeshShape = (
  shape: MeshRenderOutput | SvgRenderOutput
): shape is MeshRenderOutput => {
  return (shape as MeshRenderOutput).format === '3d'
}

const highlight = (selection: SelectionType | null, shapeId: string) => {
  return selection && shapeId === selection.shapeId ? selection.index : null
}

export const CadViewer: React.FC<CadViewerProps> = ({
  shapes,
  hasError = false,
  selectionMode = 'all',
}) => {
  const [selectedFace, selectFace] = useSelection(selectionMode, [
    'all',
    'faces',
  ])
  const [selectedEdge, selectEdge] = useSelection(selectionMode, [
    'all',
    'edges',
  ])

  if (isSvgShapesArray(shapes)) {
    return <SVGViewer shapes={shapes} />
  }

  return (
    <Canvas
      orthographic
      onCreated={(state) => (state.gl.localClippingEnabled = true)}
    >
      <MainScene>
        {hasError ? (
          <ErrorMesh />
        ) : (
          shapes.map((shape) => {
            const facesHighlight = highlight(selectedFace, shape.name)
            const edgesHighlight = highlight(selectedEdge, shape.name)

            return isMeshShape(shape) ? (
              <ReplicadCombinedMesh
                onEdgeClick={selectEdge(shape.name)}
                onFaceClick={selectFace(shape.name)}
                facesHighlight={
                  facesHighlight !== null ? [facesHighlight] : undefined
                }
                edgesHighlight={
                  edgesHighlight !== null ? [edgesHighlight] : undefined
                }
                shape={shape}
                key={shape.name}
              />
            ) : null
          })
        )}
      </MainScene>
    </Canvas>
  )
}

type CadViewerProps = {
  shapes: (MeshRenderOutput | SvgRenderOutput)[]
  hasError?: boolean
  selectionMode?: 'all' | 'faces' | 'edges'
}
