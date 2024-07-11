import React from "react";

import { Text3D as Text3DImpl } from "@react-three/drei";
import { Text3DProps } from "./types";
import { FONT } from "./constants";
import { Mesh } from "three";

const Text3D = React.forwardRef<Mesh, Text3DProps>(
  ({ children, font = FONT, position, color }, ref) => {
    return (
      <Text3DImpl
        font={font}
        position={position}
        material-color={color}
        ref={ref}
      >
        {children}
      </Text3DImpl>
    );
  }
);

export default React.memo(Text3D);
