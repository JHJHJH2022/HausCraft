import React, { useState, useEffect } from "react";
export default function CustomConnectingRoadUI({
  selectedInfo,
  updateCustomObject,
  addCustom,
  selectedIndexCustomConnectingRoadSettings,
}) {
  const [formData, setFormData] = useState({
    length: 10,
    roadType: "vehicularRoad",
  });

  function handleChange(event) {
    const { name, value, type } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "range" ? parseFloat(value) : value,
      };
    });
  }

  useEffect(() => {
    if (selectedIndexCustomConnectingRoadSettings !== undefined) {
      setFormData(selectedIndexCustomConnectingRoadSettings);
    }
  }, [selectedIndexCustomConnectingRoadSettings]);

  useEffect(() => {
    // update custom settings by index
    if (selectedInfo?.typology === "customConnectingRoad") {
      updateCustomObject(selectedInfo?.index, selectedInfo?.typology, formData);
    }
  }, [formData]);

  return (
    <div className="flex flex-col gap-2 py-3">
      {/*  form starts from here */}
      {/* connecting pieces in between  */}
      <div className="flex justify-between">
        <p className="text-lg font-bold">Connecting Road</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              addCustom("customConnectingRoad", formData);
            }}
            className="btn btn-sm btn-outline btn-accent rounded-md"
          >
            Add
          </button>
        </div>
      </div>
      {/* roadType*/}

      <div>
        <label htmlFor="roadType" className="label cursor-pointer">
          Road Type
        </label>

        <select
          id="roadType"
          value={formData.roadType}
          onChange={handleChange}
          name="roadType"
          className="select select-ghost w-full max-w-xs"
        >
          <option value="vehicularRoad">Vehicular Road</option>
          <option value="pedestrianRoad">Pedestrian Road</option>
        </select>
      </div>

      {/* length */}
      <label htmlFor="length" className="label cursor-pointer">
        Length : <span>{formData.length}</span>
      </label>

      <input
        type="range"
        onChange={handleChange}
        name="length"
        value={formData.length}
        min={1}
        max={300}
        step={1}
        className="range range-secondary range-xs"
      ></input>
    </div>
  );
}
