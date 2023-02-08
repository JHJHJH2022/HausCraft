import { useState } from "react";

export default function SliderControl({ buildingHeight, setSliderVisible }) {
  const [clicked, setClicked] = useState(false);

  const handleVisbility = () => {
    setSliderVisible((prev) => !prev);
    setClicked((prev) => !prev);
  };
  return (
    <mesh
      position={[0, buildingHeight + 2.5, 0]}
      onClick={handleVisbility}
      scale={clicked ? "1.7" : "1"}
    >
      <sphereGeometry args={[0.5, 32]} />
      <meshBasicMaterial
        color={
          clicked ? "rgba(165, 165, 165, 0.52)" : "rgba(211, 211, 211, 0.52)"
        }
        opacity={0.1}
        transparent:true
      />
    </mesh>
  );
}
