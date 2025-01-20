import { Canvas } from '@react-three/fiber';
import { CameraControls, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import { Splat } from '../splat';

export default function Viewer() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 1], fov: 70 }}>
      <color attach="background" args={['#C4D9FF']} />
      <Splat scale={1} rotation={[0, Math.PI, 0]} src="model.splat" />

      <Environment preset="apartment" />
      <CameraControls
        enablePan={false}
        minAzimuthAngle={-Math.PI / 1}
        maxAzimuthAngle={Math.PI / 1}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
