import Inspector from "../mainComponents/Inspector";
import BuildingIndivAllLevels from "../objectComponents/BuildingIndivAllLevels";
import Tree from "../objectComponents/Tree";
import { getObjectsHeight } from "./getObjectsHeight";

export default function AnimatedObjects({
  index,
  position,
  rotation,
  removeobjects,
  updateobjects,
  setIsDragging,
  setIsRotating,
  setIsChangingNoOfFloors,
  typology,
}) {
  const floatInAirHt = 3;
  const noOfFloors = 5;

  const handleDelete = (e) => {
    if (e.altKey) {
      /* setVisible((prev) => !prev); */
      removeobjects(index);
      console.log("clicked");
    }
  };

  const { buildingIndivHeight, treeHeight } = getObjectsHeight();
  let objectHeight = 0;
  if (typology === "buildingIndiv") {
    objectHeight = buildingIndivHeight;
  } else if (typology === "tree") {
    objectHeight = treeHeight;
  }

  return (
    <Inspector
      setIsDragging={setIsDragging}
      responsiveness={25}
      position={position}
      rotation={rotation}
      floatInAirHt={floatInAirHt}
      objectHeight={objectHeight}
      index={index}
      updateobjects={updateobjects}
      handleDelete={handleDelete}
    >
      {typology === "buildingIndiv" && (
        <BuildingIndivAllLevels
          noOfFloors={noOfFloors}
          objectHeight={buildingIndivHeight}
        />
      )}
      {typology === "tree" && <Tree />}
    </Inspector>
  );
}
