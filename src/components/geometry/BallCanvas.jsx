// Importing necessary modules and components from React and other libraries
import React, { Suspense } from "react"; // Import React and Suspense component from the react package
import { Canvas } from "@react-three/fiber"; // Import Canvas from react-three/fiber for 3D rendering
import {
  Decal, // Import Decal for decal effects
  Float, // Import Float for floating animation effects
  OrbitControls, // Import OrbitControls for enabling user interaction with 3D objects
  Preload, // Import Preload for preloading assets
  useTexture, // Import useTexture hook for texture loading
} from "@react-three/drei"; // Import from react-three/drei library which provides abstractions for @react-three/fiber
import myImage from '../../assets/tech/html.png';

// Define a functional component 'Ball' which will represent a 3D ball in the scene
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]); // Load texture using the useTexture hook and the imgUrl prop

  // Return JSX for rendering the Ball component
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}> {/* Add floating animation to the ball */}
      <ambientLight intensity={0.25} /> {/* Add ambient light for general illumination */}
      <directionalLight position={[0, 0, 0.05]} /> {/* Add directional light for directional illumination */}
      <mesh castShadow receiveShadow scale={2.75}> {/* Define a mesh (3D model) for the ball with shadow properties */}
        <icosahedronGeometry args={[1, 1]} /> {/* Define the geometry of the ball as an icosahedron */}
        <meshStandardMaterial
          color='#fff8eb' // Set the color of the ball
          polygonOffset // Enable polygon offset to prevent z-fighting
          polygonOffsetFactor={-5} // Set the factor for the polygon offset
          flatShading // Use flat shading for the material
        />
        <Decal
          position={[0, 0, 1]} // Set the position of the decal
          rotation={[2 * Math.PI, 0, 6.25]} // Set the rotation of the decal
          scale={1} // Set the scale of the decal
          map={decal} // Apply the texture loaded earlier as the decal
          flatShading // Use flat shading for the decal
        />
      </mesh>
    </Float>
  );
};

// Define a functional component 'BallCanvas' which will wrap the Ball component in a Canvas for 3D rendering
const BallCanvas = ({imageUrl}) => {
  // Return JSX for rendering the Canvas with the Ball component inside
  return (
    <Canvas
      frameloop='demand' // Set the frame loop to 'demand' for optimized rendering
      dpr={[1, 2]} // Set device pixel ratio for high-resolution displays
      gl={{ preserveDrawingBuffer: true }} // WebGL settings: preserve the drawing buffer
    >
      <Suspense fallback={null}> {/* Use Suspense for lazy loading with no fallback */}
        <OrbitControls enableZoom={false} /> {/* Add orbit controls to the canvas, disabling zoom */}
        <Ball imgUrl={imageUrl} /> {/* Render the Ball component, passing the icon prop as imgUrl */}
      </Suspense>

      <Preload all /> {/* Preload all assets in the scene */}
    </Canvas>
  );
};

export default BallCanvas; // Export the BallCanvas component for use in other modules
