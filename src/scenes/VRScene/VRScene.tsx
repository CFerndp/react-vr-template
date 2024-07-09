import React, { useState } from "react";

import P300 from "../../experiments/P300/P300";
import { useTeleportation, useXR } from "@react-three/xr";
import { useFrame } from "@react-three/fiber";

const VRScene: React.FC = () => {
  const [isInit, setInit] = useState(false);

  const { isPresenting } = useXR();
  const teleportation = useTeleportation();

  useFrame(() => {
    if (isPresenting && !isInit) {
      teleportation([1, 4, 2]);
      setInit(true);
    }
  });

  return <P300 />;
};

export default VRScene;
