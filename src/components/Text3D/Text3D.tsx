import { Text3D as Text3DImpl } from "@react-three/drei";
import { Text3DProps } from "./types";
import { FONT } from "./constants";

const Text3D: React.FC<Text3DProps> = ({
  children,
  font = FONT,
  position,
  color,
}) => {
  return (
    <Text3DImpl font={font} position={position} material-color={color}>
      {children}
    </Text3DImpl>
  );
};

export default Text3D;
