import CircularSlider from "@fseehawer/react-circular-slider";

export default function SunSlider({ setTimeOfDay, timeOfDay }) {
  const handleChange = (e) => {
    setTimeOfDay(e);
  };

  return (
    <div className="absolute right-48 bottom-36 z-50">
      <CircularSlider
        onChange={handleChange}
        label="TIME OF DAY"
        min={0}
        max={24}
        width={200}
        dataIndex={timeOfDay}
        labelColor="#f98f48"
        knobColor="#f98f48"
        knobSize={32}
        valueFontSize="3rem"
        progressColorFrom="#fff6ad"
        progressColorTo="#f98f48"
        progressSize={12}
        trackColor="#eeeeee"
        trackSize={10}
      />
    </div>
    // <Html
    //   style={{
    //     transition: "all 0.2s",
    //     /*       color: "black",
    //     fontSize: "1em",
    //     padding: "2rem",
    //     borderRadius: "20px",
    //     backgroundColor: "rgba(231, 231, 231, 0.52)",
    //     display: "flex",
    //     flexDirection: "row",
    //     alignItems: "center", */
    //     // opacity: hidden ? 0 : 1,
    //     // transform: `scale(${hidden ? 0.5 : 1})`,
    //   }}
    //   distanceFactor={50}
    //   position={[window.innerWidth / 200, window.innerHeight / 200, 1]}
    //   // position={[15, 30, 1]}
    //   transform
    // >
    //   <div>
    //     <span>Time of Day</span>
    //   </div>
    //   <Slider
    //     style={{ height: 1000 }}
    //     min={1}
    //     max={40}
    //     step={1}
    //     value={timeOfDay}
    //     onChange={handleChange}
    //     onAfterChange={handleAfterChange}
    //   />
    // </Html>
  );
}
