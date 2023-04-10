import React, { useState, useEffect } from "react";
export default function CorridorUI({
  selectedIndex,
  selectedIndexCustomSettings,
  updateCustomObject,
  addCustom,
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
      let num5 = prevFormData.noOfUnitsArr[0];
      let num4 = prevFormData.noOfUnitsArr[1];
      let num3 = prevFormData.noOfUnitsArr[2];
      let num2 = prevFormData.noOfUnitsArr[3];
      if (name == "fiveRoom") {
        num5 = parseFloat(value);
      } else if (name == "fourRoom") {
        num4 = parseFloat(value);
      } else if (name == "threeRoom") {
        num3 = parseFloat(value);
      } else if (name == "twoRoom") {
        num2 = parseFloat(value);
      }
      return {
        ...prevFormData,
        noOfUnitsArr: [num5, num4, num3, num2],
        [name]: type === "range" ? parseFloat(value) : value,
      };
    });
  }

  return (
    <div className="flex flex-col gap-2 py-3">
      {/* Title */}
      <div className="flex justify-between">
        <h1 className="text-accent font-bold py-2 text-xl">Housing</h1>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={addCustom}
            className="btn btn-sm btn-outline btn-accent rounded-md"
          >
            Add
          </button>
        </div>
      </div>
      {/*  form starts from here */}
      <form>
        <hr class="my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <p className="text-lg font-bold">Basic Settings</p>
        {/* Cluster Type - drop down */}
        <label htmlFor="clusterType">Cluster Type</label>
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

        {/* five room units - range of int (in string form) */}
        <label htmlFor="fiveRoom">Five-room Units : </label>
        <span>{formData.noOfUnitsArr[0]}</span>
        <br />
        <input
          type="range"
          onChange={handleChange}
          name="fiveRoom"
          value={formData.noOfUnitsArr[0]}
          min={0}
          max={10}
          step={2}
          className="range range-secondary range-xs"
        ></input>

        {/* four room units - range of int (in string form) */}
        <label htmlFor="fourRoom">Four-room Units : </label>
        <span>{formData.noOfUnitsArr[1]}</span>
        <br />
        <input
          type="range"
          onChange={handleChange}
          name="fourRoom"
          value={formData.noOfUnitsArr[1]}
          min={0}
          max={10}
          step={2}
          className="range range-secondary range-xs"
        ></input>

        {/* three room units - range of int (in string form) */}
        <label htmlFor="threeRoom">Three-room Units : </label>
        <span>{formData.noOfUnitsArr[2]}</span>
        <br />
        <input
          type="range"
          onChange={handleChange}
          name="threeRoom"
          value={formData.noOfUnitsArr[2]}
          min={0}
          max={10}
          step={2}
          className="range range-secondary range-xs"
        ></input>

        {/* two room units - range of int (in string form) */}
        <label htmlFor="twoRoom">Two-room Units : </label>
        <span>{formData.noOfUnitsArr[3]}</span>
        <br />
        <input
          type="range"
          onChange={handleChange}
          name="twoRoom"
          value={formData.noOfUnitsArr[3]}
          min={0}
          max={10}
          step={2}
          className="range range-secondary range-xs"
        ></input>

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

        <hr class="my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <p className="text-lg font-bold">Advanced Settings</p>

        {/* number of floors - range of int (in string form) */}
        <label htmlFor="corridorWidth">Corridor Width : </label>
        <span>{formData.corridorWidth}</span>
        <br />
        <input
          type="range"
          onChange={handleChange}
          name="corridorWidth"
          value={formData.corridorWidth}
          min={1}
          max={5}
          step={0.1}
          className="range range-secondary range-xs"
        ></input>

        {/* number of floors - range of int (in string form) */}
        <label htmlFor="pairDist">Distance between Units : </label>
        <span>{formData.pairDist}</span>
        <br />
        <input
          type="range"
          onChange={handleChange}
          name="pairDist"
          value={formData.pairDist}
          min={10}
          max={50}
          step={0.1}
          className="range range-secondary range-xs"
        ></input>

        {/* number of floors - range of int (in string form) */}
        <label htmlFor="slideDist">Sliding Distance : </label>
        <span>{formData.slideDist}</span>
        <br />
        <input
          type="range"
          onChange={handleChange}
          name="slideDist"
          value={formData.slideDist}
          min={-30}
          max={30}
          step={0.1}
          className="range range-secondary range-xs"
        ></input>

        {/* number of floors - range of int (in string form) */}
        <label htmlFor="rectilinearInitialDist">Spacing at Turning : </label>
        <span>{formData.rectilinearInitialDist}</span>
        <br />
        <input
          type="range"
          onChange={handleChange}
          name="rectilinearInitialDist"
          value={formData.rectilinearInitialDist}
          min={-50}
          max={0}
          step={0.1}
          className="range range-secondary range-xs"
        ></input>
      </form>
    </div>
  );
}
