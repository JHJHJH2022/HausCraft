import { useStoreAll } from "../hooks/useStoreAll";
import React, { useState } from "react";

export default function Ground() {
  const [addpoint] = useStoreAll((state) => [state.addpoint]);
  const [prevPos, setPrevPos] = useState([]);

  function getNearestPt(prevPts, pts) {
    if (prevPos.length == 0) return pts;
    if (Math.abs(prevPts[0] - pts[0]) < Math.abs(prevPts[2] - pts[2])) {
      return [prevPts[0], pts[1], pts[2]];
    } else {
      return [pts[0], pts[1], prevPts[2]];
    }
  }

  const handleClick = (e) => {
    if (e.altKey) {
      e.stopPropagation();
      const [x, y, z] = Object.values(e.point).map((val) => Math.round(val));
      const pt = getNearestPt(prevPos, [x, y, z]);
      addpoint(pt);
      setPrevPos(pt);
    }
  };

  return (
    <mesh
      onClick={handleClick}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.05, 0]}
    >
      <planeGeometry attach="geometry" args={[220, 220]} />
      <meshStandardMaterial
        attach="material"
        color="rgba(255, 255, 255, 255)"
      />
    </mesh>
  );
}
