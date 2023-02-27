import CarparkSingleLevel from "./CarparkSingleLevel";
import { nanoid } from "nanoid";

export default function CarparkAllLevels({
  noOfFloors,
  objectHeight,
  carparkGroundHeight,
}) {
  const array = Array(noOfFloors).fill(1);
  let n = -1;
  return array.map(() => {
    n += 1;
    return (
      <CarparkSingleLevel
        key={nanoid()}
        upperFloorPos={[0, objectHeight * n + carparkGroundHeight, 0]}
      />
    );
  });
}
