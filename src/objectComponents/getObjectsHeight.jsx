import { importObjects } from "./ImportedObjects";

export function getObjectsHeight() {
  const meshes = importObjects();
  const buildingIndivHeight = meshes.buildingIndivObj.height;

  const heights = { buildingIndivHeight: buildingIndivHeight };
  return heights;
}
