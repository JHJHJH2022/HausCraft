import "./App.css";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Buildings from "./components/Buildings.jsx";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Display from "./components/Display";
import { useEffect } from "react";
import { useStore } from "./hooks/useStore";

/* To-do List
[x] change imports into one mesh and one texture material and replace current animated mesh
[x] fixed, objects of any height are able to snap to floor now 
[x] add in alt+LMC for deleting 
[x] find a better way to interact with use store to update and delete
[] model one level, export one mesh (keep the original file with separated objects first!)
[] user decide how many levels to have
[] add parameters of total GFA and spacing into UI

[] prevent buildings from being added to same position
[] rotating function
[] how to let user design diff level plans
[] export model with texture map
[] object to be added at mouse position and move together with mouse before positioned

[] deploy

*/

export default function App() {
  // set up basic values
  const buildingHeight = 8; // need to adapt to height decided by user
  const [isDragging, setIsDragging] = useState(false);
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  // Update buildings in canvas and building number display
  const [buildingNum, setBuildingNum] = useState(1);
  const [buildings] = useStore((state) => [state.buildings]);
  const [addbuildings] = useStore((state) => [state.addbuildings]);
  const [removebuildings] = useStore((state) => [state.removebuildings]);
  const [updatebuildings] = useStore((state) => [state.updatebuildings]);

  const handleClick = () => {
    addbuildings(0, 0, 0);
  };
  useEffect(() => {
    setBuildingNum(buildings.length);
  }, [buildings]);

  // return objects
  return (
    <div className="App">
      <Display buildingNum={buildingNum} handleClick={handleClick} />
      <Canvas style={{ background: "white" }} shadows dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight
          intensity={0.5}
          castShadow
          shadow-mapSize-height={1512}
          shadow-mapSize-width={1512}
        />

        <gridHelper args={[200, 200, "grey", "lightgrey"]} />

        <Buildings
          setIsDragging={setIsDragging}
          floorPlane={floorPlane}
          buildingHeight={buildingHeight}
          buildings={buildings}
          removebuildings={removebuildings}
          updatebuildings={updatebuildings}
        />

        <OrthographicCamera makeDefault zoom={40} position={[100, 100, 150]} />

        <OrbitControls minZoom={20} maxZoom={40} enabled={!isDragging} />
      </Canvas>
    </div>
  );
}
