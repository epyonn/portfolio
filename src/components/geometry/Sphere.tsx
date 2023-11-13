import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface SphereProps {
    imageUrl: string;
    size?: number;
    position?: [number, number, number];
}

const Sphere: React.FC<SphereProps> = ({
    imageUrl,
    size = 5,
    position = [0, 0, 0], 
}) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const sphereRef = useRef<THREE.Mesh>();

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha:true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(size, 64, 64);
        const texture = new THREE.TextureLoader().load(imageUrl); // Load equirectangular image

        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(...position);

        // Set initial rotation to center the image on the sphere
        sphere.rotation.y = 11/* Adjust this value to center the image */;

        scene.add(sphere);
        sphereRef.current = sphere;

        camera.position.z = 15;
        camera.position.y = 37;
        camera.position.x = 0;

        camera.lookAt(sphere.position); // Ensure the camera looks at the sphere

 
        /*
        let deltaY = 0.01; 
        const rotationRange = Math.PI / 10; // Small rotation range for gentle oscillation
        const minY = sphere.rotation.y - rotationRange;
        const maxY = sphere.rotation.y + rotationRange;

        const animate = () => {
            requestAnimationFrame(animate);

            if (sphereRef.current) {
                sphereRef.current.rotation.y += deltaY;

                if (sphereRef.current.rotation.y < minY || sphereRef.current.rotation.y > maxY) {
                    deltaY = -deltaY;
                }
            }

            renderer.render(scene, camera);
        };
        */


        let rotationSpeed = 0.01; // Constant rotation speed
        const minY = sphere.rotation.y - Math.PI / 4; // Example minimum rotation limit
        const maxY = sphere.rotation.y + Math.PI / 4; // Example maximum rotation limit

        const animate = () => {
            requestAnimationFrame(animate);

            if (sphereRef.current) {
                // Update rotation
                sphereRef.current.rotation.y += rotationSpeed;

                // Reverse direction when limits are reached
                if (sphereRef.current.rotation.y < minY || sphereRef.current.rotation.y > maxY) {
                    rotationSpeed = -rotationSpeed;
                }
            }

            renderer.render(scene, camera);
        };





        animate();

        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, [imageUrl, size, position]);

    return <div ref={mountRef} />;
};

export default Sphere;
