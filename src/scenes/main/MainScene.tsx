import React from "react";

import { Sky } from "@react-three/drei";
import { XR } from "@react-three/xr";

const MainScene: React.FC = () => {
  return (
    <XR>
      <Sky
        distance={45000}
        sunPosition={[0, 2, 0]}
        inclination={0}
        azimuth={0.25}
      />

      <mesh position={[0, 1, -5]} scale={[2, 2, 2]}>
        <boxGeometry />
        <meshBasicMaterial color="blue" />
      </mesh>
    </XR>
  );
};

export default MainScene;
