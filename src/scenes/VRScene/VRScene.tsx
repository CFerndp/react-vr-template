import React, { useEffect, useState } from "react";

import { VRButton, XR } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import P300 from "../../experiments/P300/P300";

const VRScene: React.FC = () => {
  const [text, setText] = useState("0");

  useEffect(() => {
    const interval = setInterval(() => {
      const randNum = Math.floor(Math.random() * 10);
      setText(`${randNum}`);
    }, 500);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <P300 />
        </XR>
      </Canvas>
    </>
  );
};

export default VRScene;
