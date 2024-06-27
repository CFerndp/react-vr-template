import { FlyControls as FlyControlsImpl } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { FlyControls as FlyControlsType } from "three-stdlib";
import { FlyControlProps } from "./types";

const FlyControl: React.FC<FlyControlProps> = ({
  movementSpeed = 10,
  rollSpeed = 0.5,
  shift = 2,
  bounds,
}) => {
  const flyingCameraRef = useRef<FlyControlsType>(null);

  useFrame(() => {
    if (flyingCameraRef.current && bounds) {
      const flyingCamera = flyingCameraRef.current;
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

  return (
    <FlyControlsImpl
      ref={flyingCameraRef}
      movementSpeed={movementSpeed}
      rollSpeed={rollSpeed}
      dragToLook
      makeDefault
    />
  );
};

export default FlyControl;
