import "../index.css";
import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, Sky } from "@react-three/drei";
import { useEffect } from "react";
import { useStoreAll } from "./hooks/useStoreAll";
import Lights from "../General/otherComponents/Lights";
import Display from "../General/otherComponents/Display";
import AllAnimatedObjects from "./mainComponents/AllAnimatedObjects.jsx";

import Site from "./objectComponents/Site";

import * as api from "./api/modifyDesignSessions";
import Buttons from "../General/otherComponents/Buttons";
import AllDesigns from "../HomePage/AllDesigns";
import ComponentsList from "../General/otherComponents/ComponentsList";
import SunSlider from "../General/mainSubComponents/SunSlider";
import BuildingHeightLimit from "../General/otherComponents/BuildingHeightLimit";
import Comment from "../General/otherComponents/Comment";

import CustomUI from "../General/CustomUI/CustomUI";

import CameraControl from "./Cameras/CameraControl";

export default function AppNeighbourhood() {
  // user control states
  const [isDragging, setIsDragging] = useState(false);
  const [isChangingNoOfFloors, setIsChangingNoOfFloors] = useState(false);

  const [timeOfDay, setTimeOfDay] = useState(10);

  const [heightLimit, setHeightLimit] = useState(100);
  const handleInput = (e) => {
    setHeightLimit(e.target.value);
  };
  const [currentSessionId, setCurrentSessionId] = useState("Design 123"); // need to ensure user cannot delete this one!!! OR user will default to an empty page

  const [newSession, setNewSession] = useState("");
  const handleNewSessionInput = (e) => {
    setNewSession(e.target.value);
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
    handleSave();
  };

  const [streetView, setStreetView] = useState(false);
  const handleStreetView = () => {
    setStreetView((prev) => !prev);
  };
  // Update buildings in canvas and building number display
  const [buildingNum, setBuildingNum] = useState(0);
  const [buildingNumFive, setBuildingNumFive] = useState(0);
  const [buildingNumFour, setBuildingNumFour] = useState(0);
  const [buildingNumThree, setBuildingNumThree] = useState(0);
  const [buildingNumTwo, setBuildingNumTwo] = useState(0);

  const [parkingNum, setParkingNum] = useState(0);
  const [objects] = useStoreAll((state) => [state.objects]);
  const [addobjects] = useStoreAll((state) => [state.addobjects]);
  const [addCustom] = useStoreAll((state) => [state.addCustom]);
  const [setallobjects] = useStoreAll((state) => [state.setallobjects]);
  const [removeobjects] = useStoreAll((state) => [state.removeobjects]);
  const [updateobjects] = useStoreAll((state) => [state.updateobjects]);
  const [updateCustomObject] = useStoreAll((state) => [
    state.updateCustomObject,
  ]);
  const [updateobjectsLevels] = useStoreAll((state) => [
    state.updateobjectsLevels,
  ]);

  // DB operations
  const [allSessions, setAllSessions] = useState();
  const getAll = () => {
    const getAllSessions = async () => {
      const data = await api.getAllDesignSessions();
      setAllSessions(data);
    };
    getAllSessions();
  };
  useEffect(() => {
    getAll();
  }, []);

  const handleSave = async () => {
    await api.updateDesignSession(currentSessionId, {
      objects: objects,
      buildingNum: buildingNum,
      parkingNum: parkingNum,
    });
    getAll();
  };

  console.log(objects);

  const handleCreateNewSession = async () => {
    await api.createDesignSession(newSession);
    setCurrentSessionId(newSession);
    getAll();
  };
  const handleDeleteSession = async () => {
    await api.deleteDesignSession(currentSessionId);
    setCurrentSessionId("Design 123");
    getAll();
  };

  // get all objects of current session from DB, then set all objects to store, then map all objects in store to display on canvas
  useEffect(() => {
    const getCurrentSession = async () => {
      const objectsToDisplay = await api.getDesignSession(currentSessionId);

      setallobjects(objectsToDisplay);
    };
    getCurrentSession();
  }, [currentSessionId]);

  // handles addition of new objects to canvas when button is clicked
  const handleClick = (e) => {
    const typology = e.target.id;
    addobjects(typology); // button id must be same as typology in useStore!
  };

  const handleAddCustom = () => {
    addCustom("customCorridor", selectedIndexCustomSettings);
  };

  // calculate total building units
  useEffect(() => {
    // filter out all building objects from store
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

  // calculate total carpark units
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

  // calculate total five-room units
  useEffect(() => {
    const allObjects = objects.filter((object) => {
      return object.typology === "customCorridor";
    });

    let fiveRoomUnitCount = 0;

    for (let i = 0; i < allObjects.length; i++) {
      fiveRoomUnitCount +=
        allObjects[i].customCorridorSettings.noOfUnitsArr[0] *
        allObjects[i].customCorridorSettings.noOfFloors;
    }

    setBuildingNumFive(fiveRoomUnitCount);
  }, [objects]);

  // calculate total four-room units
  useEffect(() => {
    const allObjects = objects.filter((object) => {
      return object.typology === "customCorridor";
    });

    let fourRoomUnitCount = 0;

    for (let i = 0; i < allObjects.length; i++) {
      fourRoomUnitCount +=
        allObjects[i].customCorridorSettings.noOfUnitsArr[1] *
        allObjects[i].customCorridorSettings.noOfFloors;
    }

    setBuildingNumFour(fourRoomUnitCount);
  }, [objects]);

  // calculate total three-room units
  useEffect(() => {
    const allObjects = objects.filter((object) => {
      return object.typology === "customCorridor";
    });

    let threeRoomUnitCount = 0;

    for (let i = 0; i < allObjects.length; i++) {
      threeRoomUnitCount +=
        allObjects[i].customCorridorSettings.noOfUnitsArr[2] *
        allObjects[i].customCorridorSettings.noOfFloors;
    }

    setBuildingNumThree(threeRoomUnitCount);
  }, [objects]);

  // calculate total two-room units
  useEffect(() => {
    const allObjects = objects.filter((object) => {
      return object.typology === "customCorridor";
    });

    let twoRoomUnitCount = 0;

    for (let i = 0; i < allObjects.length; i++) {
      twoRoomUnitCount +=
        allObjects[i].customCorridorSettings.noOfUnitsArr[3] *
        allObjects[i].customCorridorSettings.noOfFloors;
    }

    setBuildingNumTwo(twoRoomUnitCount);
  }, [objects]);

  /* get custom settings of selected object with its index */
  const [selectedIndex, setSelectedIndex] = useState();

  const [selectedIndexCustomSettings, setSelectedIndexCustomSettings] =
    useState({
      clusterType: "linear",
      noOfFloors: 18,
      noOfUnitsArr: [4, 0, 2, 6],
      corridorWidth: 5,
      pairDist: 28,
      rectilinearInitialDist: -15,
      slideDist: 0,
    });

  console.log(selectedIndexCustomSettings);

  const getCustomSettings = (index) => {
    if (index !== undefined) {
      const selectedObjAttributesAll = objects.filter((object) => {
        return index == object.key;
      });
      setSelectedIndexCustomSettings(
        selectedObjAttributesAll[0]?.customCorridorSettings
      );
    }
  };
  useEffect(() => {
    getCustomSettings(selectedIndex);
  }, [selectedIndex]);

  // return objects
  return (
    <Suspense fallback={<span>loading...</span>}>
      <div
        className="flex gap-10 justify-between items-center px-20 py-10"
        style={{ height: "92%", width: "100%" }}
      >
        {!editMode && (
          <div className="w-1/2 h-full">
            <AllDesigns
              allSessions={allSessions}
              setCurrentSessionId={setCurrentSessionId}
              handleNewSessionInput={handleNewSessionInput}
              newSession={newSession}
              handleCreateNewSession={handleCreateNewSession}
              currentSessionId={currentSessionId}
            />
          </div>
        )}
        <div className={editMode ? "w-full h-full" : "w-1/2 h-full"}>
          {editMode && !streetView && (
            <Display
              buildingNum={buildingNum}
              buildingNumFive={buildingNumFive}
              buildingNumFour={buildingNumFour}
              buildingNumThree={buildingNumThree}
              buildingNumTwo={buildingNumTwo}
              parkingNum={parkingNum}
              handleClick={handleClick}
              currentSessionId={currentSessionId}
            />
          )}
          {editMode && !streetView && (
            <ComponentsList handleClick={handleClick} />
          )}
          {editMode && !streetView && (
            <CustomUI
              handleSave={handleSave}
              selectedIndexCustomSettings={selectedIndexCustomSettings}
              updateCustomObject={updateCustomObject}
              selectedIndex={selectedIndex}
              addCustom={handleAddCustom}
            />
          )}

          {sunSliderVisible && (
            <SunSlider setTimeOfDay={setTimeOfDay} timeOfDay={timeOfDay} />
          )}

          <Buttons
            handleSunSliderVisible={handleSunSliderVisible}
            handleBuildingHeightLimit={handleBuildingHeightLimit}
            handleCommentVisible={handleCommentVisible}
            handleEditMode={handleEditMode}
            editMode={editMode}
            streetView={streetView}
            handleStreetView={handleStreetView}
            handleSave={handleSave}
            handleDeleteSession={handleDeleteSession}
          />

          <Canvas
            className="rounded-lg border border-gray-300 z-0 "
            flat
            style={{ background: "white" }}
            shadows
            dpr={[1, 2]}
          >
            {streetView && (
              <Sky sunPosition={[100, 200, 100]} distance={10000} />
            )}

            {/*Building height limit indicator  */}
            {heightLimitVisible && (
              <BuildingHeightLimit
                heightLimit={heightLimit}
                setHeightLimit={setHeightLimit}
              />
            )}
            {commentVisible && <Comment />}
            <Lights timeOfDay={timeOfDay} />
            <gridHelper args={[200, 200, "white", "white"]} />
            <Site />

            <AllAnimatedObjects
              setIsDragging={setIsDragging}
              setIsChangingNoOfFloors={setIsChangingNoOfFloors}
              objects={objects}
              removeobjects={removeobjects}
              updateobjects={updateobjects}
              updateobjectsLevels={updateobjectsLevels}
              streetView={streetView}
              setSelectedIndex={setSelectedIndex}
            />

            <CameraControl
              streetView={streetView}
              isDragging={isDragging}
              isChangingNoOfFloors={isChangingNoOfFloors}
              editMode={editMode}
            />

            {!editMode && (
              <GizmoHelper alignment="top-right" margin={[100, 100]}>
                <GizmoViewport labelColor="white" axisHeadScale={1} />
              </GizmoHelper>
            )}
          </Canvas>
        </div>
      </div>
    </Suspense>
  );
}
