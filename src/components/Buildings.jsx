import Building from "./Building.jsx";

export default function Buildings({
  setIsDragging,
  setIsRotating,
  floorPlane,
  buildingHeight,
  buildings,
  removebuildings,
  updatebuildings,
  setIsChangingNoOfFloors,
}) {
  /* add buildings to the canvas */

  //after click, create a building that follows mouse posiiton
  // then when click on the ground / another building, position that building at the mouse intersect with ground / another building
  // need to check if a building is already there
  /*  */

  return buildings.map(({ key, pos }) => {
    return (
      <Building
        key={key}
        index={key}
        position={pos}
        setIsDragging={setIsDragging}
        setIsRotating={setIsRotating}
        floorPlane={floorPlane}
        buildingHeight={buildingHeight}
        removebuildings={removebuildings}
        updatebuildings={updatebuildings}
        setIsChangingNoOfFloors={setIsChangingNoOfFloors}
      />
    );
  });
}
