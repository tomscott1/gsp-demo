import React, {useRef, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {CameraControls, Environment} from "@react-three/drei";
import {Splat} from "../splat";
import ClickableBox from "./ClickableBox";
import {CubeTextureLoader, TextureLoader} from "three";
import {Plane} from "@react-three/drei";

export default function Viewer() {
  const [showExterior, setShowExterior] = useState(true);
  const cameraRef = useRef(); // Ref to access the camera
  const controlsRef = useRef(); // Ref to access the camera controls

  const handleBoxClick = () => {
    const targetPosition = [0.01, 0.26, -0.01]; // Position of the box
    const zoomDistance = 0.2; // Adjust for the desired zoom distance

    // Smoothly move the camera to the target position
    if (cameraRef.current && controlsRef.current) {
      const camera = cameraRef.current;
      const controls = controlsRef.current;

      const offsetX = -zoomDistance / 2; // Move left (negative X)
      const offsetY = zoomDistance / 5; // Move up (positive Y)
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

  // const groundTexture = new TextureLoader().load("negy.jpg");

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
        onCreated={({camera, scene}) => {
          cameraRef.current = camera;

          // Load the cube map
          const cubeTextureLoader = new CubeTextureLoader();
          const cubeMap = cubeTextureLoader.load([
            "posx.jpg", // "px.jpg", // Right
            "negx.jpg", // "nx.jpg", // Left
            "posy.jpg", // "py.jpg", // Top
            "negy.jpg", // "ny.jpg", // Bottom
            "posz.jpg", // "pz.jpg", // Front
            "negz.jpg", // "nz.jpg", // Back
          ]);

          // Set the cube map as the scene background
          scene.background = cubeMap;
        }}
      >
        {showExterior ? (
          <Splat scale={1} rotation={[0, Math.PI, 0]} src="model.splat" />
        ) : (
          <Splat
            scale={1.1}
            rotation={[Math.PI, Math.PI, 0]}
            src="model_int.splat"
            position={[0, -0.1, 0]}
          />
        )}
        <Environment preset="apartment" />
        <CameraControls
          ref={controlsRef}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minPolarAngle={0} // Prevents the camera from flipping upside down
          maxPolarAngle={Math.PI / 2 - 0.1} // Limits the downward angle
        />
        {showExterior ? (
          <ClickableBox onClick={handleBoxClick} />
        ) : null }
        
      </Canvas>
    </>
  );
}
