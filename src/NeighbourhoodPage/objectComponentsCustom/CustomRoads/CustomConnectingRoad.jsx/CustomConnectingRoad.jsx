import PedestrianRoad from "./PedestrianRoad";
import VehicularRoad from "./VehicularRoad";

export default function CustomConnectingRoad({ length, roadType }) {
  console.log("im here");
  return (
    <>
      {roadType == "vehicularRoad" && <VehicularRoad length={length} />};
      {roadType == "pedestrianRoad" && <PedestrianRoad length={length} />}
    </>
  );
}
