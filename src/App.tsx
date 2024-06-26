import { Canvas } from "@react-three/fiber";
import MainScene from "./scenes/main/MainScene";
import { VRButton } from "@react-three/xr";
import { CameraControls } from "@react-three/drei";

function App() {
  return (
    <>
      <VRButton />
      <Canvas>
        <CameraControls makeDefault={true} />
        <MainScene />
      </Canvas>
    </>
  );
}

export default App;
