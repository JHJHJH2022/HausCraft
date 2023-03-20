import { useEffect, useState } from "react";
import Inspector from "../../General/mainSubComponents/Inspector";
import BuildingIndivAllLevels from "../objectComponents/BuildingIndiv/BuildingIndivAllLevels";
import ClusterOneAllLevels from "../objectComponents/ClusterOne/ClusterOneAllLevels";
import ClusterOneVoidDeck from "../objectComponents/ClusterOne/ClusterOneVoidDeck";
import ClusterOneRoof from "../objectComponents/ClusterOne/ClusterOneRoof";
import ClusterTwoAllLevels from "../objectComponents/ClusterTwo/ClusterTwoAllLevels";
import ClusterTwoVoidDeck from "../objectComponents/ClusterTwo/ClusterTwoVoidDeck";
import ClusterTwoRoof from "../objectComponents/ClusterTwo/ClusterTwoRoof";
import CarparkAllLevels from "../objectComponents/Carpark/CarparkAllLevels";
import CarparkGround from "../objectComponents/Carpark/CarparkGround";
import CarparkRoof from "../objectComponents/Carpark/CarparkRoof";
import Tree from "../objectComponents/Trees/Tree";
import TreesClusterOne from "../objectComponents/Trees/TreesClusterOne";
import TreesClusterTwo from "../objectComponents/Trees/TreesClusterTwo";
import Slider from "../../General/mainSubComponents/htmlSlider";
import { getObjectsHeight } from "../../General/helpers/getObjectsHeight";
import SliderControl from "../../General/mainSubComponents/SliderControl";

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
  levels,
  streetView,
}) {
  const floatInAirHt = 0;
  const initialNoOfFloors = levels;
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
    cluster2LevelHeight,
    cluster2VoidDeckHeight,
    cluster2RoofHeight,
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
  } else if (typology === "cluster2") {
    objectHeight = cluster2LevelHeight;
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
      streetView={streetView}
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

      {typology === "cluster2" && (
        <>
          <SliderControl
            buildingHeight={noOfFloors * cluster2LevelHeight}
            setSliderVisible={setSliderVisible}
          />
          <ClusterTwoVoidDeck />
          <ClusterTwoRoof
            height={
              noOfFloors * cluster2LevelHeight +
              cluster2RoofHeight +
              cluster2VoidDeckHeight -
              2.2 //why need to move down by 2.2???
            }
          />
          <ClusterTwoAllLevels
            noOfFloors={noOfFloors}
            objectHeight={cluster2LevelHeight}
            voidDeckHeight={cluster2VoidDeckHeight}
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