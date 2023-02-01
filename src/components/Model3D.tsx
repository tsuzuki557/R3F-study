import { Perf } from "r3f-perf";

import { OrbitControls } from "@react-three/drei";

import { Model01 } from "./Model01";
import { Placeholder } from "./Placeholder";

import { Suspense } from "react";

export const Model3D = () => {
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

      {/* Suspenseでlazy Lodingしないと全体が読み込まれるまで真っ白になるので、とてもよくない */}
      <Suspense fallback={<Placeholder />}>
        <Model01 />
      </Suspense>
    </>
  );
};
