import React from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls, Environment } from '@react-three/drei';
import { Splat } from '../splat';
import ClickableBox from './ClickableBox';

export default function Viewer() {
  const handleBoxClick = () => {
    console.log('Clickable box clicked!');
  };

  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 1], fov: 70 }}>
      <color attach="background" args={['#C4D9FF']} />
      <Splat scale={1} rotation={[0, Math.PI, 0]} src="model.splat" />
      <Environment preset="apartment" />
      <CameraControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
      />
      <ClickableBox onClick={handleBoxClick} />
    </Canvas>
  );
}
