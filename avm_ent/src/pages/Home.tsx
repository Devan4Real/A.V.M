import { Canvas } from '@react-three/fiber';
import { Text3D, OrbitControls } from '@react-three/drei';

const Logo3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
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
        <meshStandardMaterial color="#C4A484" metalness={0.8} roughness={0.2} />
      </Text3D>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1B2A4A] flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full h-[60vh]">
          <Logo3D />
        </div>
      </div>
    </div>
  );
};

export default Home;

