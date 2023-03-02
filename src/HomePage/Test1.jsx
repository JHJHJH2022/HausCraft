import "../index.css";
import * as THREE from "three";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import InspectorXS from "../General/mainSubComponents/InspectorXS";
import Tree from "../NeighbourhoodPage/objectComponents/Trees/Tree";

export default function AppCorridor() {
  var cpth = new THREE.CurvePath();
  const [isDragging, setIsDragging] = useState(false);
  //ADD CURVES EXPLICITELY
  var v1 = new THREE.Vector3(0, 0, 0);
  var v2 = new THREE.Vector3(30, 0, 0);
  var v3 = new THREE.Vector3(30, 0, 20);
  var v4 = new THREE.Vector3(-20, 0, 20);

  // loop all points and join them into a curve path
  const allPts = [];
  allPts.push(v1, v2, v3, v4);

  for (let i = 0; i < allPts.length - 1; i++) {
    var path = new THREE.LineCurve3(allPts[i], allPts[i + 1]);
    cpth.add(path);
  }

  // create corridor profile shape
  const corridorTotalWidth = 2;
  const corridorTotalHeight = 1;
  const parapet = 0.1;
  const floor = 0.3;
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0, corridorTotalHeight);
  shape.lineTo(parapet, corridorTotalHeight);
  shape.lineTo(parapet, floor);
  shape.lineTo(corridorTotalWidth - parapet, floor);
  shape.lineTo(corridorTotalWidth - parapet, corridorTotalHeight);
  shape.lineTo(corridorTotalWidth, corridorTotalHeight);
  shape.lineTo(corridorTotalWidth, 0);

  const extrudeSettings = {
    extrudePath: cpth,
    steps: 100,
    bevelEnabled: false,
  };

  var geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  const material = new THREE.MeshNormalMaterial();
  return (
    <div className="AppCorridor">
      <Canvas flat style={{ background: "black" }} shadows dpr={[1, 2]}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <InspectorXS setIsDragging={setIsDragging}>
          <Tree />
        </InspectorXS>
        <mesh geometry={geo} material={material}></mesh>
        <OrthographicCamera makeDefault zoom={10} position={[100, 100, 150]} />

        <OrbitControls
          enabled={!isDragging}
          minZoom={10}
          maxZoom={100}
          near={0.1}
          far={500}
        />
      </Canvas>
    </div>
  );
}
