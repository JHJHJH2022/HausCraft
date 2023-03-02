import React, { useState, useMemo } from "react";
import * as THREE from "three";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";

export default function Inspector({ children, setIsDragging }) {
  // set constants
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  let planeIntersectPoint = new THREE.Vector3();

  // keep position of object in state
  const [pos, setPos] = useState([0, 0, 0]);

  // create spring
  const [spring, api] = useSpring(() => ({
    position: pos,
    scale: 1,
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));

  // drag to translate and rotate
  const bind = useDrag(
    ({ active, event }) => {
      event.stopPropagation();
      if (active && event.ctrlKey === false && event.shiftKey === false) {
        event.ray.intersectPlane(floorPlane, planeIntersectPoint);

        let newPos = [
          Math.floor(planeIntersectPoint.x) + 0.5,
          0, // y need to be exact value
          Math.floor(planeIntersectPoint.z) + 0.5,
        ]; /* to snap to grid */

        setPos(newPos);

        //
      }

      setIsDragging(active);

      api.start({
        position: pos,
        scale: active ? 1.05 : 1,
      });
      return null;
    },
    { delay: true }
  );
  return (
    <animated.group {...bind()} {...spring}>
      {children}
    </animated.group>
  );
}
