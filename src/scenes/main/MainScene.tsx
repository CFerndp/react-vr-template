import React, { useEffect, useState } from "react";

import { Center, Sky } from "@react-three/drei";
import { XR } from "@react-three/xr";
import { Physics } from "@react-three/rapier";
import { MAP_BOUNDS } from "./constants";
import Text3D from "../../components/Text3D/Text3D";
import Ground from "./partials/Ground/Ground";
import OrbitalControl from "../../components/OrbitalControl/OrbitalControl";

const MainScene: React.FC = () => {
  const [text, setText] = useState("0");

  useEffect(() => {
    const interval = setInterval(() => {
      const randNum = Math.floor(Math.random() * 10);
      setText(`${randNum}`);
    }, 500);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <XR>
      <Physics>
        <OrbitalControl bounds={MAP_BOUNDS} />
        <Sky
          distance={45000}
          sunPosition={[0, 4, 0]}
          inclination={0.5}
          azimuth={0.25}
        />
        <Ground />
        <Center position={[0, 3, 0]} top>
          <Text3D color="blue">P300 Number values</Text3D>
        </Center>
        <Center position={[0, 1, 0]} top>
          <Text3D color="red">{text}</Text3D>
        </Center>
      </Physics>
    </XR>
  );
};

export default MainScene;
