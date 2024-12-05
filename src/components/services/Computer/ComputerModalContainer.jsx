import { Canvas } from "@react-three/fiber";
import ComputerModal from "./ComputerModal";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
const ComputerModalContainer = () => {
  return (
    <Canvas>
      <Suspense fallback={"Loading.."}>
        <ComputerModal />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};
export default ComputerModalContainer;
