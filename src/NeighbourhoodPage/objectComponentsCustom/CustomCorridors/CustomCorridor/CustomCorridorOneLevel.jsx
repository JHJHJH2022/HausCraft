import PairTwoRoomAll from "../CorridorComponents/PairTwoRoomAll";

export default function CustomCorridorOneLevel({ numberOfUnits, geomType }) {
  const numberOfPairs = Math.ceil(numberOfUnits / 2);

  // constant parameters
  const corridorWidth = 2.5;
  const pairDist = 20;

  // adjust distance along corridor

  const arrayNoOfUnits = Array(numberOfPairs).fill(1);
  let m = -1;

  // return

  return arrayNoOfUnits.map(() => {
    m += 1; // m starts from 0
    let dist = pairDist * Math.floor(m / 2);
    let rotation = m % 2 === 0 ? [0, 0, 0] : [0, Math.PI, 0];
    let position = m % 2 === 0 ? [dist, 0, corridorWidth] : [dist, 0, 0];

    return (
      // components in one level
      <>
        {/* by unit type, based on value of m: first x(=noOfUnits of each unit type) of m are 5-room..4-room..3-room..2-room*/}
        {/*   {m < 4 && <PairFiveRoomLevel rotation={rotation} position={position} />}
        {m < 4 && <PairFourRoomLevel rotation={rotation} position={position} />}
        {m < 4 && (
          <PairThreeRoomLevel rotation={rotation} position={position} />
        )} */}
        {/* {m < 4 && <PairTwoRoomLevel rotation={rotation} position={position} />}
        {m >= 4 && <DragonSlide rotation={rotation} position={position} />} */}
        <PairTwoRoomAll
          geomType={geomType}
          rotation={rotation}
          position={position}
        />
      </>
    );
  });
}
