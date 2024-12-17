import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { BoxModel } from './BoxModel'

const BoxModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback='loading...'>
        <Stage environment={'night'}>
          <BoxModel />
        </Stage>
        <OrbitControls enableZoom={false} />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  )
}

export default BoxModelContainer
