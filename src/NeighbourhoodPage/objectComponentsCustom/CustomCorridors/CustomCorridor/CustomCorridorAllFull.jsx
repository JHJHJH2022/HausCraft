import CustomCorridorAllLevels from "./CustomCorridorAllLevels";
import CustomCorridorOneLevel from "./CustomCorridorOneLevel";

import { nanoid } from "nanoid";

// inputs OR DB data to save for this component: no. of each units + no. of storeys + position + rotation

export default function CustomCorridorAllFull({
  noOfFloors = 8,
  numberOfUnits = 9,
}) {
  //constants
  const heightVoidDeck = 2.6;

  return (
    <>
      <group position={[0, 2.9 * noOfFloors + 2.6, 0]}>
        <CustomCorridorOneLevel
          key={nanoid()}
          numberOfUnits={numberOfUnits}
          geomType={"roof"}
        />
      </group>

      <group position={[0, 2.6, 0]}>
        <CustomCorridorAllLevels
          noOfFloors={noOfFloors}
          numberOfUnits={numberOfUnits}
        />
      </group>

      <group position={[0, 0, 0]}>
        <CustomCorridorOneLevel
          key={nanoid()}
          numberOfUnits={numberOfUnits}
          geomType={"voiddeck"}
        />
      </group>
    </>
  );
}
