import React from "react";

import { Canvas, RootState } from "@react-three/fiber";

//import { Box } from "./components/Box";
// import { SampleBox } from "./components/SmapleBox";
//import { ChangeStore, ChangeStore02 } from "./components/ChangeStore";
import { Model3D } from "./components/Model3D";

export function App() {
  const created = (state: RootState) => {
    //console.log(state);
    //state.gl.setClearColor("#ff0000", 0.2);
  };

  return (
    <>
      {/* <ChangeStore /> */}
      {/* <ChangeStore02 /> */}
      <Canvas
        camera={{ fov: 45, near: 0.1, far: 400, position: [0, 0, -2.0] }}
        onCreated={created}
      >
        {/* <ambientLight /> */}
        <pointLight position={[10, 10, 10]} />
        {/* <SampleBox position={[0, 0, 0]} /> */}
        {/* <Box /> */}
        <Model3D />
      </Canvas>
    </>
  );
}
