import React from "react";
import { useGLTF } from "@react-three/drei";

export function Mug(props) {
  const { nodes, materials } = useGLTF("/mug.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Mug1_Mug_0.geometry}
        material={materials.material}
      />
      <mesh
        geometry={nodes.Mug1_Coffee_0.geometry}
        material={materials.Coffee}
      />
    </group>
  );
}

useGLTF.preload("/mug.glb");
