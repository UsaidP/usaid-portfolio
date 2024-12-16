import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Suspense } from "react";
import { Macbook } from "./Macbook";
const ComputerModalContainer = () => {
  return (
    <Canvas>
      <Suspense fallback={"Loading..."}>
        <Stage environment="sunset" intensity={0.5}>
          <Macbook />
        </Stage>
        <OrbitControls autoRotate />
        <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
};
export default ComputerModalContainer;
