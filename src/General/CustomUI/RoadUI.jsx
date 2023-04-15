import CustomConnectingRoadUI from "./RoadUIs/CustomConnectingRoadUI";
import CustomRoundaboutUI from "./RoadUIs/CustomRoundaboutUI";
import CustomTurnTwoWayUI from "./RoadUIs/CustomTurnTwoWayUI";
import CustomTurnThreeWayUI from "./RoadUIs/CustomTurnThreeWayUI";

export default function RoadUI({
  selectedInfo,
  updateCustomObject,
  addCustom,
  selectedIndexCustomConnectingRoadSettings,
}) {
  return (
    <div className="flex flex-col gap-2 py-3">
      {/* Title */}
      <h1 className="text-accent font-bold py-2 text-xl">Road</h1>
      {/*  form starts from here */}
      {/* connecting pieces in between  */}

      <CustomConnectingRoadUI
        addCustom={addCustom}
        selectedInfo={selectedInfo}
        updateCustomObject={updateCustomObject}
        selectedIndexCustomConnectingRoadSettings={
          selectedIndexCustomConnectingRoadSettings
        }
      />
      <br />
      <CustomRoundaboutUI
        addCustom={addCustom}
        selectedInfo={selectedInfo}
        updateCustomObject={updateCustomObject}
        selectedIndexCustomConnectingRoadSettings={
          selectedIndexCustomConnectingRoadSettings
        }
      />
      <br />
      <CustomTurnTwoWayUI
        addCustom={addCustom}
        selectedInfo={selectedInfo}
        updateCustomObject={updateCustomObject}
        selectedIndexCustomConnectingRoadSettings={
          selectedIndexCustomConnectingRoadSettings
        }
      />
      <br />
      <CustomTurnThreeWayUI
        addCustom={addCustom}
        selectedInfo={selectedInfo}
        updateCustomObject={updateCustomObject}
        selectedIndexCustomConnectingRoadSettings={
          selectedIndexCustomConnectingRoadSettings
        }
      />
    </div>
  );
}
