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
}) {
  const [selectedIndex, setSelectedIndex] = useState("");

  console.log(selectedIndex);
  return objects.map(
    ({ key, position, rotation, typology, levels, customCorridorSettings }) => {
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
          customCorridorSettings={customCorridorSettings}
          setIsChangingNoOfFloors={setIsChangingNoOfFloors}
          streetView={streetView}
          setSelectedIndex={setSelectedIndex}
        />
      );
    }
  );
}
