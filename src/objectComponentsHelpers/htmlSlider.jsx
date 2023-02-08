import { Html } from "@react-three/drei";
import { Slider } from "antd";

export default function htmlSlider({
  noOfFloors,
  setNoOfFloors,
  setIsChangingNoOfFloors,
}) {
  const handleChange = (e) => {
    setNoOfFloors(e);
    setIsChangingNoOfFloors(true);
  };

  const handleAfterChange = () => {
    setIsChangingNoOfFloors(false);
  };

  return (
    <Html
      style={{
        transition: "all 0.2s",
        color: "black",
        fontSize: "1em",
        padding: "2rem",
        borderRadius: "20px",
        backgroundColor: "rgba(231, 231, 231, 0.52)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // opacity: hidden ? 0 : 1,
        // transform: `scale(${hidden ? 0.5 : 1})`,
      }}
      distanceFactor={20}
      position={[15, 30, 1]}
      transform
      // occlude
      // onOcclude={setVisible}
    >
      <div>
        <span>No. of</span>
        <br />
        <span>Floors</span>
      </div>
      <Slider
        style={{ height: 1000 }}
        min={1}
        max={40}
        step={1}
        value={noOfFloors}
        onChange={handleChange}
        onAfterChange={handleAfterChange}
        vertical
      />
    </Html>
  );
}
