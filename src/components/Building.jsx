import React, { useState, useRef } from "react";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Building({
  position,
  setIsDragging,
  floorPlane,
  buildingHeight,
}) {
  const floatInAirHt = 1;

  /* const [pos, setPos] = useState([0, buildingHeight / 2 + floatInAirHt, 0]); */
  const [pos, setPos] = useState([
    position[0],
    buildingHeight / 2 + floatInAirHt,
    position[2],
  ]);

  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  let planeIntersectPoint = new THREE.Vector3();

  const [spring, api] = useSpring(() => ({
    // position: [0, 0, 0],
    position: pos,
    scale: 1,
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));

  /* Object float in air when first added */
  const [positioned, setPositioned] = useState(false);
  const dragObjectRef = useRef();
  const animatedMeshRef = useRef();
  useFrame((state) => {
    if (!positioned) {
      animatedMeshRef.current.rotation.y += 0.003;
      animatedMeshRef.current.position.y +=
        Math.cos(state.clock.elapsedTime) * 0.01;
    }
  });
  /*  */

  /* object to be added at mouse position and move together with mouse before positioned */
  /* code to be added */
  /*  */

  const bind = useDrag(
    ({ active, event }) => {
      if (active) {
        event.ray.intersectPlane(floorPlane, planeIntersectPoint);
        let newPos = [
          planeIntersectPoint.x,
          buildingHeight / 2,
          planeIntersectPoint.z,
        ].map((x) => Math.floor(x) + 0.5); /* to snap to grid */
        setPos(newPos);
        setPositioned(true); // so that object stops floating after being positioned
      }

      setIsDragging(active);

      api.start({
        // position: active ? [x / aspect, -y / aspect, 0] : [0, 0, 0],
        position: active ? [pos[0], pos[1] + 0.5, pos[2]] : pos,
        scale: active ? 1.2 : 1,
        /* rotation: [y / aspect, x / aspect, 0] */
      });
      return null;
    },
    { delay: true }
  );

  return (
    <animated.mesh {...spring} {...bind()} castShadow ref={animatedMeshRef}>
      <boxGeometry
        ref={dragObjectRef}
        attach="geometry"
        args={[1, buildingHeight, 1]}
      />
      <meshNormalMaterial attach="material" />
    </animated.mesh>
  );
}
