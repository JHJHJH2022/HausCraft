import { importObjects } from "./ImportedObjects";

export function getObjectsHeight() {
  const meshes = importObjects();
  const buildingIndivHeight = meshes.buildingIndivObj.height;
  const treeHeight = meshes.treeObj.height;
  const cluster1LevelHeight = meshes.cluster1LevelObj.height;
  const cluster1VoidDeckHeight = meshes.cluster1VoidDeckObj.height;
  const cluster1RoofHeight = meshes.cluster1RoofObj.height;

  // all
  const heights = {
    buildingIndivHeight: buildingIndivHeight,
    treeHeight: treeHeight,
    cluster1LevelHeight: cluster1LevelHeight,
    cluster1VoidDeckHeight: cluster1VoidDeckHeight,
    cluster1RoofHeight: cluster1RoofHeight,
  };
  return heights;
}
