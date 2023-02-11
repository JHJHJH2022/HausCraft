import { importObjects } from "./ImportedObjects";

export function getObjectsHeight() {
  const meshes = importObjects();
  const buildingIndivHeight = meshes.buildingIndivObj.height;
  const treeHeight = meshes.treeObj.height;
  const cluster1LevelHeight = meshes.cluster1LevelObj.height;
  const cluster1VoidDeckHeight = meshes.cluster1VoidDeckObj.height;
  const cluster1RoofHeight = meshes.cluster1RoofObj.height;
  const cluster2LevelHeight = meshes.cluster2LevelObj.height;
  const cluster2VoidDeckHeight = meshes.cluster2VoidDeckObj.height;
  const cluster2RoofHeight = meshes.cluster2RoofObj.height;
  const treesCluster1Height = meshes.treesCluster1Obj.height;
  const treesCluster2Height = meshes.treesCluster2Obj.height;
  const carparkLevelHeight = meshes.carparkLevelObj.height;
  const carparkGroundHeight = meshes.carparkGroundObj.height;

  const carparkRoofHeight = meshes.carparkRoofObj.height;

  // all
  const heights = {
    buildingIndivHeight: buildingIndivHeight,
    treeHeight: treeHeight,
    cluster1LevelHeight: cluster1LevelHeight,
    cluster1VoidDeckHeight: cluster1VoidDeckHeight,
    cluster1RoofHeight: cluster1RoofHeight,
    cluster2LevelHeight: cluster2LevelHeight,
    cluster2VoidDeckHeight: cluster2VoidDeckHeight,
    cluster2RoofHeight: cluster2RoofHeight,
    treesCluster1Height: treesCluster1Height,
    treesCluster2Height: treesCluster2Height,
    carparkLevelHeight: carparkLevelHeight,
    carparkGroundHeight: carparkGroundHeight,
    carparkRoofHeight: carparkRoofHeight,
  };
  return heights;
}
