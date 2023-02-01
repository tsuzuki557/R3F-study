import { Perf } from "r3f-perf";
import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { OrbitControls } from "@react-three/drei";

export const Model3D = () => {
  const model = useLoader(GLTFLoader, "./hamburger.glb", (loader) => {
    console.log(loader);
  });
  //console.log(model.scene);

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      {/* 以下だと読み込めない */}
      {/* {model.scene} */}
      {/* <model.scene /> */}
      <primitive object={model.scene} scale={0.5} potion={[0, 0, -1]} />
    </>
  );
};
