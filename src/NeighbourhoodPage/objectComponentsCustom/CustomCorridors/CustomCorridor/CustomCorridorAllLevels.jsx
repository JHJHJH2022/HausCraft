import CustomCorridorOneLevel from "./CustomCorridorOneLevel";
import { nanoid } from "nanoid";

// inputs OR DB data to save for this component: no. of each units + no. of storeys + position + rotation

export default function CustomCorridorAllLevels({
  noOfFloors,
  noOfUnitsArr,
  corridorWidth,
  pairDist,
  corridorLength,
  corridorPosition,
  heightLevel,
  clusterType,
}) {
  // map all levels
  const array = Array(noOfFloors).fill(1);
  let n = -1;

  return array.map(() => {
    n += 1;
    return (
      <group position={[0, heightLevel * n, 0]}>
        <CustomCorridorOneLevel
          key={nanoid()}
          noOfUnitsArr={noOfUnitsArr}
          geomType={"Level"}
          corridorWidth={corridorWidth}
          pairDist={pairDist}
          clusterType={clusterType}
        />

        {/*Parametric Corridor */}
        <mesh position={corridorPosition} castShadow receiveShadow>
          <boxGeometry args={[corridorLength, 0.5, corridorWidth]} />
          <meshStandardMaterial />
        </mesh>
      </group>
    );
  });
}
