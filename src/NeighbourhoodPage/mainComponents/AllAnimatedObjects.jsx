import AnimatedObjects from "./AnimatedObjects.jsx";

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
  return objects.map(({ key, position, rotation, typology, levels }) => {
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
        setIsChangingNoOfFloors={setIsChangingNoOfFloors}
        streetView={streetView}
      />
    );
  });
}
