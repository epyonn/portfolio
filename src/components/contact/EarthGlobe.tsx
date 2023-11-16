import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const EarthGlobe = ({ url }: { url: string }) => {
  const gltf = useLoader(GLTFLoader, url);
  const ref = useRef<THREE.Object3D>();

  gltf.scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      const mesh = object as THREE.Mesh;
      if (mesh.material instanceof THREE.MeshStandardMaterial) {
        const material = mesh.material as THREE.MeshStandardMaterial;
        material.flatShading = true;
        material.needsUpdate = true; // Important to update the material
      }
    }
  });

  useFrame(() => {

    if(ref.current) {
      ref.current.rotation.y += 0.005; //adjust rotation speed
     }
  })

  return <primitive object={gltf.scene} ref={ref}/>;
};

export default EarthGlobe;
