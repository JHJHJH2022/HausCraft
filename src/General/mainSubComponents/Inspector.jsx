import React, { useState, useMemo } from "react";
import * as THREE from "three";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";
import { useThree } from "@react-three/fiber";
import { angleSnap } from "../helpers/helpers";

export default function Inspector({
  responsiveness,
  children,
  position,
  rotation,
  objectHeight,
  setIsDragging,
  index,
  updateobjects,
  handleMouseClick,
  streetView,
}) {
  // set constants
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  let planeIntersectPoint = new THREE.Vector3();

  // keep position of object in state
  const [pos, setPos] = useState([position[0], objectHeight / 2, position[2]]);
  const { size } = useThree();
  const euler = useMemo(() => new THREE.Euler(), []);
  const [rtn, setRtn] = useState(rotation);
  // create spring
  const [spring, api] = useSpring(() => ({
    position: pos,
    scale: 1,
    rotation: rotation,
    config: { friction: 10 },
  }));

  // drag to translate and rotate
  const bind = useDrag(
    ({ active, event, delta: [dx] }) => {
      event.stopPropagation();
      if (active && event.ctrlKey === true && !streetView) {
        event.ray.intersectPlane(floorPlane, planeIntersectPoint);

        let newPos = [
          Math.floor(planeIntersectPoint.x * 2) / 2,
          objectHeight / 2, // y need to be exact value
          Math.floor(planeIntersectPoint.z * 2) / 2,
        ]; /* to snap to grid */

        setPos(newPos);

        // update position
        const newPosArray = [newPos[0], newPos[1], newPos[2]];
        updateobjects(index, newPosArray, []);
        //
      } else if (active && event.shiftKey === true && event.ctrlKey === false) {
        euler.y += (dx / size.width) * responsiveness;
        let newRtn = [0, angleSnap(euler.y, 45), 0];
        setRtn(newRtn);
        updateobjects(index, [], rtn);
      }

      setIsDragging(active);

      api.start({
        position: pos,
        /* scale: active ? 1.05 : 1, */
        rotation: rtn,
      });
      return null;
    },
    { delay: true }
  );
  return (
    <animated.group {...bind()} {...spring} onClick={handleMouseClick}>
      {children}
    </animated.group>
  );
}
