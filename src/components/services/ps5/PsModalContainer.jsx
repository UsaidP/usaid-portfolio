import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PsBox } from "./PsBox";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const PsModalContainer = () => {
  return (
    <Canvas>
      <Suspense fallback={"Loading..."}>
        <Stage environment="lobby" intensity={10}>
          <PsBox />
        </Stage>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
      <PerspectiveCamera position={(1, 1, 2)} zoom={0.4} makeDefault />
    </Canvas>
  );
};

export default PsModalContainer;
