'use client'

import dynamic from 'next/dynamic'

const TestCad = dynamic(() => import('@/components/TestCad'), {
  ssr: false,
})

export default function TestCadPage() {
  return <TestCad />
}
