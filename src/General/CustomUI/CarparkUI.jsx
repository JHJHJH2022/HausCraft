import React, { useState, useEffect } from "react";
export default function CarparkUI({
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
      <h1 className="text-accent font-bold py-2 text-xl">Carpark Component</h1>
      {/*  form starts from here */}
      <form>
        <hr class="my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <p className="text-lg font-bold">Basic Settings</p>
        {/* Cluster Type - drop down */}
        <label htmlFor="clusterType">Roof Type</label>
        <br />
        <div>
          <select
            id="clusterType"
            value={formData.clusterType}
            onChange={handleChange}
            name="clusterType"
            className="select select-ghost w-full max-w-xs"
          >
            <option value="linear">Linear Cluster</option>
            <option value="rectilinear">Rectilinear Cluster</option>
          </select>
        </div>
        {/* Cluster Type - drop down */}
        <label htmlFor="clusterType">Ground Floor Type</label>
        <br />
        <div>
          <select
            id="clusterType"
            value={formData.clusterType}
            onChange={handleChange}
            name="clusterType"
            className="select select-ghost w-full max-w-xs"
          >
            <option value="linear">Linear Cluster</option>
            <option value="rectilinear">Rectilinear Cluster</option>
          </select>
        </div>

        {/* number of floors - range of int (in string form) */}
        <label htmlFor="noOfFloors">Number of Floors : </label>
        <span>{formData.noOfFloors}</span>
        <br />
        <input
          type="range"
          onChange={handleChange}
          name="noOfFloors"
          value={formData.noOfFloors}
          min={1}
          max={50}
          step={1}
          className="range range-secondary range-xs"
        ></input>
      </form>
    </div>
  );
}
