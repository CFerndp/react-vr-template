import { Center, Sky } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import React, { useEffect, useState } from "react";
import Text3D from "../../components/Text3D/Text3D";

const P300: React.FC = () => {
  const [text, setText] = useState("0");

  useEffect(() => {
    const interval = setInterval(() => {
      const randNum = Math.floor(Math.random() * 10);
      setText(`${randNum}`);
    }, 500);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <Physics>
      <Sky
        distance={45000}
        sunPosition={[0, 4, 0]}
        inclination={0.5}
        azimuth={0.25}
      />
      <Center position={[0, 3, -5]} top>
        <Text3D color="blue">P300 Number values</Text3D>
      </Center>
      <Center position={[0, 1, -5]} top>
        <Text3D color="red">{text}</Text3D>
      </Center>
    </Physics>
  );
};

export default P300;
