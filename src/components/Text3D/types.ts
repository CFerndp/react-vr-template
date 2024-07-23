import { Vector3 } from "@react-three/fiber";

export type Text3DProps = React.PropsWithChildren & {
  font?: string;
  position?: Vector3;
  color?: string;
  visible?: boolean;
};
