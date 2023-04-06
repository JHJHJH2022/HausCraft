import CustomCorridorAllLevels from "./CustomCorridorAllLevels";
import CustomCorridorOneLevel from "./CustomCorridorOneLevel";

import { nanoid } from "nanoid";

// inputs OR DB data to save for this component: no. of each units + no. of storeys + position + rotation

export default function CustomCorridorAllFull({
  // all these are user input from UI, can have default value
  noOfFloors = 25,
  noOfUnitsArr = [2, 6, 2, 6],
  corridorWidth = 2.5,
  pairDist = 30, // this is the distance between centers of two adjacent units
  clusterType = "linear", // 'right-angle', 'obtuse-angle'
}) {
  //constants
  const heightVoidDeck = 2.6;
  const heightLevel = 2.9;
  const baseThickness = 0.5;

  // calculate length of corridor and base at void deck
  const numberOfPairs = Math.ceil(noOfUnitsArr.reduce((a, b) => a + b, 0) / 2);
  const unitFrontWidth = 12; //  this can be adjusted
  const corridorLength =
    Math.floor((numberOfPairs - 1) / 2) * pairDist + unitFrontWidth;
  const baseWidth = 18 + corridorWidth;
  const baseLength = corridorLength + 14;
  const basePosition =
    Math.floor((numberOfPairs - 1) / 2) % 2 === 0
      ? [0, 0, 0]
      : [-pairDist / 2, 0, 0];

  return (
    <>
      <group position={[0, heightLevel * noOfFloors + heightVoidDeck, 0]}>
        <CustomCorridorOneLevel
          key={nanoid()}
          noOfUnitsArr={noOfUnitsArr}
          geomType={"Roof"}
          corridorWidth={corridorWidth}
          pairDist={pairDist}
          clusterType={clusterType}
        />
      </group>

      <group position={[0, heightVoidDeck, 0]}>
        <CustomCorridorAllLevels
          noOfFloors={noOfFloors}
          noOfUnitsArr={noOfUnitsArr}
          corridorWidth={corridorWidth}
          pairDist={pairDist}
          corridorLength={corridorLength}
          corridorPosition={basePosition}
          heightLevel={heightLevel}
          clusterType={clusterType}
        />
      </group>

      <group>
        <CustomCorridorOneLevel
          key={nanoid()}
          noOfUnitsArr={noOfUnitsArr}
          geomType={"Voiddeck"}
          corridorWidth={corridorWidth}
          pairDist={pairDist}
          clusterType={clusterType}
        />
      </group>

      {/*Parametric Base */}
      <mesh position={basePosition} castShadow receiveShadow>
        <boxGeometry args={[baseLength, baseThickness, baseWidth]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
