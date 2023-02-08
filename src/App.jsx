import "./App.css";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Buildings from "./components/Buildings.jsx";
import AllAnimatedObjects from "./components/AllAnimatedObjects.jsx";
import AnimatedObjects from "./components/AnimatedObjects.jsx";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";

import Display from "./components/Display";
import { useEffect } from "react";
import { useStoreAll } from "./hooks/useStoreAll";
import Plane from "./components/Plane";
import Lights from "./components/Lights";

export default function App() {
  // user control states
  const [isDragging, setIsDragging] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [isChangingNoOfFloors, setIsChangingNoOfFloors] = useState(false);

  // Update buildings in canvas and building number display
  const [buildingNum, setBuildingNum] = useState(1);
  const [objects] = useStoreAll((state) => [state.objects]);
  const [addobjects] = useStoreAll((state) => [state.addobjects]);
  const [removeobjects] = useStoreAll((state) => [state.removeobjects]);
  const [updateobjects] = useStoreAll((state) => [state.updateobjects]);

  const handleClick = () => {
    addobjects("buildingIndiv");
  };

  useEffect(() => {
    setBuildingNum(objects.length);
  }, [objects]);

  console.log(objects);
  // return objects
  return (
    <div className="App">
      <Display buildingNum={buildingNum} handleClick={handleClick} />
      <Canvas flat style={{ background: "white" }} shadows dpr={[1, 2]}>
        <Lights />
        <gridHelper args={[200, 200, "grey", "lightgrey"]} />

        <AllAnimatedObjects
          setIsDragging={setIsDragging}
          setIsRotating={setIsRotating}
          setIsChangingNoOfFloors={setIsChangingNoOfFloors}
          objects={objects}
          removeobjects={removeobjects}
          updateobjects={updateobjects}
        />

        <Plane />

        <OrthographicCamera makeDefault zoom={20} position={[100, 100, 150]} />

        <OrbitControls
          minZoom={7}
          maxZoom={50}
          enabled={!isDragging && !isRotating && !isChangingNoOfFloors}
        />
      </Canvas>
    </div>
  );
}
