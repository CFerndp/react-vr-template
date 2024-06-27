import MainScene from "./scenes/main/MainScene";
import { VRButton } from "@react-three/xr";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Suspense>
      <VRButton />
      <Canvas>
        <MainScene />
      </Canvas>
    </Suspense>
  );
}

export default App;
