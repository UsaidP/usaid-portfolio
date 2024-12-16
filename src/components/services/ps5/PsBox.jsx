import React from "react";
import { useGLTF } from "@react-three/drei";

export function PsBox(props) {
  const { nodes, materials } = useGLTF("/ps5-box.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Acrylic_Clear}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Paper_White}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Paper_White_NONE}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/ps5-box.glb");
