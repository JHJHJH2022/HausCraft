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
  const buildingHeight = 5;
  const [isDragging, setIsDragging] = useState(false);
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  // Update buildings in canvas and building number display
  const [buildingNum, setBuildingNum] = useState(1);

  const [buildings] = useStore((state) => [state.buildings]);
  const [addbuildings] = useStore((state) => [state.addbuildings]);

  const handleClick = () => {
    addbuildings(0, 0, 0);
  };
  useEffect(() => {
    setBuildingNum(buildings.length);
  }, [buildings]);

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

        {/*    <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.1, 0]}
        receiveShadow
      >
        <planeGeometry attach="geometry" args={[30, 30]} receiveShadow />
        <meshPhongMaterial
          attach="material"
          side={THREE.DoubleSide}
          receiveShadow
        />
      </mesh> */}
        {/* main use of this mesh is to show shadow, can replace with site map texture later */}

        <gridHelper args={[200, 200, "grey", "lightgrey"]} />
        <Buildings
          setIsDragging={setIsDragging}
          floorPlane={floorPlane}
          buildingHeight={buildingHeight}
          buildings={buildings}
        />

        <OrthographicCamera makeDefault zoom={40} position={[100, 100, 150]} />

        <OrbitControls minZoom={20} maxZoom={40} enabled={!isDragging} />
      </Canvas>
    </div>
  );
}
