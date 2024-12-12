import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Suspense } from "react";
import { Macbook } from "./Macbook";
const ComputerModalContainer = () => {
  return (
    <Canvas>
      <Suspense fallback={"Loading.."}>
        <Stage environment='forest' intensity={0.5}>
          <Macbook />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-5, -5, -5]} zoom={0.2} />
      </Suspense>
    </Canvas>
  );
};
export default ComputerModalContainer;
