// ThreeScene.tsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

// Define the props type for RotatingBox using Three.js types
type RotatingBoxProps = JSX.IntrinsicElements['mesh'];

// Create a rotating Box component
function RotatingBox(props: RotatingBoxProps) {
    // Type the ref as a THREE.Mesh
    const meshRef = useRef<THREE.Mesh>(null!);

    // Rotate the box every frame
    useFrame(() => {
        if (meshRef.current) { // Check if meshRef is defined
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef} {...props}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}

// Main Three.js scene component
export default function ThreeScene() {
    return (
        <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <RotatingBox position={[0, 0, 0]} />
        </Canvas>
    );
}
