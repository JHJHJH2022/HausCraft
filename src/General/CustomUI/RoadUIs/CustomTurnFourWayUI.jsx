import React, { useState, useEffect } from "react";
export default function CustomTurnFourWayUI({ addCustom }) {
  return (
    <div className="flex justify-between">
      <p className="text-lg font-bold">Four-way Turn</p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            addCustom("customTurnFourWay", {});
          }}
          className="btn btn-sm btn-outline btn-accent rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
}
