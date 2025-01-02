import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Logo3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      80,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true; // Enable shadow maps
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadows
    containerRef.current.appendChild(renderer.domElement);

    // Environment map for metallic effect
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const environmentMap = cubeTextureLoader.load([
      '/textures/px.png',
      '/textures/nx.png',
      '/textures/py.png',
      '/textures/ny.png',
      '/textures/pz.png',
      '/textures/nz.png',
    ]);
    scene.environment = environmentMap;

    // Base lighting directly above the logo with slight forward shadow
    const baseLight = new THREE.DirectionalLight(0xffe080, 1.5); // Soft warm light
    baseLight.position.set(0, 5, 2); // Positioned directly above with slight forward z-offset
    baseLight.castShadow = true;
    baseLight.shadow.mapSize.width = 1024;
    baseLight.shadow.mapSize.height = 1024;
    baseLight.shadow.camera.near = 0.5;
    baseLight.shadow.camera.far = 50;

    // Configure shadow camera boundaries
    const shadowCameraSize = 10;
    baseLight.shadow.camera.left = -shadowCameraSize;
    baseLight.shadow.camera.right = shadowCameraSize;
    baseLight.shadow.camera.top = shadowCameraSize;
    baseLight.shadow.camera.bottom = -shadowCameraSize;

    scene.add(baseLight);

    // Ambient light for softer overall illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Mouse-driven spotlight for gradient illumination
    const mouseLight = new THREE.SpotLight(0xffffff, 1.0, 25, Math.PI / 3, 0.2, 1);
    mouseLight.position.set(0, 5, 10);
    mouseLight.castShadow = true;
    mouseLight.shadow.mapSize.width = 1024;
    mouseLight.shadow.mapSize.height = 1024;
    mouseLight.shadow.camera.near = 0.5;
    mouseLight.shadow.camera.far = 50;
    mouseLight.angle = Math.PI / 6; // Narrower cone for focused gradient
    scene.add(mouseLight);

    // OPTIONAL: Helpers for debugging lights
    // const baseLightHelper = new THREE.DirectionalLightHelper(baseLight, 1);
    // scene.add(baseLightHelper);
    // const mouseLightHelper = new THREE.SpotLightHelper(mouseLight);
    // scene.add(mouseLightHelper);

    // Add four static directional lights from the sides
    const sideLightIntensity = 1.0;

    // Left Light
    const leftLight = new THREE.DirectionalLight(0xffffff, sideLightIntensity);
    leftLight.position.set(-5, 0, 2); // Left side
    leftLight.target.position.set(0, 0, 0); // Pointing to center
    leftLight.castShadow = true;
    leftLight.shadow.mapSize.width = 1024;
    leftLight.shadow.mapSize.height = 1024;
    scene.add(leftLight);
    scene.add(leftLight.target);

    // Right Light
    const rightLight = new THREE.DirectionalLight(0xffffff, sideLightIntensity);
    rightLight.position.set(5, 0, 2); // Right side
    rightLight.target.position.set(0, 0, 0);
    rightLight.castShadow = true;
    rightLight.shadow.mapSize.width = 1024;
    rightLight.shadow.mapSize.height = 1024;
    scene.add(rightLight);
    scene.add(rightLight.target);

    // Top Light
    const topLight = new THREE.DirectionalLight(0xffffff, sideLightIntensity);
    topLight.position.set(0, 5, 2); // Top
    topLight.target.position.set(0, 0, 0);
    topLight.castShadow = true;
    topLight.shadow.mapSize.width = 1024;
    topLight.shadow.mapSize.height = 1024;
    scene.add(topLight);
    scene.add(topLight.target);

    // Bottom Light
    const bottomLight = new THREE.DirectionalLight(0xffffff, sideLightIntensity);
    bottomLight.position.set(0, -5, 2); // Bottom
    bottomLight.target.position.set(0, 0, 0);
    bottomLight.castShadow = true;
    bottomLight.shadow.mapSize.width = 1024;
    bottomLight.shadow.mapSize.height = 1024;
    scene.add(bottomLight);
    scene.add(bottomLight.target);

    // Mouse tracking variables
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let object: THREE.Group | null = null;

    // Load the GLTF model
    const loader = new GLTFLoader();
    loader.load(
      '/AVM-logo.glb',
      (gltf) => {
        object = gltf.scene;
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true; // Ensure the mesh casts shadows
            child.receiveShadow = true; // Ensure the mesh receives shadows
            child.material = new THREE.MeshPhysicalMaterial({
              color: 0xffd700, // Gold yellow
              metalness: 1,
              roughness: 0.3,
              envMap: environmentMap,
              reflectivity: 1,
            });
          }
        });

        object.scale.set(1.0, 1.0, 1.0);
        object.position.set(0, 0, 0);
        scene.add(object);
      },
      (xhr) => {
        console.log(`${((xhr.loaded / xhr.total) * 100).toFixed(2)}% loaded`);
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Smoothly animate the mouse light position based on mouse coordinates
      const normalizedMouseX = (mouseX / window.innerWidth) * 2 - 1;
      const normalizedMouseY = -(mouseY / window.innerHeight) * 2 + 1;

      const smoothX = THREE.MathUtils.lerp(mouseLight.position.x, normalizedMouseX * 5, 0.02);
      const smoothY = THREE.MathUtils.lerp(mouseLight.position.y, normalizedMouseY * 5, 0.02);
      mouseLight.position.set(smoothX, smoothY, 10);

      // Rotate the object based on mouse position
      if (object) {
        const targetRotationY = -0.25 + (mouseX / window.innerWidth) * 0.5;
        const targetRotationX = -0.15 + (mouseY / window.innerHeight) * 0.3;

        object.rotation.y += (targetRotationY - object.rotation.y) * 0.05;
        object.rotation.x += (targetRotationX - object.rotation.x) * 0.05;
      }

      renderer.render(scene, camera);
    };

    // Event handler for mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    // Event handler for window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup function
    return () => {
      // Remove event listeners
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Remove the renderer's DOM element
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Dispose of geometries, materials, and textures to free up resources
      if (object) {
        object.traverse((child) => {
          if ((child as THREE.Mesh).geometry) {
            (child as THREE.Mesh).geometry.dispose();
          }
          if ((child as THREE.Mesh).material) {
            const material = (child as THREE.Mesh).material;
            if (Array.isArray(material)) {
              material.forEach((mat) => mat.dispose());
            } else {
              material.dispose();
            }
          }
        });
      }

      // Dispose of all lights
      baseLight.dispose();
      mouseLight.dispose();
      ambientLight.dispose();
      leftLight.dispose();
      rightLight.dispose();
      topLight.dispose();
      bottomLight.dispose();

      // Dispose of the environment map texture
      if (environmentMap) {
        environmentMap.dispose();
      }

      // Dispose of the renderer (this will also remove any remaining WebGL resources)
      renderer.dispose();
    };
  }, []);

  // In Logo3D.tsx, change the div's className:
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-10" // Changed from z-[-1] to z-10
      style={{ touchAction: 'none' }}
    />
  );
}