import PairTwoRoomAll from "../CorridorComponents/PairAllRooms";
import { nanoid } from "nanoid";
export default function CustomCorridorOneLevel({
  noOfUnitsArr,
  geomType,
  corridorWidth,
  pairDist,
  clusterType,
  rectilinearInitialDist,
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
    } else if (clusterType === "rectilinear") {
      /* CLUSTER TYPE 2: RECTILINEAR CLUSTERS */
      const initialDist = rectilinearInitialDist;
      let dist = (Math.floor((m + 2) / 4) + 1) * pairDist;
      if (m < 2) {
        position =
          m === 0
            ? [initialDist + pairDist, 0, -corridorWidth / 2]
            : [-corridorWidth / 2, 0, initialDist + pairDist];
      } else {
        position =
          m % 4 === 0
            ? [initialDist + dist, 0, corridorWidth / 2]
            : m % 4 === 1
            ? [initialDist + dist, 0, -corridorWidth / 2]
            : m % 4 === 2
            ? [corridorWidth / 2, 0, initialDist + dist]
            : m % 4 === 3
            ? [-corridorWidth / 2, 0, initialDist + dist]
            : [0, 0, 0];
      }
      /* Rotate*/
      if (m < 2) {
        rotation = m === 0 ? [0, Math.PI, 0] : [0, Math.PI * 1.5, 0]; // 180/270 degree
      } else {
        rotation =
          m % 4 === 0
            ? [0, 0, 0] // 0 degree
            : m % 4 === 1
            ? [0, Math.PI, 0] // 180 degree
            : m % 4 === 2
            ? [0, Math.PI * 0.5, 0] // 90 degree
            : m % 4 === 3
            ? [0, Math.PI * 1.5, 0] // 270 degree
            : [0, 0, 0];
        // m=0->180; m=1=>270;m=2->0;m=3->180; 4-90;5-270;6-0;7-180...
      }
    } else if (clusterType === "angled") {
    }

    m += 1;

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
