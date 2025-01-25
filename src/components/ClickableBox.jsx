import {useRef} from "react";
import {useGLTF} from "@react-three/drei";

const ClickableBox = ({onClick}) => {
  const meshRef = useRef();

  return (
    <mesh
      ref={meshRef}
      position={[0.01, 0.31, -0.01]} // Set the box position
      scale={[0.3, 0.033, 0.33]} // Set the box dimensions (width, height, depth)
      onClick={onClick} // Register the onClick event
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="yellow" // Base color
        emissive="orange" // Glow effect
        emissiveIntensity={1} // Increase for stronger glow
        transparent
        opacity={0.35} // Set transparency
      />
    </mesh>
  );
};

export default ClickableBox;
