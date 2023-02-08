import { useGLTF } from "@react-three/drei";
import { getMeshHeight } from "../helpers/helpers";

export function importObjects() {
  // typology: "buildingIndiv"
  const buildingIndiv = useGLTF("buildings-withFloorPlates.glb");
  const walls = buildingIndiv.nodes.walls;
  const windows = buildingIndiv.nodes.windows;
  const others = buildingIndiv.nodes.others;
  const floor = buildingIndiv.nodes.floor;
  const buildingIndivHeight = getMeshHeight(walls);
  const buildingIndivObj = {
    height: buildingIndivHeight,
    walls: walls,
    windows: windows,
    others: others,
    floor: floor,
  };

  // all
  const allObjects = { buildingIndivObj: buildingIndivObj };

  return allObjects;
}
