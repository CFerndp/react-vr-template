import React from "react";

import { Canvas } from "@react-three/fiber";
import { P300 } from "../../experiments/P300/P300";

const TwoDScene: React.FC = () => {
  return (
    <Canvas className="w-screen h-screen">
      <P300 />
    </Canvas>
  );
};

export default TwoDScene;
