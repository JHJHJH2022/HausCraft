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
  const [currentSessionId, setCurrentSessionId] = useState("new"); // need to ensure user cannot delete this one!!! OR user will default to an empty page

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
  const [greenRoofNum, setGreenRoofNum] = useState(0);
  const [maxHeight5, setMaxHeight5] = useState(0);
  const [maxHeight4, setMaxHeight4] = useState(0);
  const [maxHeight3, setMaxHeight3] = useState(0);
  const [maxHeight2, setMaxHeight2] = useState(0);
  const [buildingNumInPlan, setBuildingNumInPlan] = useState(0);
  const [amenityChildrenNum, setAmenityChildrenNum] = useState(0);
  const [amenityAdultNum, setAmenityAdultNum] = useState(0);
  const [amenityElderlyNum, setAmenityElderlyNum] = useState(0);

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
      buildingNum:
        buildingNumFour + buildingNumFive + buildingNumThree + buildingNumTwo,
      parkingNum: parkingNum,
    });
    getAll();
  };

  const handleCreateNewSession = async () => {
    await api.createDesignSession(newSession);
    setCurrentSessionId(newSession);
    getAll();
  };
  const handleDeleteSession = async () => {
    await api.deleteDesignSession(currentSessionId);
    setCurrentSessionId("new");
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

  const handleAddCustom = (typology, settings) => {
    addCustom(typology, settings);
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

  /*   calculate total  units */
  /*   calculate total  units */
  /*   calculate total  units */
  /*   calculate total  units */
  /*   calculate total  units */
  /*   calculate total  units */

  /*  const [greenRoofNum, setGreenRoofNum] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0); */

  // custom amenity
  useEffect(() => {
    const allObjects = objects.filter((object) => {
      return object.typology === "customAmenity";
    });

    let childrenCount = 0;
    let adultCount = 0;
    let elderlyCount = 0;

    for (let i = 0; i < allObjects.length; i++) {
      if (allObjects[i].customSettings.customAmenitySettings.children == true) {
        childrenCount += 1;
      }
      if (allObjects[i].customSettings.customAmenitySettings.adult == true) {
        adultCount += 1;
      }
      if (allObjects[i].customSettings.customAmenitySettings.elderly == true) {
        elderlyCount += 1;
      }
    }
    setAmenityChildrenNum(childrenCount);
    setAmenityAdultNum(adultCount);
    setAmenityElderlyNum(elderlyCount);
  }, [objects]);

  // custom carpark
  useEffect(() => {
    const allObjects = objects.filter((object) => {
      return object.typology === "customCarpark";
    });

    let carparkCount = 0;
    let greenRoofCount = 0;

    for (let i = 0; i < allObjects.length; i++) {
      greenRoofCount += 1;
      carparkCount +=
        allObjects[i].customSettings.customCarparkSettings.level * 200;
    }

    setParkingNum(carparkCount);
    setGreenRoofNum(greenRoofCount);
  }, [objects]);

  // calculate total five-room units
  useEffect(() => {
    const allObjects = objects.filter((object) => {
      return object.typology === "customCorridor";
    });

    let fiveRoomUnitCount = 0;
    let maxLevels5 = 0;

    for (let i = 0; i < allObjects.length; i++) {
      fiveRoomUnitCount +=
        allObjects[i].customSettings.customCorridorSettings.noOfUnitsArr[0] *
        allObjects[i].customSettings.customCorridorSettings.noOfFloors;
      if (
        allObjects[i].customSettings.customCorridorSettings.noOfFloors >
          maxLevels5 ==
        true
      ) {
        maxLevels5 =
          allObjects[i].customSettings.customCorridorSettings.noOfFloors;
      }
    }
    setMaxHeight5(maxLevels5);
    setBuildingNumFive(fiveRoomUnitCount);
  }, [objects]);

  // calculate total four-room units
  useEffect(() => {
    const allObjects = objects.filter((object) => {
      return object.typology === "customCorridor";
    });

    let fourRoomUnitCount = 0;
    let maxLevels4 = 0;

    for (let i = 0; i < allObjects.length; i++) {
      fourRoomUnitCount +=
        allObjects[i].customSettings.customCorridorSettings.noOfUnitsArr[1] *
        allObjects[i].customSettings.customCorridorSettings.noOfFloors;
      if (
        allObjects[i].customSettings.customCorridorSettings.noOfFloors >
          maxLevels4 ==
        true
      ) {
        maxLevels4 =
          allObjects[i].customSettings.customCorridorSettings.noOfFloors;
      }
    }
    setMaxHeight4(maxLevels4);

    setBuildingNumFour(fourRoomUnitCount);
  }, [objects]);

  // calculate total three-room units
  useEffect(() => {
    const allObjects = objects.filter((object) => {
      return object.typology === "customCorridor";
    });

    let threeRoomUnitCount = 0;
    let maxLevels3 = 0;

    for (let i = 0; i < allObjects.length; i++) {
      threeRoomUnitCount +=
        allObjects[i].customSettings.customCorridorSettings.noOfUnitsArr[2] *
        allObjects[i].customSettings.customCorridorSettings.noOfFloors;
      if (
        allObjects[i].customSettings.customCorridorSettings.noOfFloors >
          maxLevels3 ==
        true
      ) {
        maxLevels3 =
          allObjects[i].customSettings.customCorridorSettings.noOfFloors;
      }
    }
    setMaxHeight3(maxLevels3);

    setBuildingNumThree(threeRoomUnitCount);
  }, [objects]);

  // calculate total two-room units
  useEffect(() => {
    const allObjects = objects.filter((object) => {
      return object.typology === "customCorridor";
    });

    let twoRoomUnitCount = 0;
    let maxLevels2 = 0;

    for (let i = 0; i < allObjects.length; i++) {
      twoRoomUnitCount +=
        allObjects[i].customSettings.customCorridorSettings.noOfUnitsArr[3] *
        allObjects[i].customSettings.customCorridorSettings.noOfFloors;
      if (
        allObjects[i].customSettings.customCorridorSettings.noOfFloors >
          maxLevels2 ==
        true
      ) {
        maxLevels2 =
          allObjects[i].customSettings.customCorridorSettings.noOfFloors;
      }
    }
    setMaxHeight2(maxLevels2);

    setBuildingNumTwo(twoRoomUnitCount);
  }, [objects]);

  // calculate total building num in plan
  useEffect(() => {
    const allObjects = objects.filter((object) => {
      return object.typology === "customCorridor";
    });

    let totalNumPlan = 0;

    for (let i = 0; i < allObjects.length; i++) {
      let sum = allObjects[
        i
      ].customSettings.customCorridorSettings.noOfUnitsArr.reduce(
        (partialSum, a) => partialSum + a,
        0
      );
      totalNumPlan += sum;
    }

    setBuildingNumInPlan(totalNumPlan);
  }, [objects]);

  /*  end of  calculate total  units */
  /*  end of  calculate total  units */
  /*  end of  calculate total  units */
  /*  end of  calculate total  units */
  /*  end of  calculate total  units */
  /*  end of  calculate total  units */

  /* get custom settings of selected object with its index */

  const defaultSettings = {
    corridor: {
      clusterType: "linear",
      noOfFloors: 18,
      noOfUnitsArr: [4, 0, 2, 6],
      corridorWidth: 5,
      pairDist: 28,
      rectilinearInitialDist: -15,
      slideDist: 0,
    },
    connectingRoad: {
      length: 10,
      roadType: "vehicularRoad",
    },
    amenity: { children: false, adult: false, elderly: false, shape: "A" },
    carpark: { roof: "A", ground: "A", length: 50, level: 10 },
    landscape: {
      shape: "A",
      length: 10,
      width: 10,
      radius: 10,
      density: 0.5,
      sizeVariation: 0.5,
      displacement: 0.5,
    },
  };

  const [selectedInfo, setSelectedInfo] = useState();

  /* for custom corridor */
  const [selectedIndexCustomSettings, setSelectedIndexCustomSettings] =
    useState(defaultSettings.corridor);

  const getCustomSettings = (info) => {
    if (info != undefined) {
      const selectedObjAttributesAll = objects.filter((object) => {
        return info.index == object.key;
      });
      setSelectedIndexCustomSettings(
        selectedObjAttributesAll[0]?.customSettings.customCorridorSettings
      );
    }
  };
  useEffect(() => {
    if (selectedInfo?.typology == "customCorridor") {
      getCustomSettings(selectedInfo);
    }
  }, [selectedInfo]);

  /* for custom connecting road */
  const [
    selectedIndexCustomConnectingRoadSettings,
    setSelectedIndexCustomConnectingRoadSettings,
  ] = useState(defaultSettings.connectingRoad);

  const getCustomSettingsConnectingRoad = (info) => {
    if (info != undefined) {
      const selectedObjAttributesAll = objects.filter((object) => {
        return info.index == object.key;
      });
      setSelectedIndexCustomConnectingRoadSettings(
        selectedObjAttributesAll[0]?.customSettings.customConnectingRoadSettings
      );
    }
  };
  useEffect(() => {
    if (selectedInfo?.typology == "customConnectingRoad") {
      getCustomSettingsConnectingRoad(selectedInfo);
    }
  }, [selectedInfo]);

  /* for custom amenity */
  const [
    selectedIndexCustomAmenitySettings,
    setSelectedIndexCustomAmenitySettings,
  ] = useState(defaultSettings.amenity);

  const getCustomSettingsAmenity = (info) => {
    if (info != undefined) {
      const selectedObjAttributesAll = objects.filter((object) => {
        return info.index == object.key;
      });

      setSelectedIndexCustomAmenitySettings(
        selectedObjAttributesAll[0]?.customSettings.customAmenitySettings
      );
    }
  };
  useEffect(() => {
    if (selectedInfo?.typology == "customAmenity") {
      getCustomSettingsAmenity(selectedInfo);
    }
  }, [selectedInfo]);

  /* for custom carpark */
  const [
    selectedIndexCustomCarparkSettings,
    setSelectedIndexCustomCarparkSettings,
  ] = useState(defaultSettings.carpark);

  const getCustomSettingsCarpark = (info) => {
    if (info != undefined) {
      const selectedObjAttributesAll = objects.filter((object) => {
        return info.index == object.key;
      });

      setSelectedIndexCustomCarparkSettings(
        selectedObjAttributesAll[0]?.customSettings.customCarparkSettings
      );
    }
  };
  useEffect(() => {
    if (selectedInfo?.typology == "customCarpark") {
      getCustomSettingsCarpark(selectedInfo);
    }
  }, [selectedInfo]);

  console.log(objects);

  /* for custom landscape */
  const [
    selectedIndexCustomLandscapeSettings,
    setSelectedIndexCustomLandscapeSettings,
  ] = useState(defaultSettings.landscape);

  const getCustomSettingsLandscape = (info) => {
    if (info != undefined) {
      const selectedObjAttributesAll = objects.filter((object) => {
        return info.index == object.key;
      });

      setSelectedIndexCustomLandscapeSettings(
        selectedObjAttributesAll[0]?.customSettings.customLandscapeSettings
      );
    }
  };
  useEffect(() => {
    if (selectedInfo?.typology == "customLandscape") {
      getCustomSettingsLandscape(selectedInfo);
    }
  }, [selectedInfo]);

  console.log(objects);

  // return objects
  return (
    <Suspense fallback={<span>loading...</span>}>
      <div
        className="flex gap-10 justify-between items-center px-20 py-10"
        style={{ height: "92%", width: "100%" }}
      >
        {!editMode && (
          <div className="w-1/4 h-full">
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
        <div className={editMode ? "w-full h-full" : "w-3/4 h-full"}>
          {editMode && !streetView && (
            <Display
              buildingNum={buildingNum}
              buildingNumFive={buildingNumFive}
              buildingNumFour={buildingNumFour}
              buildingNumThree={buildingNumThree}
              buildingNumTwo={buildingNumTwo}
              parkingNum={parkingNum}
              amenityChildrenNum={amenityChildrenNum}
              amenityAdultNum={amenityAdultNum}
              amenityElderlyNum={amenityElderlyNum}
              maxHeight2={maxHeight2}
              maxHeight3={maxHeight3}
              maxHeight4={maxHeight4}
              maxHeight5={maxHeight5}
              buildingNumInPlan={buildingNumInPlan}
              handleClick={handleClick}
              currentSessionId={currentSessionId}
            />
          )}
          {/*  {editMode && !streetView && (
            <ComponentsList handleClick={handleClick} />
          )} */}
          {editMode && !streetView && (
            <CustomUI
              handleSave={handleSave}
              selectedIndexCustomSettings={selectedIndexCustomSettings}
              selectedIndexCustomConnectingRoadSettings={
                selectedIndexCustomConnectingRoadSettings
              }
              selectedIndexCustomAmenitySettings={
                selectedIndexCustomAmenitySettings
              }
              selectedIndexCustomCarparkSettings={
                selectedIndexCustomCarparkSettings
              }
              selectedIndexCustomLandscapeSettings={
                selectedIndexCustomLandscapeSettings
              }
              updateCustomObject={updateCustomObject}
              selectedInfo={selectedInfo}
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
            {/*  <gridHelper args={[200, 200, "white", "white"]} />
             */}
            <Site />

            <AllAnimatedObjects
              setIsDragging={setIsDragging}
              setIsChangingNoOfFloors={setIsChangingNoOfFloors}
              objects={objects}
              removeobjects={removeobjects}
              updateobjects={updateobjects}
              updateobjectsLevels={updateobjectsLevels}
              streetView={streetView}
              setSelectedInfo={setSelectedInfo}
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
