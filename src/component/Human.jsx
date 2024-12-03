/* eslint-disable react-hooks/rules-of-hooks */

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 human.glb 
*/

import { useGLTF } from '@react-three/drei'

export default function Human(props) {
  const { nodes, materials } = useGLTF(`${process.env.NEXT_PUBLIC_BASE_PATH}/human.glb`)

  useEffect(() => {
    useGLTF(`${process.env.NEXT_PUBLIC_BASE_PATH}/human.glb`)
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Body.geometry} material={materials.Peau} position={[0, 1.685, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Eyes.geometry} material={nodes.Eyes.material} position={[0.035, 6.666, -140.902]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Hair.geometry} material={materials['Material.001']} position={[0.04, -5.34, -152.578]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </mesh>
    </group>
  )
}
