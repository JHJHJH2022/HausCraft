import "../index.css";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrthographicCamera,
  OrbitControls,
  GizmoHelper,
  GizmoViewport,
  Html,
} from "@react-three/drei";
import { useEffect } from "react";
import { useStoreAll } from "./hooks/useStoreAll";
import Lights from "../General/otherComponents/Lights";
import Display from "../General/otherComponents/Display";
import AllAnimatedObjects from "./mainComponents/AllAnimatedObjects.jsx";
import Road from "../ComponentsPage/corridorComponents/Road";
import Plane from "../ComponentsPage/corridorComponents/Plane";
import Site from "./objectComponents/Site";
import * as designSessions from "./api/modifyDesignSessions";
import Buttons from "../General/otherComponents/Buttons";
import AllDesignSessions from "../HomePage/AllDesignSessions";
import ComponentsList from "../General/otherComponents/ComponentsList";
import SunSlider from "../General/mainSubComponents/SunSlider";
import BuildingHeightLimit from "../General/otherComponents/BuildingHeightLimit";
import Comment from "../General/otherComponents/Comment";
export default function AppNeighbourhood() {
  // user control states
  const [isDragging, setIsDragging] = useState(false);
  const [isChangingNoOfFloors, setIsChangingNoOfFloors] = useState(false);

  const [timeOfDay, setTimeOfDay] = useState(10);

  const [heightLimit, setHeightLimit] = useState(50);
  const handleInput = (e) => {
    setHeightLimit(e.target.value);
  };
  // set tools visibility with buttons
  const [heightLimitVisible, setHeightLimitVisbible] = useState(false);
  const handleBuildingHeightLimit = () => {
    setHeightLimitVisbible((prev) => !prev);
  };
  const [sunSliderVisible, setSunSliderVisible] = useState(false);
  const handleSunSliderVisible = () => {
    setSunSliderVisible((prev) => !prev);
  };
  const [commentVisible, setCommentVisible] = useState(false);
  const handleCommentVisible = () => {
    setCommentVisible((prev) => !prev);
  };
  const [editMode, setEditMode] = useState(false);
  const handleEditMode = () => {
    setEditMode((prev) => !prev);
  };
  // Update buildings in canvas and building number display
  const [buildingNum, setBuildingNum] = useState(0);
  const [parkingNum, setParkingNum] = useState(0);
  const [objects] = useStoreAll((state) => [state.objects]);
  const [addobjects] = useStoreAll((state) => [state.addobjects]);
  const [setallobjects] = useStoreAll((state) => [state.setallobjects]);
  const [removeobjects] = useStoreAll((state) => [state.removeobjects]);
  const [updateobjects] = useStoreAll((state) => [state.updateobjects]);
  const [updateobjectsLevels] = useStoreAll((state) => [
    state.updateobjectsLevels,
  ]);

  // save to DB
  const sessionId = "myFirstDesign";
  // designSessions.createDesignSession(sessionId);
  const handleSave = async () => {
    await designSessions.updateDesignSession(sessionId, { objects: objects });
  };

  // get from DB
  const handleGet = async () => {
    const objectsToSet = await designSessions.getDesignSession(sessionId);

    setallobjects(objectsToSet);
  };

  // handle click
  const handleClick = (e) => {
    const typology = e.target.id;
    addobjects(typology); // button id must be same as typology in useStore!
  };

  useEffect(() => {
    const allObjects = objects.filter((object) => {
      return (
        object.typology !== "tree" &&
        object.typology !== "treesCluster1" &&
        object.typology !== "treesCluster2" &&
        object.typology !== "carpark"
      );
    });

    let totalUnitCount = 0;

    for (let i = 0; i < allObjects.length; i++) {
      totalUnitCount += allObjects[i].unitsPerLevel * allObjects[i].levels;
    }

    setBuildingNum(totalUnitCount);
  }, [objects]);

  useEffect(() => {
    const allObjects = objects.filter((object) => {
      return object.typology === "carpark";
    });

    let totalUnitCount = 0;

    for (let i = 0; i < allObjects.length; i++) {
      totalUnitCount += allObjects[i].unitsPerLevel * allObjects[i].levels;
    }

    setParkingNum(totalUnitCount);
  }, [objects]);

  // return objects
  return (
    <div
      className="flex gap-10 justify-between items-center px-20 py-10"
      style={{ height: "92%", width: "100%" }}
    >
      {!editMode && (
        <div className="w-1/2 h-full">
          <AllDesignSessions />
        </div>
      )}
      <div className={editMode ? "w-full h-full" : "w-1/2 h-full"}>
        <Display
          buildingNum={buildingNum}
          parkingNum={parkingNum}
          handleClick={handleClick}
          handleSave={handleSave}
          handleGet={handleGet}
        />
        {editMode && (
          <ComponentsList
            buildingNum={buildingNum}
            parkingNum={parkingNum}
            handleClick={handleClick}
            handleSave={handleSave}
            handleGet={handleGet}
          />
        )}
        {sunSliderVisible && (
          <SunSlider setTimeOfDay={setTimeOfDay} timeOfDay={timeOfDay} />
        )}

        <Canvas
          className="rounded-lg border border-gray-300 z-0 "
          flat
          style={{ background: "white" }}
          shadows
          dpr={[1, 2]}
        >
          {/*Building height limit indicator  */}
          {heightLimitVisible && (
            <BuildingHeightLimit
              heightLimit={heightLimit}
              setHeightLimit={setHeightLimit}
            />
          )}
          {commentVisible && <Comment />}
          <Lights timeOfDay={timeOfDay} />
          {/* <gridHelper args={[220, 100, "lightgrey", "lightgrey"]} /> */}
          <Site />
          <AllAnimatedObjects
            setIsDragging={setIsDragging}
            setIsChangingNoOfFloors={setIsChangingNoOfFloors}
            objects={objects}
            removeobjects={removeobjects}
            updateobjects={updateobjects}
            updateobjectsLevels={updateobjectsLevels}
          />
          <Plane />

          <OrthographicCamera
            makeDefault
            near={0}
            zoom={6}
            position={[100, 100, 150]}
          />
          <OrbitControls
            minZoom={4}
            maxZoom={20}
            enabled={!isDragging && !isChangingNoOfFloors}
            near={0.1}
            far={500}
          />
          <GizmoHelper alignment="top-right" margin={[100, 100]}>
            <GizmoViewport labelColor="white" axisHeadScale={1} />
          </GizmoHelper>
        </Canvas>

        <Buttons
          handleSunSliderVisible={handleSunSliderVisible}
          handleBuildingHeightLimit={handleBuildingHeightLimit}
          handleCommentVisible={handleCommentVisible}
          handleEditMode={handleEditMode}
          editMode={editMode}
        />
      </div>
    </div>
  );
}
