import PedestrianRoad from "./CustomConnectingRoad/PedestrianRoad";
import VehicularRoad from "./CustomConnectingRoad/VehicularRoad";

export default function CustomConnectingRoad({ length, roadType }) {
  return (
    <>
      {roadType == "vehicularRoad" && <VehicularRoad length={length} />};
      {roadType == "pedestrianRoad" && <PedestrianRoad length={length} />}
    </>
  );
}
