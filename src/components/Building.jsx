import React, { useState, useRef, useEffect } from "react";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import { Scene, Vector3 } from "three";
import { Slider } from "antd";
import Tree from "./Tree.jsx";

export default function Building({
  position,
  setIsDragging,
  setIsRotating,
  floorPlane,
  buildingHeight,
  index,
  removebuildings,
  updatebuildings,
  setIsChangingNoOfFloors,
}) {
  // ref objects
  const animatedMeshRef = useRef();
  const [noOfFloors, setNoOfFloors] = useState(5);

  /* importing objects */
  const buildings = useGLTF("buildings-withFloorPlates.glb");
  console.log(buildings);
  const cube = useGLTF("testCube.glb");
  const cubeObj = cube.nodes.Cube;

  const walls = buildings.nodes.walls;
  const windows = buildings.nodes.windows;
  const others = buildings.nodes.others;
  const floor = buildings.nodes.floor;
  const object = walls; // need to adapt accordingly

  // bounding box to get height of imported object
  const boxHelper = new THREE.BoxHelper(object, 0xffff00);

  const bbox = object.geometry.computeBoundingBox();
  const box = new THREE.Box3();
  box.copy(object.geometry.boundingBox).applyMatrix4(object.matrixWorld);

  const bboxVector = new Vector3();
  box.getSize(bboxVector);
  let objectHeight = bboxVector.y * 10; // * 10 since is scaled

  // buildings.scene.center(); // center the imported object -- rmb to apply posiiton, and model centered in blender

  // alt + LMC to remove buildings( for now)
  /*   const [visible, setVisible] = useState(true); */
  const handleDelete = (e) => {
    if (e.altKey) {
      /* setVisible((prev) => !prev); */
      removebuildings(index);
    }
  };

  // object to float in air
  const floatInAirHt = 3;

  const [pos, setPos] = useState([
    position[0],
    objectHeight / 2 + floatInAirHt,
    position[2],
  ]);

  const [rotation, setRotation] = useState([0, 0, 0]);

  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  let planeIntersectPoint = new THREE.Vector3();

  const [spring, api] = useSpring(() => ({
    position: pos,
    scale: 1,
    rotation: rotation,
    config: { friction: 10 },
  }));

  /* Object float in air when first added */

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

  // // update building pos in use store

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

        // update position
        const newPosArray = [newPos[0], newPos[1], newPos[2]];
        updatebuildings(index, newPosArray);
        //
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

  // Rotation ---WIP
  /* const roundNearest = (value, nearest) =>
    Math.round(value / nearest) * nearest;
  const bind1 = useDrag(({ offset: [x, y], active }) => {
    if (active) {
      const deltaAngle = Math.atan2(y, x); // need to find a better way to rotate
      const rotationAngle = deltaAngle * 0.01;
      animatedMeshRef.current
        ? (animatedMeshRef.current.rotation.y += rotationAngle)
        : null;

      let newRotation = [0, roundNearest(rotationAngle, Math.PI / 4), 0];

      setRotation(newRotation);
      console.log(newRotation);
    }
    setIsRotating(active);

    api.start({
      rotation: active ? rotation : rotation,
    });
    return null;
  }); */

  // re-orient the object once when it is first positioned
  useEffect(() => {
    if (positioned) {
      animatedMeshRef.current.rotation.y = 0;
      animatedMeshRef.current.position.y = 0;
      console.log("repositioned");
    }
  }, [positioned]);

  function BuildingOneFloor({ upperFloorPos }) {
    return (
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={object.geometry}
          material={object.material}
          position={upperFloorPos}
        ></mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={windows.geometry}
          material={windows.material}
          position={upperFloorPos}
        ></mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={others.geometry}
          material={others.material}
          position={upperFloorPos}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={floor.geometry}
          material={floor.material}
          position={upperFloorPos}
        ></mesh>
      </group>
    );
  }

  function BuildingAllFloors({ noOfFloors, objectHeight }) {
    const array = Array(noOfFloors).fill(1);
    let n = -1;
    return array.map(() => {
      n += 1;
      return (
        <BuildingOneFloor upperFloorPos={[0, (objectHeight / 10) * n, 0]} />
      );
    });
  }

  const handleHover = (e) => {
    setIsChangingNoOfFloors(true);
    setNoOfFloors(e);
    setIsChangingNoOfFloors(false);
  };

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
        <BuildingAllFloors
          noOfFloors={noOfFloors}
          objectHeight={objectHeight}
        />
        <Html
          style={{
            transition: "all 0.2s",
            color: "black",
            /* opacity: hidden ? 0 : 1,
            transform: `scale(${hidden ? 0.5 : 1})`, */
          }}
          distanceFactor={1.5}
          position={[2, 1, 0.51]}
          transform
          /* occlude
          onOcclude={setVisible} */
        >
          <span>No. of Floors</span>
          <Slider
            style={{ height: 400 }}
            min={1}
            max={40}
            step={1}
            value={noOfFloors}
            onChange={handleHover}
            vertical
          />
        </Html>
        <Tree />
      </animated.group>
      {/* <primitive object={boxHelper} /> */}
    </>
  );
}
