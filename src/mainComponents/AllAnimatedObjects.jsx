import AnimatedObjects from "../objectComponentsHelpers/AnimatedObjects.jsx";

export default function AllAnimatedObjects({
  setIsDragging,
  setIsRotating,
  setIsChangingNoOfFloors,
  objects,
  removeobjects,
  updateobjects,
  updateobjectsLevels,
}) {
  return objects.map(({ key, position, rotation, typology }) => {
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
        setIsChangingNoOfFloors={setIsChangingNoOfFloors}
      />
    );
  });
}
