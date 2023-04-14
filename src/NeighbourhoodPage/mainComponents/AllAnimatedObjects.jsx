import AnimatedObjects from "./AnimatedObjects.jsx";
import { useState } from "react";

export default function AllAnimatedObjects({
  setIsDragging,
  setIsRotating,
  setIsChangingNoOfFloors,
  objects,
  removeobjects,
  updateobjects,
  updateobjectsLevels,
  streetView,
  setSelectedInfo,
}) {
  return objects.map(
    ({ key, position, rotation, typology, levels, customSettings }) => {
      return (
        <AnimatedObjects
          key={key}
          index={key}
          position={position}
          rotation={rotation}
          removeobjects={removeobjects}
          updateobjects={updateobjects}
          updateobjectsLevels={updateobjectsLevels}
          setIsDragging={setIsDragging}
          setIsRotating={setIsRotating}
          typology={typology}
          levels={levels}
          customSettings={customSettings}
          setIsChangingNoOfFloors={setIsChangingNoOfFloors}
          streetView={streetView}
          setSelectedInfo={setSelectedInfo}
        />
      );
    }
  );
}
