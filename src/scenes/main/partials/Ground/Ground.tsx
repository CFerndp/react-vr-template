import { Plane, useTexture } from "@react-three/drei";
import { MAP_BOUNDS } from "../../constants";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const Ground: React.FC = () => {
  const texture = useTexture("/textures/wood.avif");
  texture.repeat.set(100, 100);
  texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;

  return (
    <RigidBody position={[0, 0, 0]}>
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[MAP_BOUNDS.x[1], MAP_BOUNDS.y[1], MAP_BOUNDS.z[1]]}
        args={[1, 1, 50, 50]}
      >
        <meshBasicMaterial attach="material" map={texture} />
      </Plane>
    </RigidBody>
  );
};

export default Ground;
