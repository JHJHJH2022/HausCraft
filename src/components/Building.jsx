import React, { useState, useRef } from "react";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Scene, Vector3 } from "three";

export default function Building({
  position,
  setIsDragging,
  floorPlane,
  buildingHeight,
}) {
  /* importing objects */
  /* const hamburger = useGLTF("burger-merged.glb");
  const object = hamburger.nodes.Cube003; */
  const hamburger = useGLTF("testCube.glb");
  const object = hamburger.nodes.Cube; // need to adapt accordingly

  // bounding box to get height of imported object
  const boxHelper = new THREE.BoxHelper(object, 0xffff00);

  const bbox = object.geometry.computeBoundingBox();
  const box = new THREE.Box3();
  box.copy(object.geometry.boundingBox).applyMatrix4(object.matrixWorld);

  const bboxVector = new Vector3();
  box.getSize(bboxVector);
  let objectHeight = bboxVector.y;

  object.geometry.center(); // center the imported object

  // object to float in air
  const floatInAirHt = 3;

  const [pos, setPos] = useState([
    position[0],
    objectHeight / 2 + floatInAirHt,
    position[2],
  ]);

  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  let planeIntersectPoint = new THREE.Vector3();

  const [spring, api] = useSpring(() => ({
    position: pos,
    scale: 1,
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));

  /* Object float in air when first added */
  const animatedMeshRef = useRef();
  const [positioned, setPositioned] = useState(false);

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
          Math.floor(planeIntersectPoint.x) + 0.5,
          objectHeight / 2, // y need to be exact value
          Math.floor(planeIntersectPoint.z) + 0.5,
        ]; /* to snap to grid */
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
    <>
      <animated.mesh
        {...spring}
        {...bind()}
        castShadow
        ref={animatedMeshRef}
        receiveShadow
        geometry={object.geometry}
        material={object.material}
      >
        <meshStandardMaterial />
      </animated.mesh>

      {/* <primitive object={boxHelper} /> */}
    </>
  );
}