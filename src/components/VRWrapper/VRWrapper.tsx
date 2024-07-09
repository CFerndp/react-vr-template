import React from "react";
import { VRWrapperProps } from "./types";
import { VRButton, XR } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";

const VRWrapper: React.FC<VRWrapperProps> = ({ children }) => (
  <>
    <VRButton />
    <Canvas className="w-screen h-screen">
      <XR>{children}</XR>
    </Canvas>
  </>
);

export default VRWrapper;
