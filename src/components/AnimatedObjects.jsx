import Inspector from "./Inspector";
import BuildingIndivAllLevels from "../objectComponents/BuildingIndivAllLevels";
import { useState } from "react";
import { getObjectsHeight } from "../objectComponents/getObjectsHeight";

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

  const { buildingIndivHeight } = getObjectsHeight();
  let objectHeight = 0;
  if (typology === "buildingIndiv") {
    objectHeight = buildingIndivHeight;
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
    </Inspector>
  );
}
