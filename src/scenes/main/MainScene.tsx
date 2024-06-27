import React from "react";

import { Plane, Sky, Torus, useTexture } from "@react-three/drei";
import { XR } from "@react-three/xr";
import { Physics, RigidBody } from "@react-three/rapier";
import FlyControl from "../../components/FlyControl/FlyControl";
import { MAP_BOUNDS } from "./constants";
import Text3D from "../../components/Text3D/Text3D";

const MainScene: React.FC = () => {
  const { map } = useTexture({ map: "/textures/grass.jpg" });

  return (
    <>
      <XR>
        <Physics debug>
          <FlyControl movementSpeed={10} rollSpeed={0.5} bounds={MAP_BOUNDS} />
          <Text3D position={[-2, 4, -5]} color="blue">
            Hello VR World!
          </Text3D>

          <Sky
            distance={45000}
            sunPosition={[0, 4, 0]}
            inclination={0.5}
            azimuth={0.25}
          />
          <RigidBody colliders={"hull"} restitution={1} position={[0, 2, -5]}>
            <Torus material-color="red" castShadow />
          </RigidBody>
          <RigidBody position={[0, -2, 0]}>
            <Plane
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[MAP_BOUNDS.x[1], MAP_BOUNDS.y[1], MAP_BOUNDS.z[1]]}
            >
              <meshBasicMaterial attach="material" map={map} />
            </Plane>
          </RigidBody>
        </Physics>
      </XR>
    </>
  );
};

export default MainScene;
