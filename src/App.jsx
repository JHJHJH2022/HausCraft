import "./App.css";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrthographicCamera,
  OrbitControls,
  GizmoHelper,
  GizmoViewport,
} from "@react-three/drei";
import { useEffect } from "react";
import { useStoreAll } from "./hooks/useStoreAll";
import Plane from "./mainComponents/Plane";
import Lights from "./mainComponents/Lights";
import Display from "./mainComponents/Display";
import AllAnimatedObjects from "./mainComponents/AllAnimatedObjects.jsx";

import Site from "./objectComponents/Site";

export default function App() {
  // user control states
  const [isDragging, setIsDragging] = useState(false);
  const [isChangingNoOfFloors, setIsChangingNoOfFloors] = useState(false);

  // Update buildings in canvas and building number display
  const [buildingNum, setBuildingNum] = useState(1);
  const [objects] = useStoreAll((state) => [state.objects]);
  const [addobjects] = useStoreAll((state) => [state.addobjects]);
  const [removeobjects] = useStoreAll((state) => [state.removeobjects]);
  const [updateobjects] = useStoreAll((state) => [state.updateobjects]);

  const handleClick = (e) => {
    addobjects(e.target.id); // button id must be same as typology in useStore!
  };

  useEffect(() => {
    setBuildingNum(
      objects.filter((object) => {
        return (
          object.typology !== "tree" &&
          object.typology !== "treesCluster1" &&
          object.typology !== "treesCluster2" &&
          object.typology !== "carpark"
        );
      }).length
    );
  }, [objects]);

  // return objects
  return (
    <div className="App">
      <Display buildingNum={buildingNum} handleClick={handleClick} />
      <Canvas flat style={{ background: "white" }} shadows dpr={[1, 2]}>
        <Lights />
        <gridHelper args={[220, 100, "lightgrey", "lightgrey"]} />

        <Site />
        <AllAnimatedObjects
          setIsDragging={setIsDragging}
          setIsChangingNoOfFloors={setIsChangingNoOfFloors}
          objects={objects}
          removeobjects={removeobjects}
          updateobjects={updateobjects}
        />

        {/* <Plane /> */}

        <OrthographicCamera makeDefault zoom={6} position={[100, 100, 150]} />

        <OrbitControls
          minZoom={4}
          maxZoom={20}
          enabled={!isDragging && !isChangingNoOfFloors}
          near={0.1}
          far={500}
        />

        <GizmoHelper alignment="top-right" margin={[150, 150]}>
          <GizmoViewport labelColor="white" axisHeadScale={1} />
        </GizmoHelper>
      </Canvas>
    </div>
  );
}
