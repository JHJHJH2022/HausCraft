import { Physics } from "@react-three/cannon";
import Ground from "../FPVComponents/Ground";
import Player from "../FPVComponents/Player";
import FPV from "../FPVComponents/FPV";

export default function StreetViewControl() {
  return (
    <>
      <Physics>
        <Player />
        <Ground />
      </Physics>
      <FPV />
    </>
  );
}
