import PairTwoRoomAll from "../CorridorComponents/PairAllRooms";

export default function CustomCorridorOneLevel({
  noOfUnitsArr,
  geomType,
  corridorWidth,
  pairDist,
  clusterType,
}) {
  // number of each unit type pair, units must come in pairs, if not will round up to nearest even number
  const noOfFiveRoomPair = Math.ceil(noOfUnitsArr[0] / 2);
  const noOfFourRoomPair = Math.ceil(noOfUnitsArr[1] / 2);
  const noOfThreeRoomPair = Math.ceil(noOfUnitsArr[2] / 2);
  const noOfTwoRoomPair = Math.ceil(noOfUnitsArr[3] / 2);
  noOfUnitsArr[3];
  const numberOfPairs =
    noOfFiveRoomPair + noOfFourRoomPair + noOfThreeRoomPair + noOfTwoRoomPair;

  // adjust distance along corridor

  const arrayNoOfUnits = Array(numberOfPairs).fill(1);
  let m = 0;

  // return

  return arrayNoOfUnits.map(() => {
    // initialise rotation and position
    let rotation;
    let position;

    if (clusterType === "linear") {
      /* CLUSTER TYPE 1: LINEAR CLUSTERS */
      /* decide lateral translation distance, and whether to add on left or right side */
      let directionFactor = Math.floor(m / 2) % 2 === 0 ? 1 : -1; // m=0,1 -> -1; m=2,3->1; m=4,5->-1...
      let dist = pairDist * Math.floor((m + 2) / 4) * directionFactor; // m=0,1 -> 0; m=2,3,4,5->p; m=6,7,8,9->2*p ...

      /* Rotate every other unit */
      rotation = m % 2 === 0 ? [0, 0, 0] : [0, Math.PI, 0];

      /* Move down by corridorWidth if is in opp. position / rotated */
      position =
        m % 2 === 0
          ? [dist, 0, corridorWidth / 2]
          : [dist, 0, -corridorWidth / 2];

      m += 1;
    } else if (clusterType === "linear") {
    } else if (clusterType === "linear") {
    }

    // position order based on unit type, starting from the largest room positioned at center
    let unitType =
      m <= noOfFiveRoomPair
        ? "fiveRoom"
        : m > noOfFiveRoomPair && m <= noOfFiveRoomPair + noOfFourRoomPair
        ? "fourRoom"
        : m > noOfFiveRoomPair + noOfFourRoomPair &&
          m <= noOfFiveRoomPair + noOfFourRoomPair + noOfThreeRoomPair
        ? "threeRoom"
        : "twoRoom";

    return (
      // components in one level
      <>
        <PairTwoRoomAll
          geomType={geomType}
          unitType={unitType}
          rotation={rotation}
          position={position}
        />
      </>
    );
  });
}
