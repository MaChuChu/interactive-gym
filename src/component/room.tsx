// ThreeScene.tsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

// Define the props for RotatingBox, including the color prop
interface RotatingBoxProps extends Omit<JSX.IntrinsicElements['mesh'], 'color'> {
    color?: string;
}

// Create a rotating Box component
function RotatingBox({ color = 'orange', ...props }: RotatingBoxProps) {
    // Type the ref as a THREE.Mesh
    const meshRef = useRef<THREE.Mesh>(null!);

    // Rotate the box every frame
    useFrame(() => {
        if (meshRef.current) { // Check if meshRef is defined
            meshRef.current.rotation.x += 0.001;
            meshRef.current.rotation.y += 0.001;
        }
    });

    return (
        <mesh ref={meshRef} {...props}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}

// Main Three.js scene component
export default function ThreeScene() {
    return (
        <>
            <h1>Interactive Gym</h1>
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <RotatingBox position={[0, 0, 0]} color="red" />
                <RotatingBox position={[2, 0, 0]} color="blue" />
                <RotatingBox position={[-2, 0, 0]} color="yellow" />
            </Canvas>
        </>
    );
}
