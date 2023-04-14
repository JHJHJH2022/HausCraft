import React, { useState, useEffect } from "react";
export default function CustomConnectingRoadUI({ addCustom }) {
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
      <label htmlFor="roadType">Road Type</label>

      <div>
        <select
          id="roadType"
          value={formData.roadType}
          onChange={handleChange}
          name="roadType"
          className="select select-ghost w-full max-w-xs"
        >
          <option value="linear">Vehicular Road</option>
          <option value="rectilinear">Pedestrian Road</option>
        </select>
      </div>

      {/* length */}
      <label htmlFor="length">Length : </label>
      <span>{formData.length}</span>

      <input
        type="range"
        onChange={handleChange}
        name="length"
        value={formData.length}
        min={0}
        max={10}
        step={2}
        className="range range-secondary range-xs"
      ></input>

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
