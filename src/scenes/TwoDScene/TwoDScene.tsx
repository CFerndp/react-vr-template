import React, { useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import P300 from "../../experiments/P300/P300";

const TwoDScene: React.FC = () => {
  const [text, setText] = useState("0");

  useEffect(() => {
    const interval = setInterval(() => {
      const randNum = Math.floor(Math.random() * 10);
      setText(`${randNum}`);
    }, 500);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <Canvas className="w-screen h-screen">
      <P300 />
    </Canvas>
  );
};

export default TwoDScene;
