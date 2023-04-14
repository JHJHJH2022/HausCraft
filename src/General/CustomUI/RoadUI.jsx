import React, { useState, useEffect } from "react";
export default function RoadUI({
  selectedIndex,
  selectedIndexCustomSettings,
  updateCustomObject,
}) {
  const [formData, setFormData] = useState({
    clusterType: "linear", // linear, rectilinear
    noOfUnitsArr: [0, 0, 0, 0], // number of 5,4,3,2-room units respectively
    noOfFloors: 1,
    corridorWidth: 2.0,
    pairDist: 25,
    slideDist: 0,
    rectilinearInitialDist: -15,
  });

  useEffect(() => {
    if (selectedIndexCustomSettings !== undefined) {
      setFormData(selectedIndexCustomSettings);
    }
  }, [selectedIndexCustomSettings]);

  useEffect(() => {
    // update custom settings by index
    updateCustomObject(selectedIndex, formData);
  }, [formData]);

  function handleChange(event) {
    const { name, value, type } = event.target;

    setFormData((prevFormData) => {
      if (name == "fiveRoom") {
        prevFormData.noOfUnitsArr[0] = parseFloat(value);
        console.log(prevFormData);
      } else if (name == "fourRoom") {
        prevFormData.noOfUnitsArr[1] = parseFloat(value);
        console.log(prevFormData);
      } else if (name == "threeRoom") {
        prevFormData.noOfUnitsArr[2] = parseFloat(value);
        console.log(prevFormData);
      } else if (name == "twoRoom") {
        prevFormData.noOfUnitsArr[3] = parseFloat(value);
        console.log(prevFormData);
      }
      return {
        ...prevFormData,
        [name]: type === "range" ? parseFloat(value) : value,
      };
    });
  }

  return (
    <div className="flex flex-col gap-2 py-3">
      {/* Title */}
      <h1 className="text-accent font-bold py-2 text-xl">Road</h1>
      {/*  form starts from here */}
      {/* connecting pieces in between  */}
      <div className="flex justify-between">
        <p className="text-lg font-bold">Connecting Road</p>
        <div className="flex gap-2">
          <button
            type="button"
            /* onClick={addCustom} */
            className="btn btn-sm btn-outline btn-accent rounded-md"
          >
            Add
          </button>
        </div>
      </div>
      {/* roundabout*/}
      <div className="flex justify-between">
        <p className="text-lg font-bold">Roundabout</p>
        <div className="flex gap-2">
          <button
            type="button"
            /* onClick={addCustom} */
            className="btn btn-sm btn-outline btn-accent rounded-md"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
