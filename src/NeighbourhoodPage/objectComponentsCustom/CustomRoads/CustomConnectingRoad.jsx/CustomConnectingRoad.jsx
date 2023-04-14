import PedestrianRoad from "./PedestrianRoad";
import VehicularRoad from "./VehicularRoad";

export default function CustomConnectingRoad({ length, roadType }) {
  return (
    <>
      {roadType == "vehicularRoad" && <VehicularRoad length={length} />};
      {roadType == "pedestrianRoad" && <PedestrianRoad length={length} />}
    </>
  );
}
