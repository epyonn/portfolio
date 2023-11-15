// Globe.tsx
import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Mesh } from 'three';

const Globe: React.FC = () => {
    const globeRef = useRef<Mesh>(null);
    const [obj, setObj] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { invalidate } = useThree();

    useEffect(() => {
        setLoading(true);
        setError(null);
        try {
            new OBJLoader().load(
                '../../assets/globe.obj', // Update the path as needed
                (object) => {
                    setObj(object);
                    setLoading(false);
                },
                undefined,
                (err) => {
                    console.error('Error loading OBJ:', err);
                    setError('Error loading model');
                    setLoading(false);
                }
            );
        } catch (err) {
            console.error('Error loading OBJ:', err);
            setError('Error loading model');
            setLoading(false);
        }
    }, []);

    useFrame(() => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.001; // Adjust rotation speed
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return <primitive object={obj} ref={globeRef} scale={[0.5, 0.5, 0.5]} />; // Adjust scale as needed
};

export default Globe;
