import { useEffect, useState } from "react";
import Inspector from "../mainComponents/Inspector";
import BuildingIndivAllLevels from "../objectComponents/BuildingIndivAllLevels";
import ClusterOneAllLevels from "../objectComponents/ClusterOneAllLevels";
import ClusterOneVoidDeck from "../objectComponents/ClusterOneVoidDeck";
import ClusterOneRoof from "../objectComponents/ClusterOneRoof";
import CarparkAllLevels from "../objectComponents/CarparkAllLevels";
import CarparkGround from "../objectComponents/CarparkGround";
import CarparkRoof from "../objectComponents/CarparkRoof";
import Tree from "../objectComponents/Tree";
import TreesClusterOne from "../objectComponents/TreesClusterOne";
import TreesClusterTwo from "../objectComponents/TreesClusterTwo";
import Slider from "./htmlSlider";
import { getObjectsHeight } from "./getObjectsHeight";
import SliderControl from "./SliderControl";

export default function AnimatedObjects({
  index,
  position,
  rotation,
  removeobjects,
  updateobjects,
  updateobjectsLevels,
  setIsDragging,
  typology,
  setIsChangingNoOfFloors,
}) {
  const floatInAirHt = 0;
  const initialNoOfFloors = 5;
  const [noOfFloors, setNoOfFloors] = useState(initialNoOfFloors);
  const [sliderVisible, setSliderVisible] = useState(false);

  useEffect(() => {
    updateobjectsLevels(index, noOfFloors);
  }, [noOfFloors]);

  const handleDelete = (e) => {
    if (e.altKey) {
      removeobjects(index);
      console.log("clicked");
    }
  };

  const {
    buildingIndivHeight,
    treeHeight,
    cluster1LevelHeight,
    cluster1VoidDeckHeight,
    cluster1RoofHeight,
    treesCluster1Height,
    treesCluster2Height,
    carparkLevelHeight,
    carparkGroundHeight,
    carparkRoofHeight,
  } = getObjectsHeight();
  let objectHeight = 0;
  if (typology === "buildingIndiv") {
    objectHeight = buildingIndivHeight;
  } else if (typology === "cluster1") {
    objectHeight = cluster1LevelHeight;
  } else if (typology === "carpark") {
    objectHeight = carparkLevelHeight;
  } else if (typology === "treesCluster1") {
    objectHeight = treesCluster1Height;
  } else if (typology === "treesCluster2") {
    objectHeight = treesCluster2Height;
  } else if (typology === "tree") {
    objectHeight = treeHeight;
  }

  return (
    <Inspector
      setIsDragging={setIsDragging}
      responsiveness={25}
      position={position}
      rotation={rotation}
      floatInAirHt={floatInAirHt}
      objectHeight={objectHeight} // this needs to be fixed when roof level and ground are diff height, should be different here as well, probably this is causing bugs for carpark ground and cluster roof
      index={index}
      updateobjects={updateobjects}
      handleDelete={handleDelete}
    >
      {typology === "buildingIndiv" && (
        <>
          <SliderControl
            buildingHeight={noOfFloors * buildingIndivHeight}
            setSliderVisible={setSliderVisible}
          />
          <BuildingIndivAllLevels
            noOfFloors={noOfFloors}
            objectHeight={buildingIndivHeight}
          />
          {sliderVisible && (
            <Slider
              noOfFloors={noOfFloors}
              setNoOfFloors={setNoOfFloors}
              setIsChangingNoOfFloors={setIsChangingNoOfFloors}
            />
          )}
        </>
      )}
      {typology === "cluster1" && (
        <>
          <SliderControl
            buildingHeight={noOfFloors * cluster1LevelHeight}
            setSliderVisible={setSliderVisible}
          />
          <ClusterOneVoidDeck />
          <ClusterOneRoof
            height={
              noOfFloors * cluster1LevelHeight +
              cluster1RoofHeight +
              cluster1VoidDeckHeight -
              2.2 //why need to move down by 2.2???
            }
          />
          <ClusterOneAllLevels
            noOfFloors={noOfFloors}
            objectHeight={cluster1LevelHeight}
            voidDeckHeight={cluster1VoidDeckHeight}
          />
          {sliderVisible && (
            <Slider
              noOfFloors={noOfFloors}
              setNoOfFloors={setNoOfFloors}
              setIsChangingNoOfFloors={setIsChangingNoOfFloors}
            />
          )}
        </>
      )}

      {typology === "carpark" && (
        <>
          <SliderControl
            buildingHeight={noOfFloors * carparkLevelHeight}
            setSliderVisible={setSliderVisible}
          />
          <CarparkGround carparkGroundHeight={carparkGroundHeight} />
          <CarparkRoof
            height={noOfFloors * carparkLevelHeight + carparkGroundHeight}
          />
          <CarparkAllLevels
            noOfFloors={noOfFloors}
            objectHeight={carparkLevelHeight}
            carparkGroundHeight={carparkGroundHeight}
          />
          {sliderVisible && (
            <Slider
              noOfFloors={noOfFloors}
              setNoOfFloors={setNoOfFloors}
              setIsChangingNoOfFloors={setIsChangingNoOfFloors}
            />
          )}
        </>
      )}

      {typology === "tree" && <Tree />}
      {typology === "treesCluster1" && <TreesClusterOne />}
      {typology === "treesCluster2" && <TreesClusterTwo />}
    </Inspector>
  );
}
