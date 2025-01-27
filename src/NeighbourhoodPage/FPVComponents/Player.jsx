import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useRef } from "react";
import { Vector3 } from "three";
import { useEffect } from "react";
import { useKeyboard } from "../hooks/useKeyboard";

const JUMP_FORCE = 4;
const SPEED = 10;

export default function Player() {
  const actions = useKeyboard();

  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [20, 1.5, 80], //y set to human eye height
  }));

  const vel = useRef([0, 0, 0]);

  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v));
  }, [api.velocity]);

  const pos = useRef([0, 0, 0]);

  useEffect(() => {
    api.position.subscribe((p) => (pos.current = p));
  }, [api.position]);

  useFrame((state) => {
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );

    const direction = new Vector3();
    const frontVector = new Vector3(
      0,
      0,
      (actions.moveBackward ? 1 : 0) - (actions.moveForward ? 1 : 0)
    );
    const sideVector = new Vector3(
      (actions.moveLeft ? 1 : 0) - (actions.moveRight ? 1 : 0),
      0,
      0
    );

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, vel.current[1], direction.z);

    if (actions.jump && Math.abs(vel.current[1]) < 0.05) {
      api.velocity.set(vel.current[0], JUMP_FORCE, vel.current[0]);
    }
  });

  return <mesh ref={ref}></mesh>;
}
