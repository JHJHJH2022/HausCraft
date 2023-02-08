import AnimatedObjects from "./AnimatedObjects.jsx";

export default function AllAnimatedObjects({
  setIsDragging,
  setIsRotating,
  setIsChangingNoOfFloors,
  objects,
  removeobjects,
  updateobjects,
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
        setIsDragging={setIsDragging}
        setIsRotating={setIsRotating}
        typology={typology}
        setIsChangingNoOfFloors={setIsChangingNoOfFloors}
      />
    );
  });
}
