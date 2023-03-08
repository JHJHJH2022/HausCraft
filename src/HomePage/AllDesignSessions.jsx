import DesignSession from "./DesignSession";
import { Link } from "react-router-dom";

export default function AllDesignSessions() {
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
        <DesignSession />
        <DesignSession />
        <DesignSession />
        <DesignSession />
        <DesignSession />
      </div>
      <div className="w-full h-1/6 border border-dashed border-gray-300 p-8 z-0 rounded-lg">
        <h1>+ Create New Design</h1>
      </div>
    </div>
  );
}
