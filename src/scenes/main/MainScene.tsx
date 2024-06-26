import { CameraControls } from "@react-three/drei";
import { XR } from "@react-three/xr";

const MainScene: React.FC = () => {
  return (
    <>
      <CameraControls />
      <XR>
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color="blue" />
        </mesh>
      </XR>
    </>
  );
};

export default MainScene;
