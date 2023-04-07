import CustomCorridorOneLevel from "./CustomCorridorOneLevel";
import CustomBox from "./CustomBox";
import { nanoid } from "nanoid";

// inputs OR DB data to save for this component: no. of each units + no. of storeys + position + rotation

export default function CustomCorridorAllLevels({
  noOfFloors,
  noOfUnitsArr,
  corridorWidth,
  pairDist,
  heightLevel,
  clusterType,
  corridorObj,
  rectilinearInitialDist,
}) {
  // length of oblque corridor of custer rectilinear

  // map all levels
  const array = Array(noOfFloors).fill(1);
  let n = -1;

  return array.map(() => {
    n += 1;
    return (
      <group position={[0, heightLevel * n, 0]} key={nanoid()}>
        <CustomCorridorOneLevel
          key={nanoid()}
          noOfUnitsArr={noOfUnitsArr}
          geomType={"Level"}
          corridorWidth={corridorWidth}
          pairDist={pairDist}
          clusterType={clusterType}
          rectilinearInitialDist={rectilinearInitialDist}
        />

        {/*Parametric Corridor */}

        {clusterType === "linear" && (
          <CustomBox
            position={corridorObj.corridorPosition}
            rotation={[0, 0, 0]}
            length={corridorObj.corridorLength}
            thickness={0.5}
            width={corridorWidth}
          />
        )}
        {clusterType === "rectilinear" && (
          <>
            <CustomBox
              position={corridorObj.corridorAPosition}
              rotation={[0, 0, 0]}
              length={corridorObj.corridorALength}
              thickness={0.5}
              width={corridorWidth}
            />

            <CustomBox
              position={corridorObj.corridorBPosition}
              rotation={[0, Math.PI / 2, 0]}
              length={corridorObj.corridorBLength}
              thickness={0.5}
              width={corridorWidth}
            />

            {/* corridor at turn */}
            {/* roof */}
            <CustomBox
              position={corridorObj.corridorCPosition}
              rotation={[0, Math.PI / 4, 0]}
              length={corridorObj.corridorCLength}
              thickness={0.5}
              width={corridorWidth}
            />
            {/* Lift hall */}
            <group position={[3, 0, 3]}>
              <CustomBox
                position={corridorObj.corridorCPosition}
                rotation={[0, Math.PI / 4, 0]}
                length={6}
                thickness={0.5}
                width={8}
              />
              {/* lift */}
              <group position={[1.1, -1.45, -1.1]}>
                <CustomBox
                  position={corridorObj.corridorCPosition}
                  rotation={[0, Math.PI / 4, 0]}
                  length={3}
                  thickness={2.9}
                  width={8}
                />
              </group>
              {/* column */}
              <group position={[0.8, -1.45, 4.5]}>
                <CustomBox
                  position={corridorObj.corridorCPosition}
                  rotation={[0, Math.PI / 4, 0]}
                  length={0.5}
                  thickness={2.9}
                  width={0.5}
                />
              </group>
            </group>
          </>
        )}
      </group>
    );
  });
}
