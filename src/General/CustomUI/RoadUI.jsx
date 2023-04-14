import CustomConnectingRoadUI from "./RoadUIs/CustomConnectingRoadUI";

export default function RoadUI({
  selectedInfo,
  updateCustomObject,
  addCustom,
  selectedIndexCustomConnectingRoadSettings,
}) {
  return (
    <CustomConnectingRoadUI
      addCustom={addCustom}
      selectedInfo={selectedInfo}
      updateCustomObject={updateCustomObject}
      selectedIndexCustomConnectingRoadSettings={
        selectedIndexCustomConnectingRoadSettings
      }
    />
  );
}
