import React, { useState, useEffect } from "react";
export default function AmenityUI({
  selectedInfo,
  updateCustomObject,
  addCustom,
  selectedIndexCustomCarparkSettings,
}) {
  const [formData, setFormData] = useState({
    roof: "A",
    ground: "A",
    length: 50,
    level: 10,
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

  console.log(formData);

  useEffect(() => {
    if (selectedIndexCustomCarparkSettings !== undefined) {
      setFormData(selectedIndexCustomCarparkSettings);
    }
  }, [selectedIndexCustomCarparkSettings]);

  useEffect(() => {
    // update custom settings by index
    if (selectedInfo?.typology === "customCarpark") {
      updateCustomObject(selectedInfo?.index, selectedInfo?.typology, formData);
    }
  }, [formData]);

  return (
    <div className="flex flex-col gap-2 py-3">
      {/* Title */}
      <div className="flex justify-between">
        <h1 className="text-accent font-bold py-2 text-xl">Car Park</h1>
        <div className="flex gap-2">
          <button
            id={"customCarpark"}
            type="button"
            onClick={() => {
              addCustom("customCarpark", formData);
            }}
            className="btn btn-sm btn-outline btn-accent rounded-md"
          >
            Add
          </button>
        </div>
      </div>
      {/*  form starts from here */}
      <form>
        <hr class="my-3 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

        {/* all settings */}
        <p className="text-lg font-bold">Settings</p>
        <br />
        {/* roof */}
        <div>
          <label htmlFor="roof" className="label cursor-pointer">
            Roof Type
          </label>

          <select
            id="roof"
            value={formData.roof}
            onChange={handleChange}
            name="roof"
            className="select select-ghost w-full max-w-xs"
          >
            <option value="A">Type A</option>
            <option value="B">Type B</option>
            <option value="C">Type C</option>
          </select>
        </div>
        {/* ground */}
        <div>
          <label htmlFor="ground" className="label cursor-pointer">
            Ground Floor Type
          </label>

          <select
            id="ground"
            value={formData.ground}
            onChange={handleChange}
            name="ground"
            className="select select-ghost w-full max-w-xs"
          >
            <option value="A">Type A</option>
            <option value="B">Type B</option>
          </select>
        </div>

        {/* length */}
        <label htmlFor="length" className="label cursor-pointer">
          Length : <span>{formData.length}</span>
        </label>
        <input
          type="range"
          onChange={handleChange}
          value={formData.length}
          name="length"
          min={10}
          max={500}
          step={10}
          className="range range-secondary range-xs"
        ></input>

        {/* level */}
        <label htmlFor="level" className="label cursor-pointer">
          Number of Floors : <span>{formData.level}</span>
        </label>
        <input
          type="range"
          onChange={handleChange}
          value={formData.level}
          name="level"
          min={1}
          max={50}
          step={1}
          className="range range-secondary range-xs"
        ></input>
      </form>
    </div>
  );
}
