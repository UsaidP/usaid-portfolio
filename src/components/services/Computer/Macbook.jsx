import { useGLTF } from "@react-three/drei";

export function Macbook(props) {
  const { nodes, materials } = useGLTF("/macbook.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["Aluminum_-_Anodized_Rough_Grey"]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Aluminum_-_Satin"]}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Aluminum_-_Satin_casing.jpg"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.Glass_Clear}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["Rubber_-_Soft"]}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["Steel_-_Satin"]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["Steel_-_Satin_NONE"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/macbook.glb");
