import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

import { OrbitControls as OrbitControlsType } from "three-stdlib";
import { OrbitalControlProps } from "./types";

const OrbitalControl: React.FC<OrbitalControlProps> = ({
  shift = 2,
  initX = 10,
  bounds,
}) => {
  const flyingCameraRef = useRef<OrbitControlsType>(null);
  const [isInit, setInit] = useState(false);

  useFrame(() => {
    if (flyingCameraRef.current && bounds) {
      const flyingCamera = flyingCameraRef.current;
      if (!isInit) {
        flyingCamera.object.position.setFromCylindricalCoords(initX, 0, 0);
        setInit(true);
      }
      const cameraPosition = flyingCamera.object.position;

      if (cameraPosition.x > bounds.x[1] / 2) {
        flyingCameraRef.current.object.position.x = bounds.x[1] / 2 - shift;
      } else if (cameraPosition.x < bounds.x[0] / 2) {
        flyingCameraRef.current.object.position.x = bounds.x[0] / 2 + shift;
      } else if (cameraPosition.z > bounds.z[1] / 2) {
        flyingCameraRef.current.object.position.z = bounds.z[1] / 2 - shift;
      } else if (cameraPosition.z < bounds.z[0] / 2) {
        flyingCameraRef.current.object.position.z = bounds.z[0] / 2 + shift;
      } else if (cameraPosition.y <= bounds.y[0]) {
        flyingCameraRef.current.object.position.y = bounds.y[0] / 2 + shift;
      }
    }
  });

  return <OrbitControls ref={flyingCameraRef} makeDefault />;
};

export default OrbitalControl;
