import { MapBoundary } from "../../types/world";

export type FlyControlProps = {
  movementSpeed?: number;
  rollSpeed?: number;
  bounds?: MapBoundary;
  shift?: number;
};
