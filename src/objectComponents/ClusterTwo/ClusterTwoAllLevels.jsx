import ClusterTwoSingleLevel from "./ClusterTwoSingleLevel";
import { nanoid } from "nanoid";

export default function ClusterTwoAllLevels({
  noOfFloors,
  objectHeight,
  voidDeckHeight,
}) {
  const array = Array(noOfFloors).fill(1);
  let n = -1;
  return array.map(() => {
    n += 1;
    return (
      <ClusterTwoSingleLevel
        key={nanoid()}
        upperFloorPos={[0, objectHeight * n + voidDeckHeight, 0]}
      />
    );
  });
}
