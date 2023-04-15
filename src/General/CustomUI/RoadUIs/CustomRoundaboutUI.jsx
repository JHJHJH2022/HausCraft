import React, { useState, useEffect } from "react";
export default function CustomRoundaboutUI({ addCustom }) {
  return (
    <div className="flex justify-between">
      <p className="text-lg font-bold">Roundabout</p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            addCustom("customRoundabout", {});
          }}
          className="btn btn-sm btn-outline btn-accent rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
}
