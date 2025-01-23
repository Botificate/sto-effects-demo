declare module "vec-la" {
  import { Vector2 } from "react-use-gesture/dist/types";
  export function dist(v: Vector2, v2: Vector2): number;
  export function scale(direction: Vector2, velocity: number): number;
}
