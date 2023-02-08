import "./App.css";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Buildings from "./components/Buildings.jsx";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Display from "./components/Display";
import { useEffect } from "react";
import { useStore } from "./hooks/useStore";

export default function App() {
  // set up basic values
  const buildingHeight = 8; // need to adapt to height decided by user
  const [isDragging, setIsDragging] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [isChangingNoOfFloors, setIsChangingNoOfFloors] = useState(false);
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
      <Canvas flat style={{ background: "white" }} shadows dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight
          intensity={2.5}
          position={[20, 100, 80]}
          castShadow
          shadow-mapSize-height={1512}
          shadow-mapSize-width={1512}
          shadow-camera-left={200}
          shadow-camera-right={-200}
          shadow-camera-top={200}
          shadow-camera-bottom={-200}
        />

        <gridHelper args={[200, 200, "grey", "lightgrey"]} />

        <Buildings
          setIsDragging={setIsDragging}
          setIsRotating={setIsRotating}
          floorPlane={floorPlane}
          buildingHeight={buildingHeight}
          buildings={buildings}
          removebuildings={removebuildings}
          updatebuildings={updatebuildings}
          setIsChangingNoOfFloors={setIsChangingNoOfFloors}
        />

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.1, 0]}
          receiveShadow
        >
          <planeGeometry
            attach="geometry"
            args={[200, 200]}
            receiveShadow
          />
          <meshPhongMaterial
            attach="material"
            color="#ccc"
            side={THREE.DoubleSide}
            receiveShadow
          />
        </mesh>

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
