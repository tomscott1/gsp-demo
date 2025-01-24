import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls, Environment } from '@react-three/drei';
import { Splat } from '../splat';
import ClickableBox from './ClickableBox';

export default function Viewer() {
  const cameraRef = useRef(); // Ref to access the camera
  const controlsRef = useRef(); // Ref to access the camera controls

  const handleBoxClick = () => {
    const targetPosition = [0.01, 0.31, -0.01]; // Position of the box
    const zoomDistance = 0.3; // Adjust for the desired zoom distance

    // Smoothly move the camera to the target position
    if (cameraRef.current && controlsRef.current) {
      const camera = cameraRef.current;
      const controls = controlsRef.current;

      camera.position.set(
        targetPosition[0],
        targetPosition[1],
        targetPosition[2] + zoomDistance
      );
      controls.setLookAt(
        camera.position.x,
        camera.position.y,
        camera.position.z,
        targetPosition[0],
        targetPosition[1],
        targetPosition[2],
        true // Smooth transition
      );
    }
  };

  return (
    <>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 1], fov: 70 }}
        onCreated={({ camera }) => (cameraRef.current = camera)}
      >
        <color attach="background" args={['#C4D9FF']} />
        <Splat scale={1} rotation={[0, Math.PI, 0]} src="model.splat" />
        <Environment preset="apartment" />
        <CameraControls
          ref={controlsRef}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />
        <ClickableBox onClick={handleBoxClick} />
      </Canvas>
    </>
  );
}
