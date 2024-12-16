import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Mug } from "./Mug";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const MugModalContainer = () => {
  return (
    <Canvas>
      <Suspense fallback={"Loading..."}>
        <Stage>
          <Mug />
        </Stage>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
      <PerspectiveCamera position={(-1, 0, 1.8)} zoom={0.8} makeDefault />
    </Canvas>
  );
};

export default MugModalContainer;
