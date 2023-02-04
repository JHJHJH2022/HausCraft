import Building from "./Building.jsx";

export default function Buildings({
  setIsDragging,
  floorPlane,
  buildingHeight,
  buildings,
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
        position={pos}
        setIsDragging={setIsDragging}
        floorPlane={floorPlane}
        buildingHeight={buildingHeight}
      />
    );
  });
}
