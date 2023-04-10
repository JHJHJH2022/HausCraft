import { useEffect, useState } from "react";
import DesignSession from "./DesignSession";
import { Link } from "react-router-dom";
import * as api from "../NeighbourhoodPage/api/modifyDesignSessions";
import AllDesignSessions from "./AllDesignSessions";

export default function AllDesigns({
  setCurrentSessionId,
  newSession,
  handleNewSessionInput,
  handleCreateNewSession,
  allSessions,
  currentSessionId,
}) {
  return (
    <div className="h-full flex flex-col gap-5">
      <div className="flex felx-col items-center">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Link>

        <h1 className="text-xl  pl-3">All Neighbourhood Designs</h1>
      </div>
      <div
        className="scroll flex flex-col justify-start gap-3 
    h-5/6 overflow-y-auto pr-5"
      >
        <AllDesignSessions
          setCurrentSessionId={setCurrentSessionId}
          allSessions={allSessions}
          currentSessionId={currentSessionId}
        />
      </div>

      <div className="flex items-center gap-10 w-full h-1/6 border border-dashed border-gray-300 p-8 z-0 rounded-lg">
        <form>
          <label>
            <input
              type="text"
              className="input input-bordered input-white w-full max-w-xs"
              placeholder="New Design..."
              value={newSession}
              onChange={handleNewSessionInput}
            />
          </label>
        </form>
        <div className="btn btn-xl btn-outline btn-white">
          <button onClick={handleCreateNewSession}>Create New Design</button>
        </div>
      </div>
    </div>
  );
}
