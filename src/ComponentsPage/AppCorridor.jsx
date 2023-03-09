import "../index.css";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import Lights from "../General/otherComponents/Lights";
import Plane from "./corridorComponents/Plane";
import Points from "./corridorComponents/Points";
import CorridorDot from "./corridorComponents/CorridorDot";

export default function AppCorridor() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Canvas flat style={{ background: "white" }} shadows dpr={[1, 2]}>
      <gridHelper args={[200, 200, "grey", "grey"]} />
      <Lights timeOfDay={15} />

      <Points />
      <CorridorDot />
      <Plane />
      <OrthographicCamera makeDefault zoom={10} position={[0, 100, 0]} />
      <OrbitControls
        enabled={!isDragging}
        minZoom={4}
        maxZoom={20}
        near={0.1}
        far={500}
      />
    </Canvas>
  );
}
