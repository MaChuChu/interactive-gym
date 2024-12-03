// ThreeScene.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, OrbitControls, useGLTF } from '@react-three/drei';

const modelPath = `/Sculpt.glb`;

function HumanModel() {
    const { scene } = useGLTF(modelPath);

    return <primitive object={scene} />;
}

// Main Three.js scene component
export default function ThreeScene() {
    return (
        <>
            <h1>Interactive Gym</h1>

            <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <Bounds fit clip observe> {/* Automatically centers and fits the model */}
                    <HumanModel />
                </Bounds>
                <OrbitControls enableZoom={true} />
            </Canvas>
        </>
    );
}
