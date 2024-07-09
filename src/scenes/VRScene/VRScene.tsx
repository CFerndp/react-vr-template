import React, { useState } from "react";

import P300 from "../../experiments/P300/P300";
import { useTeleportation, useXR } from "@react-three/xr";
import { useFrame } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import Text3D from "../../components/Text3D/Text3D";

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

  return isPresenting ? (
    <P300 />
  ) : (
    <Center position={[0, 1, -5]} top>
      <Text3D color="white">Enter on VR please</Text3D>
    </Center>
  );
};

export default VRScene;
