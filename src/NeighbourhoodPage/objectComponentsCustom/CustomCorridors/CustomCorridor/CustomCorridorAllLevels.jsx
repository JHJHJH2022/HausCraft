import CustomCorridorOneLevel from "./CustomCorridorOneLevel";
import { nanoid } from "nanoid";

// inputs OR DB data to save for this component: no. of each units + no. of storeys + position + rotation

export default function CustomCorridorAllLevels({ noOfFloors, numberOfUnits }) {
  // constant parameters
  const objectHeight = 2.9;

  // map all levels
  const array = Array(noOfFloors).fill(1);
  let n = -1;

  return array.map(() => {
    n += 1;
    return (
      <group position={[0, objectHeight * n, 0]}>
        <CustomCorridorOneLevel
          key={nanoid()}
          numberOfUnits={numberOfUnits}
          geomType={"level"}
        />
      </group>
    );
  });
}
