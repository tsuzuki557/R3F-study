import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export const Model01 = () => {
  const model = useLoader(
    GLTFLoader,
    "./FlightHelmet/glTF/FlightHelmet.gltf",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("./draco/");
      loader.setDRACOLoader(dracoLoader);
    }
  );

  return <primitive object={model.scene} scale={0.7} potion={[0, 0, 0]} />;
};
