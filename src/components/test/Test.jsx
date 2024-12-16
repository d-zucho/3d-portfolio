import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Test = () => {
  return (
    <section style={{ display: 'flex', alignItems: 'center' }}>
      <Canvas>
        <mesh>
          <Sphere
            args={[1, 100, 200]}
            position={[0, 0, 0]}
            scale={1.5}
            distort={0.5}
            rotation={[0, 0, 0]}
          >
            <MeshDistortMaterial
              color={'#D88B98'}
              attach={'material'}
              distort={0.5}
              speed={2}
            />
          </Sphere>
          {/* <meshStandardMaterial color={'red'} /> */}

          <ambientLight intensity={1} />
          <directionalLight position={[1, 2, 3]} />
          {/* <OrbitControls enableZoom={false} /> */}
        </mesh>
      </Canvas>
    </section>
  )
}

export default Test
