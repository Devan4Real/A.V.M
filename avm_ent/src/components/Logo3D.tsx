import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Logo3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 1);
    scene.add(ambientLight);

    // Mouse tracking
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    let object: THREE.Group;

    // Load the model
    const loader = new GLTFLoader();
    loader.load(
      '/AVM-logo.glb',
      (gltf) => {
        object = gltf.scene;
        // Scale adjusted if needed
        object.scale.set(1.2, 1.2, 1.2);
        object.position.set(0, -0.5, 0);
        scene.add(object);
      },
      (progress) => {
        console.log((progress.loaded / progress.total * 100) + '% loaded');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    function animate() {
      requestAnimationFrame(animate);
      
      if (object) {
        // Reduced movement range significantly
        const targetRotationY = -0.5 + (mouseX / window.innerWidth) * 1; // Reduced from -3/3 to -0.5/1
        const targetRotationX = -0.3 + (mouseY * 0.6) / window.innerHeight; // Reduced from -1.2/2.5 to -0.3/0.6
        
        // Slower interpolation for smoother movement
        object.rotation.y += (targetRotationY - object.rotation.y) * 0.05; // Reduced from 0.1 to 0.05
        object.rotation.x += (targetRotationX - object.rotation.x) * 0.05;
      }
      
      renderer.render(scene, camera);
    }

    function handleMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[-1]"
      style={{ touchAction: 'none' }}
    />
  );
}