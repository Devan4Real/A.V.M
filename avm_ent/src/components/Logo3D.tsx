import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Logo() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(time / 4) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <Text3D
        font="/fonts/Geist_Bold.json"
        size={3}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        AVM
        <meshStandardMaterial
          color="#C4A484"
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </mesh>
  );
}

export default function Logo3D() {
  return (
    <div className="h-[80vh] w-full bg-gradient-to-b from-[#1B2A4A] to-[#0F172A]">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
        />
        <Logo />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}