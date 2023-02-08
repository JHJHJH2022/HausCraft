import React, { useState, useRef, useEffect } from "react";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import { Scene, Vector3 } from "three";
import { Slider } from "antd";
import Tree from "./Tree.jsx";
import { getMeshHeight } from "../helpers/helpers";
import BuildingIndivAllLevels from "../objectComponents/BuildingIndivAllLevels";

export default function Building({
  position,
  setIsDragging,
  setIsRotating,
  buildingHeight,
  index,
  removebuildings,
  updatebuildings,
  setIsChangingNoOfFloors,
}) {
  // ref objects
  const animatedMeshRef = useRef();
  const [noOfFloors, setNoOfFloors] = useState(5);

  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  /* importing objects */
  const buildings = useGLTF("buildings-withFloorPlates.glb");

  const walls = buildings.nodes.walls;
  const windows = buildings.nodes.windows;
  const others = buildings.nodes.others;
  const floor = buildings.nodes.floor;
  const object = walls; // need to adapt accordingly

  // bounding box to get height of imported object
  const objectHeight = getMeshHeight(object);

  // buildings.scene.center(); // center the imported object -- rmb to apply posiiton, and model centered in blender
  const handleDelete = (e) => {
    if (e.altKey) {
      /* setVisible((prev) => !prev); */
      removebuildings(index);
    }
  };
  // set up
  const floatInAirHt = 3;
  const [pos, setPos] = useState([
    position[0],
    objectHeight / 2 + floatInAirHt,
    position[2],
  ]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [positioned, setPositioned] = useState(false);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  let planeIntersectPoint = new THREE.Vector3();

  // alt + LMC to remove buildings( for now)
  /*   const [visible, setVisible] = useState(true); */

  /* Object float in air when first added */
  // useFrame((state) => {
  //   if (!positioned) {
  //     animatedMeshRef.current.rotation.y += 0.003;
  //     animatedMeshRef.current.position.y +=
  //       Math.cos(state.clock.elapsedTime) * 0.01;
  //   }
  // });
  /*  */

  /* object to be added at mouse position and move together with mouse before positioned */
  /* code to be added */
  /*  */

  // update building pos in use store

  const [spring, api] = useSpring(() => ({
    position: pos,
    scale: 1,
    rotation: rotation,
    config: { friction: 10 },
  }));

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

        // setPositioned(true); // so that object stops floating after being positioned

        // // update position
        // const newPosArray = [newPos[0], newPos[1], newPos[2]];
        // updatebuildings(index, newPosArray);
        // //
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

  // re-orient the object once when it is first positioned
  useEffect(() => {
    if (positioned) {
      animatedMeshRef.current.rotation.y = 0;
      animatedMeshRef.current.position.y = 0;
    }
  }, [positioned]);

  return (
    <>
      <animated.group
        {...spring}
        {...bind()}
        /* {...bind1()} */
        ref={animatedMeshRef}
        onClick={handleDelete}
        scale={10}
      >
        <BuildingIndivAllLevels
          noOfFloors={noOfFloors}
          objectHeight={objectHeight}
        />
        <Html
          style={{
            transition: "all 0.2s",
            color: "black",
            // opacity: hidden ? 0 : 1,
            // transform: `scale(${hidden ? 0.5 : 1})`,
          }}
          distanceFactor={1.5}
          position={[2, 1, 0.51]}
          transform
          // occlude
          // onOcclude={setVisible}
        >
          <span>No. of Floors</span>
          <Slider
            style={{ height: 400 }}
            min={1}
            max={40}
            step={1}
            value={noOfFloors}
            vertical
          />
        </Html>
        <Tree />
      </animated.group>
    </>
  );
}
