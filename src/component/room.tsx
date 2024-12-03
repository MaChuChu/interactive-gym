// ThreeScene.tsx
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, OrbitControls, useGLTF } from '@react-three/drei';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

function HumanModel() {
    const [basePath, setBasePath] = useState('');

    useEffect(() => {
        // Set the base path after component mounts (important for SSR environments)
        setBasePath(publicRuntimeConfig.basePath || '');
    }, []);

    // Make sure the path includes the basePath in production
    const modelPath = `${basePath}/Sculpt.glb`;

    // Use GLTF loader
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
