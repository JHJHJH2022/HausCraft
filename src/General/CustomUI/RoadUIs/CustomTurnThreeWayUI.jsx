import React, { useState, useEffect } from "react";
export default function CustomTurnThreeWayUI({ addCustom }) {
  return (
    <div className="flex justify-between">
      <p className="text-lg font-bold">Three-way Turn</p>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            addCustom("customTurnThreeWay", {});
          }}
          className="btn btn-sm btn-outline btn-accent rounded-md"
        >
          Add
        </button>
      </div>
    </div>
  );
}
