import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const ClickableBox = ({ onClick }) => {
  const meshRef = useRef();

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]} // Set the box position
      scale={[0.3, 0.033, 0.3]} // Set the box dimensions (width, height, depth)
      onClick={onClick} // Register the onClick event
    >
      <boxGeometry args={[1, 1, 1]} /> {/* Simple box geometry */}
      <meshStandardMaterial
        color="red" // Set the color to red or any visible color
      />
    </mesh>
  );
};

export default ClickableBox;
