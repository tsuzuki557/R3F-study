import { useRef } from "react";
import * as THREE from "three";
import {
  ThreeElements,
  extend,
  useThree,
  ReactThreeFiber,
} from "@react-three/fiber";

import {
  OrbitControls,
  TransformControls,
  Html,
  PivotControls,
  MeshReflectorMaterial,
} from "@react-three/drei";

import { useControls, button, folder } from "leva";

import { Perf } from "r3f-perf";

//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
//extend({ OrbitControls: OrbitControls });

// ref. https://github.com/pmndrs/react-three-fiber/issues/130
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       orbitControls: ReactThreeFiber.Object3DNode<
//         OrbitControls,
//         typeof OrbitControls
//       >;
//     }
//   }
// }

export function Box(props: ThreeElements["mesh"]) {
  const { camera, gl } = useThree();

  const boxRef = useRef<THREE.Mesh>(null!);

  const { name, position, color, visible, perfVisible } = useControls(
    "タイトル",
    {
      name: "World",
      perfVisible: true,
      position: {
        value: { x: 0, y: -2 },
        min: -5,
        max: 5,
        step: 0.1,
      },
      color: "#0000ff",
      visible: true,
      myInterval: {
        min: -10,
        max: 50,
        value: [10, 30],
        step: 1.0,
      },
      clickMe: button(() => {
        console.log("クリックした");
      }),
      choice: { options: ["a", "b", "c"] },
      ssss: folder({
        showLighting: true,
      }),
      "Show stats": folder({
        showStats: false,
      }),
    }
  );
  console.log(position);

  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}
      <OrbitControls enableDamping={true} makeDefault />

      {perfVisible ? <Perf position="top-left" /> : null}

      <group>
        {/* <TransformControls object={boxRef} /> */}

        <Html scale={0.2} castShadow receiveShadow occlude="blending" transform>
          <h1>タイトル</h1>
        </Html>

        <PivotControls>
          <mesh ref={boxRef} position={[0, 0, -2]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={"rgb(255, 0, 0)"} wireframe={false} />
            {/* <Html>
              <h1>タイトル</h1>
            </Html> */}
          </mesh>
        </PivotControls>

        <mesh position={[0, 0, 2]}>
          <sphereGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>

        <mesh
          position={[position.x, position.y, 0]}
          rotation-x={-Math.PI * 0.5}
          scale={10}
        >
          <planeGeometry />
          <MeshReflectorMaterial
            mirror={0.25}
            // color="pink"
            blur={[1000, 1000]}
            mixBlur={0.9}
            resolution={512}
          />
        </mesh>
      </group>
    </>
  );
}
