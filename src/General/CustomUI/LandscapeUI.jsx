import React, { useState, useEffect } from "react";
export default function LandscapeUI({
  addCustom,
  selectedInfo,
  updateCustomObject,

  selectedIndexCustomLandscapeSettings,
}) {
  const [formData, setFormData] = useState({
    shape: "A",
    length: 10,
    width: 10,
    radius: 10,
    density: 0.5,
    sizeVariation: 0.5,
    displacement: 0.5,
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
    if (selectedIndexCustomLandscapeSettings !== undefined) {
      setFormData(selectedIndexCustomLandscapeSettings);
    }
  }, [selectedIndexCustomLandscapeSettings]);

  useEffect(() => {
    // update custom settings by index
    if (selectedInfo?.typology === "customLandscape") {
      updateCustomObject(selectedInfo?.index, selectedInfo?.typology, formData);
    }
  }, [formData]);

  return (
    <div className="flex flex-col gap-2 py-3">
      {/* Title */}
      <div className="flex justify-between">
        <h1 className="text-accent font-bold py-2 text-xl">Landscape</h1>
        <div className="flex gap-2">
          <button
            id={"customLandscape"}
            type="button"
            onClick={() => {
              addCustom("customLandscape", formData);
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

        {/* shape */}
        <div>
          <label htmlFor="shape" className="label cursor-pointer">
            Type of Base Shape
          </label>

          <select
            id="shape"
            value={formData.shape}
            onChange={handleChange}
            name="shape"
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
          min={2}
          max={50}
          step={1}
          className="range range-secondary range-xs"
        ></input>
        {/* width */}
        <label htmlFor="width" className="label cursor-pointer">
          Width : <span>{formData.width}</span>
        </label>
        <input
          type="range"
          onChange={handleChange}
          value={formData.width}
          name="width"
          min={2}
          max={50}
          step={1}
          className="range range-secondary range-xs"
        ></input>
        {/* radius */}
        <label htmlFor="radius" className="label cursor-pointer">
          Radius : <span>{formData.radius}</span>
        </label>
        <input
          type="range"
          onChange={handleChange}
          value={formData.radius}
          name="radius"
          min={2}
          max={50}
          step={1}
          className="range range-secondary range-xs"
        ></input>
        {/* density */}
        <label htmlFor="density" className="label cursor-pointer">
          Density : <span>{formData.density}</span>
        </label>
        <input
          type="range"
          onChange={handleChange}
          value={formData.density}
          name="density"
          min={0.1}
          max={1}
          step={0.1}
          className="range range-secondary range-xs"
        ></input>

        {/* sizeVariation */}
        <label htmlFor="sizeVariation" className="label cursor-pointer">
          Size Variation : <span>{formData.sizeVariation}</span>
        </label>
        <input
          type="range"
          onChange={handleChange}
          value={formData.sizeVariation}
          name="sizeVariation"
          min={0.1}
          max={1}
          step={0.1}
          className="range range-secondary range-xs"
        ></input>

        {/* displacement */}
        <label htmlFor="displacement" className="label cursor-pointer">
          displacement of Displacement :<span>{formData.displacement}</span>
        </label>
        <input
          type="range"
          onChange={handleChange}
          value={formData.displacement}
          name="displacement"
          min={0.1}
          max={1}
          step={0.1}
          className="range range-secondary range-xs"
        ></input>
      </form>
    </div>
  );
}
