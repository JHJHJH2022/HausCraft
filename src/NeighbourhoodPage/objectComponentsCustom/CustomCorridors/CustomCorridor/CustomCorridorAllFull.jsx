import CustomCorridorAllLevels from "./CustomCorridorAllLevels";
import CustomCorridorOneLevel from "./CustomCorridorOneLevel";
import CustomBox from "./CustomBox";

import { nanoid } from "nanoid";

// inputs OR DB data to save for this component: no. of each units + no. of storeys + position + rotation

export default function CustomCorridorAllFull({
  // all these are user input from UI, can have default value
  noOfFloors,
  noOfUnitsArr,
  corridorWidth,
  pairDist, // this is the distance between centers of two adjacent units
  clusterType, // 'linear', 'angled','rectilinear'
  rectilinearInitialDist,
  slideDist,
}) {
  //constants
  const heightVoidDeck = 2.6;
  const heightLevel = 2.9;
  const baseThickness = 0.5;
  const unitFrontWidth = 10; //  this can be adjusted
  const baseExtensionLength = 15;

  // calculate length of corridor and base at void deck
  const numberOfPairs = Math.ceil(noOfUnitsArr?.reduce((a, b) => a + b, 0) / 2);

  /* for cluster type: linear */
  const corridorLength =
    Math.floor((numberOfPairs - 1) / 2) * pairDist + unitFrontWidth;
  const baseWidth = 18 + corridorWidth;
  const baseLength = corridorLength + baseExtensionLength;
  const basePosition =
    Math.floor((numberOfPairs - 1) / 2) % 2 === 0
      ? [0, 0, 0]
      : [-pairDist / 2, 0, 0];

  /* for cluster type: rectilinear */

  let corridorCLength = (pairDist + rectilinearInitialDist) * Math.sqrt(2);
  let corridorCPos;
  let corridorCPosition = [
    (pairDist + rectilinearInitialDist - unitFrontWidth / 2) / 2,
    0,
    (pairDist + rectilinearInitialDist - unitFrontWidth / 2) / 2,
  ];

  let corridorBLength = // corridor along y-axis
    numberOfPairs === 1
      ? 0
      : pairDist * Math.floor((numberOfPairs + 1) / 4) + unitFrontWidth; // m=1,2 -> 0; m=3,4,5,6->p; m=7,8,9,10->2*p ...

  let corridorALength = // corridor along x-axis
    pairDist * Math.floor((numberOfPairs - 1) / 4) + unitFrontWidth; // m=1,2,3,4->0; m=5,6,7,8,->1*p; m=9,10,11,12->2p ...

  let corridorAPos =
    (Math.floor((numberOfPairs - 1) / 4) * 0.5 + 1) * pairDist +
    rectilinearInitialDist;
  let corridorAPosition = [corridorAPos, 0, 0];

  let corridorBPos =
    (Math.floor((numberOfPairs + 1) / 4) * 0.5 + 1) * pairDist +
    rectilinearInitialDist;
  let corridorBPosition = [0, 0, corridorBPos];

  let corridorObj = {
    corridorALength: corridorALength,
    corridorBLength: corridorBLength,
    corridorCLength: corridorCLength,
    corridorAPosition: corridorAPosition,
    corridorBPosition: corridorBPosition,
    corridorCPosition: corridorCPosition,
    corridorLength: corridorLength,
    corridorPosition: basePosition,
  };

  //corridor b needs to rotate by 90degree

  /*  // show control panel when any part of the group is clicked --- WIP
  const handleClick = (e) => {
    e.stopPropagation(); // if not when clicked, this function will be triggered multiple times if there are objects behind
    console.log(e.eventObject.name);
  }; */

  return (
    <group name="customClusterName">
      <group position={[0, heightLevel * noOfFloors + heightVoidDeck, 0]}>
        <CustomCorridorOneLevel
          key={nanoid()}
          noOfUnitsArr={noOfUnitsArr}
          geomType={"Roof"}
          corridorWidth={corridorWidth}
          pairDist={pairDist}
          clusterType={clusterType}
          rectilinearInitialDist={rectilinearInitialDist}
          slideDist={slideDist}
        />
      </group>

      <group position={[0, heightVoidDeck, 0]}>
        <CustomCorridorAllLevels
          noOfFloors={noOfFloors}
          noOfUnitsArr={noOfUnitsArr}
          corridorWidth={corridorWidth}
          pairDist={pairDist}
          corridorObj={corridorObj}
          heightLevel={heightLevel}
          clusterType={clusterType}
          rectilinearInitialDist={rectilinearInitialDist}
          slideDist={slideDist}
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
          rectilinearInitialDist={rectilinearInitialDist}
          slideDist={slideDist}
        />
      </group>

      {/*Parametric Base */}
      {clusterType === "linear" && (
        <CustomBox
          position={basePosition}
          rotation={[0, 0, 0]}
          length={baseLength}
          thickness={baseThickness}
          width={baseWidth}
        />
      )}
      {clusterType === "rectilinear" && (
        <>
          <CustomBox
            position={corridorAPosition}
            rotation={[0, 0, 0]}
            length={corridorALength + baseExtensionLength}
            thickness={baseThickness}
            width={baseWidth}
          />
          <CustomBox
            position={corridorBPosition}
            rotation={[0, Math.PI / 2, 0]}
            length={corridorBLength + baseExtensionLength}
            thickness={baseThickness}
            width={baseWidth}
          />
        </>
      )}
    </group>
  );
}
