import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, OrbitControls, useGLTF } from '@react-three/drei';

function HumanModel() {
    const { scene } = useGLTF('/interactive-gym/sculpt.glb');

    return <primitive object={scene} scale={1.5} />;
}

export default function ThreeScene() {
    return (
        <>
            <h1>Interactive Gym</h1>

            <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <Bounds fit clip observe>
                    <HumanModel />
                </Bounds>
                <OrbitControls enableZoom={true} />
            </Canvas>
        </>
    );
}