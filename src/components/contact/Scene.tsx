import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import EarthGlobe from './EarthGlobe';
import '../../styles/Scene.css';
import scenegltf from '/scene.gltf';

const Scene = () => {
  return (
    <div className="scene-container">
      <Canvas className="full-screen-canvas" camera={{ position: [10, 10, 10], fov: 75 }}>
        <ambientLight intensity={2.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} />
        <EarthGlobe url={process.env.PUBLIC_URL + '/scene.gltf'} />
        <OrbitControls enableZoom={false} enablePan={false}/>
      </Canvas>
    </div>
  );
};

export default Scene;
