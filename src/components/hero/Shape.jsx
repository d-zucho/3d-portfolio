import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import React from 'react'

const Shape = () => {
  return (
    <>
      <Sphere
        args={[1, 100, 200]}
        position={[0, 0, 0]}
        scale={1.8}
        distort={0.5}
        rotation={[0, 0, 0]}
      >
        <MeshDistortMaterial
          color={'#D88B98'}
          attach={'material'}
          distort={0.5}
          speed={1}
        />
      </Sphere>

      <ambientLight intensity={3} />
      <directionalLight position={[1, 2, 3]} />
    </>
  )
}

export default Shape
