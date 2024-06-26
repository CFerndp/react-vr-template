import { Canvas } from "@react-three/fiber";
import MainScene from "./scenes/main/MainScene";
import { VRButton } from "@react-three/xr";

function App() {
  return (
    <>
      <VRButton />
      <Canvas>
        <MainScene />
      </Canvas>
    </>
  );
}

export default App;
