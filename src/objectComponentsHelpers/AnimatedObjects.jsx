import { useState } from "react";
import Inspector from "../mainComponents/Inspector";
import BuildingIndivAllLevels from "../objectComponents/BuildingIndivAllLevels";
import ClusterOneAllLevels from "../objectComponents/ClusterOneAllLevels";
import ClusterOneVoidDeck from "../objectComponents/ClusterOneVoidDeck";
import ClusterOneRoof from "../objectComponents/ClusterOneRoof";
import Tree from "../objectComponents/Tree";
import Slider from "./htmlSlider";
import { getObjectsHeight } from "./getObjectsHeight";
import SliderControl from "./SliderControl";

export default function AnimatedObjects({
  index,
  position,
  rotation,
  removeobjects,
  updateobjects,
  setIsDragging,
  typology,
  setIsChangingNoOfFloors,
}) {
  const floatInAirHt = 3;
  const initialNoOfFloors = 5;
  const [noOfFloors, setNoOfFloors] = useState(initialNoOfFloors);
  const [sliderVisible, setSliderVisible] = useState(false);

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
  } = getObjectsHeight();
  let objectHeight = 0;
  if (typology === "buildingIndiv") {
    objectHeight = buildingIndivHeight;
  } else if (typology === "cluster1") {
    objectHeight = cluster1LevelHeight;
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
      objectHeight={objectHeight}
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

      {typology === "tree" && <Tree />}
    </Inspector>
  );
}
