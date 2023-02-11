import { useState } from "react";

export default function SliderControl({ buildingHeight, setSliderVisible }) {
  const [clicked, setClicked] = useState(false);

  const handleVisbility = () => {
    setSliderVisible((prev) => !prev);
    setClicked((prev) => !prev);
  };
  return (
    <mesh
      position={[0, buildingHeight + 5, 0]}
      onClick={handleVisbility}
      scale={clicked ? "1.7" : "1"}
    >
      <sphereGeometry args={[0.5, 32]} />
      <meshBasicMaterial
        color={clicked ? "hotpink" : "hotpink"}
        opacity={0.1}
        transparent:true
      />
    </mesh>
  );
}
