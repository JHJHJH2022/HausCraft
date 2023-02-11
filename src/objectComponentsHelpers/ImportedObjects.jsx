import { useGLTF } from "@react-three/drei";
import { getMeshHeight } from "../helpers/helpers";

export function importObjects() {
  // site model
  const site = useGLTF("site.glb");
  const crossing = site.nodes.crossing;
  const road = site.nodes.road;
  const siteGreen = site.nodes.siteGreen;
  const surrounding = site.nodes.surrounding;
  const siteHeight = getMeshHeight(road);
  const siteObj = {
    height: siteHeight,
    crossing: crossing,
    road: road,
    siteGreen: siteGreen,
    surrounding: surrounding,
  };

  // typology: "buildingIndiv"
  const buildingIndiv = useGLTF("buildings-withFloorPlates_scaled.glb");
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

  // typology: "cluster1"
  const cluster1Level = useGLTF("cluster1Level.glb");
  const level3room = cluster1Level.nodes.level3room;
  const level4room = cluster1Level.nodes.level4room;
  const level5room = cluster1Level.nodes.level5room;
  const levelGlass = cluster1Level.nodes.levelGlass;
  const levelWall = cluster1Level.nodes.levelWall;
  const levelWindowFrame = cluster1Level.nodes.levelWindowFrame;
  const cluster1LevelHeight = getMeshHeight(level3room);
  const cluster1LevelObj = {
    height: cluster1LevelHeight,
    level3room: level3room,
    level4room: level4room,
    level5room: level5room,
    levelGlass: levelGlass,
    levelWall: levelWall,
    levelWindowFrame: levelWindowFrame,
  };

  const cluster1VoidDeck = useGLTF("cluster1VoidDeck.glb");
  const voiddeck3room = cluster1VoidDeck.nodes.voiddeck3room;
  const voiddeck4room = cluster1VoidDeck.nodes.voiddeck4room;
  const voiddeck5room = cluster1VoidDeck.nodes.voiddeck5room;
  const voiddeckFloor = cluster1VoidDeck.nodes.voiddeckFloor;
  const cluster1VoidDeckHeight = getMeshHeight(voiddeckFloor);
  const cluster1VoidDeckObj = {
    height: cluster1VoidDeckHeight,
    voiddeck3room: voiddeck3room,
    voiddeck4room: voiddeck4room,
    voiddeck5room: voiddeck5room,
    voiddeckFloor: voiddeckFloor,
  };

  const cluster1Roof = useGLTF("cluster1Roof.glb");
  const roof3room = cluster1Roof.nodes.roof3room;
  const roof4room = cluster1Roof.nodes.roof4room;
  const roof5room = cluster1Roof.nodes.roof5room;
  const roofCorridor = cluster1Roof.nodes.roofCorridor;
  const cluster1RoofHeight = getMeshHeight(roof5room);
  const cluster1RoofObj = {
    height: cluster1RoofHeight,
    roof3room: roof3room,
    roof4room: roof4room,
    roof5room: roof5room,
    roofCorridor: roofCorridor,
  };

  // typology: "cluster1"
  const carparkLevel = useGLTF("carparkLevel.glb");

  const carparkLevelColumns = carparkLevel.nodes.carparkLevelColumns;
  const carparkLevelFloor = carparkLevel.nodes.carparkLevelFloor;
  const carparkLevelHeight = getMeshHeight(carparkLevelColumns);
  const carparkLevelObj = {
    height: carparkLevelHeight,
    carparkLevelColumns: carparkLevelColumns,
    carparkLevelFloor: carparkLevelFloor,
  };

  const carparkGround = useGLTF("carparkGround.glb");
  const carparkGroundColumns = carparkGround.nodes.carparkGroundColumns;
  const carparkGroundFloor = carparkGround.nodes.carparkGroundFloor;
  const carparkGroundHeight = getMeshHeight(carparkGroundFloor);
  const carparkGroundObj = {
    height: carparkGroundHeight,
    carparkGroundColumns: carparkGroundColumns,
    carparkGroundFloor: carparkGroundFloor,
  };

  const carparkRoof = useGLTF("carparkRoof.glb");
  console.log(carparkRoof);
  const carparkRoofColumns = carparkRoof.nodes.carparkRoofColumns;
  const carparkRoofWall = carparkRoof.nodes.carparkRoofWall;
  const carparkRoofGreen = carparkRoof.nodes.carparkRoofGreen;
  const carparkRoofHeight =
    getMeshHeight(carparkRoofColumns) + getMeshHeight(carparkRoofWall);
  const carparkRoofObj = {
    height: carparkRoofHeight,
    carparkRoofColumns: carparkRoofColumns,
    carparkRoofWall: carparkRoofWall,
    carparkRoofGreen: carparkRoofGreen,
  };

  // typology:"tree"
  const tree = useGLTF("tree.glb");
  const treeMesh = tree.nodes["tree-lime"];
  const treeHeight = getMeshHeight(treeMesh);
  const treeObj = {
    height: treeHeight,
    tree: treeMesh,
  };

  // typology: "treesCluster1"
  const treesCluster1 = useGLTF("treesCluster1.glb");
  const treesCluster1Beech = treesCluster1.nodes["tree-beech-merged"];
  const treesCluster1Lime = treesCluster1.nodes["tree-lime-merged"];
  const treesCluster1Height = getMeshHeight(treesCluster1Lime);
  const treesCluster1Obj = {
    height: treesCluster1Height,
    treesCluster1Beech: treesCluster1Beech,
    treesCluster1Lime: treesCluster1Lime,
  };

  // typology: "treesCluster1"
  const treesCluster2 = useGLTF("treesCluster2.glb");
  const treesCluster2Beech = treesCluster2.nodes["tree-beech"];
  const treesCluster2Lime = treesCluster2.nodes["tree-lime"];
  const treesCluster2Spruce = treesCluster2.nodes["tree-spruce"];
  const treesCluster2Height = getMeshHeight(treesCluster2Spruce);
  const treesCluster2Obj = {
    height: treesCluster2Height,
    treesCluster2Beech: treesCluster2Beech,
    treesCluster2Lime: treesCluster2Lime,
    treesCluster2Spruce: treesCluster2Spruce,
  };

  // all
  const allObjects = {
    buildingIndivObj: buildingIndivObj,
    treeObj: treeObj,
    siteObj: siteObj,
    cluster1LevelObj: cluster1LevelObj,
    cluster1VoidDeckObj: cluster1VoidDeckObj,
    cluster1RoofObj: cluster1RoofObj,
    treesCluster1Obj: treesCluster1Obj,
    treesCluster2Obj: treesCluster2Obj,
    carparkLevelObj: carparkLevelObj,
    carparkGroundObj: carparkGroundObj,
    carparkRoofObj: carparkRoofObj,
  };

  return allObjects;
}
