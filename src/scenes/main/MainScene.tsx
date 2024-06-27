import React from "react";

import { Sky, Torus } from "@react-three/drei";
import { XR } from "@react-three/xr";
import { Physics, RigidBody } from "@react-three/rapier";
import FlyControl from "../../components/FlyControl/FlyControl";
import { MAP_BOUNDS } from "./constants";
import Text3D from "../../components/Text3D/Text3D";
import Ground from "./partials/Ground/Ground";

const MainScene: React.FC = () => {
  return (
    <XR>
      <Physics>
        <FlyControl movementSpeed={10} rollSpeed={0.5} bounds={MAP_BOUNDS} />
        <Sky
          distance={45000}
          sunPosition={[0, 4, 0]}
          inclination={0.5}
          azimuth={0.25}
        />
        <Ground />
        <Text3D position={[-2, 4, -5]} color="blue">
          Hello VR World!
        </Text3D>

        <RigidBody colliders={"hull"} restitution={1} position={[0, 2, -5]}>
          <Torus material-color="red" castShadow />
        </RigidBody>
      </Physics>
    </XR>
  );
};

export default MainScene;
