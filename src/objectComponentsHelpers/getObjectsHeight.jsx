import { importObjects } from "./ImportedObjects";

export function getObjectsHeight() {
  const meshes = importObjects();
  const buildingIndivHeight = meshes.buildingIndivObj.height;
  const treeHeight = meshes.treeObj.height;

  // all
  const heights = {
    buildingIndivHeight: buildingIndivHeight,
    treeHeight: treeHeight,
  };
  return heights;
}
