import React, { useState, useEffect } from "react";
export default function AmenityUI({}) {
  const [formData, setFormData] = useState({
    children: false,
    adult: false,
    elderly: false,
    shape: "A",
  });

  console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="flex flex-col gap-2 py-3">
      {/* Title */}
      <div className="flex justify-between">
        <h1 className="text-accent font-bold py-2 text-xl">Amenity</h1>
        <div className="flex gap-2">
          <button
            id={"customAmenity"}
            type="button"
            onClick={() => {
              addCustom("customAmenity", formData);
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

        {/* PART I: types of activities */}
        <p className="text-lg font-bold">Types of Activities</p>
        {/* children */}
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Children Playground</span>
            <input
              type="checkbox"
              className="toggle"
              name="children"
              value={formData.children}
              onChange={handleChange}
            />
          </label>
        </div>
        {/* Adult */}
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Adult Fitness Station</span>
            <input
              type="checkbox"
              className="toggle"
              name="adult"
              value={formData.adult}
              onChange={handleChange}
            />
          </label>
        </div>
        {/* Elderly */}
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Elderly Fitness Station</span>
            <input
              type="checkbox"
              className="toggle"
              name="elderly"
              value={formData.elderly}
              onChange={handleChange}
            />
          </label>
        </div>

        <br />

        {/* PART I: types of activities */}
        <p className="text-lg font-bold">Type of Base Shape</p>
        {/*  <label htmlFor="clusterType">Cluster Type</label> */}
        <br />
        <div>
          <select
            id="shape"
            value={formData.shape}
            onChange={handleChange}
            name="shape"
            className="select select-ghost w-full max-w-xs"
          >
            <option value="A">Shape A</option>
            <option value="B">Shape B</option>
          </select>
        </div>
      </form>
    </div>
  );
}
