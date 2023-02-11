import ClusterOneSingleLevel from "./ClusterOneSingleLevel";
import { nanoid } from "nanoid";

export default function ClusterOneAllLevels({
  noOfFloors,
  objectHeight,
  voidDeckHeight,
}) {
  const array = Array(noOfFloors).fill(1);
  let n = -1;
  return array.map(() => {
    n += 1;
    return (
      <ClusterOneSingleLevel
        key={nanoid()}
        upperFloorPos={[0, objectHeight * n + voidDeckHeight, 0]}
      />
    );
  });
}
