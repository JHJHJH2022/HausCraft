import "./App.css";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import { useStoreAll } from "./hooks/useStoreAll";
import Plane from "./mainComponents/Plane";
import Lights from "./mainComponents/Lights";
import Display from "./mainComponents/Display";
import AllAnimatedObjects from "./mainComponents/AllAnimatedObjects.jsx";

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

  const handleClick = (e) => {
    if (e.target.id == "buildingIndiv") {
      addobjects("buildingIndiv");
    } else if (e.target.id == "tree") {
      addobjects("tree");
    }
  };

  useEffect(() => {
    setBuildingNum(objects.length);
  }, [objects]);

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
