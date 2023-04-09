import React, { useState, useEffect } from "react";
export default function CustomComponentsUI({
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
    <div className="scrollHidden w-80 absolute z-40 p-5 bg-black/30 top-36 rounded-lg m-5 text-white overflow-y-scroll h-3/4 right-20 transition duration-150 ease-in-out  hover:bg-secondary">
      {/* button id must be same as typology in useStore! */}

      <div className="flex flex-col gap-2 py-3">
        <h1 className="font-bold py-2 text-xl">Custom Components : Corridor</h1>
        {/*  form starts from here */}
        <form>
          <hr class="my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          <p className="text-lg font-bold">Basic Settings</p>
          {/* Cluster Type - drop down */}
          <label htmlFor="clusterType">Cluster Type</label>
          <br />
          <div class="mb-3 xl:w-96 text-black">
            <select
              id="clusterType"
              value={formData.clusterType}
              onChange={handleChange}
              name="clusterType"
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
            className="w-full"
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
            className="w-full"
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
            className="w-full"
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
            className="w-full"
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
            className="w-full"
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
            className="w-full"
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
            className="w-full"
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
            className="w-full"
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
            className="w-full"
          ></input>
        </form>

        <button
          type="button"
          class="inline-block rounded bg-secondary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-secondary-700 transition duration-150 ease-in-out hover:bg-secondary-accent-100 focus:bg-secondary-accent-100 focus:outline-none focus:ring-0 active:bg-secondary-accent-200 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
