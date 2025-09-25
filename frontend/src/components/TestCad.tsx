'use client'

import { Loader2Icon } from 'lucide-react'
import * as React from 'react'

import { CadViewer } from '@/components/3d/Viewer'
import { useBuilderStore } from '@/state/builderState'

export default function TestCad() {
  const shapes = useBuilderStore((state) => state.shapes)
  const hasError = !!useBuilderStore((state) => state.error)
  const workerReady = useBuilderStore((state) => state.workerReady)

  const initWorker = useBuilderStore((state) => state.initWorker)
  const build = useBuilderStore((state) => state.build)

  React.useEffect(() => {
    initWorker()
  }, [initWorker])

  React.useEffect(() => {
    if (workerReady) {
      build()
    }
  }, [workerReady, build])

  if (!workerReady) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <div className='flex flex-col gap-2'>
          <div>
            <Loader2Icon className='animate-spin fill-primary' />
          </div>
          <div>Initializeing CAD kernel</div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full h-full fixed top-0 left-0 -z-10 '>
      <CadViewer shapes={shapes || []} hasError={hasError} />
    </div>
  )
}
