import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const test3d = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Canvas>
        <mesh>
          <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
              color='#ffbbc9'
              attach='material'
              distort={0.5}
              speed={2}
            />
          </Sphere>
          <ambientLight intensity={1} />
          <directionalLight color={"red"} position={[1, 2, 3]} />
        </mesh>
      </Canvas>
    </section>
  );
};

export default test3d;
