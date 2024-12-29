import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import {Environment } from '@react-three/drei';

interface MousePosition {
  x: number;
  y: number;
}

function Model({ mousePosition }) {
  const gltf = useGLTF('/AVM-logo.glb');
  const modelRef = useRef();

  // Fix material encoding
  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.side = THREE.DoubleSide; // Optional: If faces are missing
        if (child.material.map) {
          child.material.map.encoding = THREE.sRGBEncoding;
        }
        if (child.material.emissiveMap) {
          child.material.emissiveMap.encoding = THREE.sRGBEncoding;
        }
      }
    });
  }, [gltf]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x = mousePosition.y * 0.1;
      modelRef.current.rotation.y = mousePosition.x * 0.1;
    }
  });

  return <primitive object={gltf.scene} ref={modelRef} />;
}

function Scene({ mousePosition }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.z = 5;
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="sunset" />
      <Model mousePosition={mousePosition} />
    </>
  );
}

export default function Logo3D() {
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    });
  };

  return (
    <div 
      className="fixed inset-0 z-[-1]" 
      onMouseMove={handleMouseMove}
    >
      <Canvas
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
      >
        <Scene mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}