import { useEffect, useState } from "react";
import * as api from "../NeighbourhoodPage/api/modifyDesignSessions";

export default function DesignSession({ id, setCurrentSessionId }) {
  const handleClick = (e) => {
    const id = e.target.id;
    setCurrentSessionId(id);
  };

  return (
    <div className="flex gap-10 border-b border-gray-300 p-8 z-0 ">
      <div className="bg-black/20 rounded-md p-2 w-1/2">
        <img
          id={id}
          onClick={handleClick}
          className="cursor-pointer"
          src="design1.jpg"
          alt="Design SnapShot"
        />
      </div>
      <div className="w-1/2">
        <h1 className="cursor-pointer" id={id} onClick={handleClick}>
          {id}
        </h1>
        <p>------------------------------------</p>
        <p>------------------------------------</p>
        <p>------------------------------------</p>
      </div>
    </div>
  );
}
