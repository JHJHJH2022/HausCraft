import BuildingIndivSingleLevel from "../objectComponents/BuildingIndivSingleLevel";
import { nanoid } from "nanoid";

export default function BuildingIndivAllLevels({ noOfFloors, objectHeight }) {
  const array = Array(noOfFloors).fill(1);
  let n = -1;
  return array.map(() => {
    n += 1;
    return (
      <BuildingIndivSingleLevel
        key={nanoid()}
        upperFloorPos={[0, objectHeight * n, 0]}
      />
    );
  });
}
