import "./index.css";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";

export default function AppCorridor() {
  return (
    <div className="AppCorridor">
      <Canvas flat style={{ background: "black" }} shadows dpr={[1, 2]}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box>
          <meshStandardMaterial />
        </Box>
        <OrthographicCamera makeDefault zoom={50} position={[100, 100, 150]} />

        <OrbitControls minZoom={30} maxZoom={100} near={0.1} far={500} />
      </Canvas>
    </div>
  );
}
