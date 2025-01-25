import React, {useRef, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {CameraControls, Environment} from "@react-three/drei";
import {Splat} from "../splat";
import ClickableBox from "./ClickableBox";

export default function Viewer() {
  const [showExterior, setShowExterior] = useState(true);
  const cameraRef = useRef(); // Ref to access the camera
  const controlsRef = useRef(); // Ref to access the camera controls

  const handleBoxClick = () => {
    const targetPosition = [0.01, 0.31, -0.01]; // Position of the box
    const zoomDistance = 0.3; // Adjust for the desired zoom distance

    // Smoothly move the camera to the target position
    if (cameraRef.current && controlsRef.current) {
      const camera = cameraRef.current;
      const controls = controlsRef.current;

      const offsetX = -zoomDistance / 2; // Move left (negative X)
      const offsetY = zoomDistance / 3; // Move up (positive Y)
      const offsetZ = zoomDistance; // Move forward (positive Z)

      camera.position.set(
        targetPosition[0] + offsetX,
        targetPosition[1] + offsetY,
        targetPosition[2] + offsetZ
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
    setShowExterior(false);
  };

  const resetView = () => {
    if (cameraRef.current && controlsRef.current) {
      const camera = cameraRef.current;
      const controls = controlsRef.current;

      // Set the camera position and look-at target to the default view
      camera.position.set(0, 0, 1);
      controls.setLookAt(0, 0, 1, 0, 0, 0, true); // Smooth transition
    }
    setShowExterior(true);
  };

  return (
    <>
      <div>
        {!showExterior && (
          <button className="show-exterior-button" onClick={resetView}>
            Exterior View
          </button>
        )}
      </div>
      <Canvas
        dpr={[1, 1.5]}
        camera={{position: [0, 0, 1], fov: 70}}
        onCreated={({camera}) => (cameraRef.current = camera)}
      >
        <color attach="background" args={["#C4D9FF"]} />
        {showExterior ? (
          <Splat scale={1} rotation={[0, Math.PI, 0]} src="model.splat" />
        ) : null}
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
