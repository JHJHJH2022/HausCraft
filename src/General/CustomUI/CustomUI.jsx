import React, { useState, useEffect } from "react";
import CorridorUI from "./CorridorUI";
import CarparkUI from "./CarparkUI";
import AmenityUI from "./AmenityUI";
import LandscapeUI from "./LandscapeUI";
import RoadUI from "./RoadUI.jsx";

export default function CustomUI({
  selectedIndexCustomSettings,
  selectedIndexCustomConnectingRoadSettings,
  selectedIndexCustomAmenitySettings,
  selectedIndexCustomCarparkSettings,
  selectedIndexCustomLandscapeSettings,
  updateCustomObject,
  selectedInfo,
  addCustom,
}) {
  const [currentTab, setCurrentTab] = useState("housing");

  return (
    <div className="scrollHidden w-80 absolute z-40 p-5 bg-neutral/80 top-36 rounded-lg m-5 text-white overflow-y-scroll h-3/4 right-20">
      <div className="flex justify-between text-xs font-medium text-center text-gray-500 ">
        <div>
          <a
            href="#"
            className={
              currentTab === "road"
                ? "inline-block px-2 py-2 text-white bg-accent rounded-lg active"
                : "inline-block px-2 py-2 rounded-lg hover:text-neutral hover:bg-gray-100 "
            }
            aria-current="page"
            onClick={() => {
              setCurrentTab("road");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="#"
            className={
              currentTab === "housing"
                ? "inline-block px-2 py-2 text-white bg-accent rounded-lg active"
                : "inline-block px-2 py-2 rounded-lg hover:text-neutral hover:bg-gray-100 "
            }
            aria-current="page"
            onClick={() => {
              setCurrentTab("housing");
            }}
          >
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="#"
            className={
              currentTab === "carpark"
                ? "inline-block px-2 py-2 text-white bg-accent rounded-lg active"
                : "inline-block px-2 py-2 rounded-lg hover:text-neutral hover:bg-gray-100 "
            }
            aria-current="page"
            onClick={() => {
              setCurrentTab("carpark");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="#"
            className={
              currentTab === "amenity"
                ? "inline-block px-2 py-2 text-white bg-accent rounded-lg active"
                : "inline-block px-2 py-2 rounded-lg hover:text-neutral hover:bg-gray-100 "
            }
            aria-current="page"
            onClick={() => {
              setCurrentTab("amenity");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
          </a>
        </div>
        <div>
          <a
            href="#"
            className={
              currentTab === "landscape"
                ? "inline-block px-2 py-2 text-white bg-accent rounded-lg active"
                : "inline-block px-2 py-2 rounded-lg hover:text-neutral hover:bg-gray-100 "
            }
            aria-current="page"
            onClick={() => {
              setCurrentTab("landscape");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
              />
            </svg>
          </a>
        </div>
      </div>

      {currentTab == "road" && (
        <RoadUI
          selectedIndexCustomConnectingRoadSettings={
            selectedIndexCustomConnectingRoadSettings
          }
          updateCustomObject={updateCustomObject}
          selectedInfo={selectedInfo}
          addCustom={addCustom}
        />
      )}
      {currentTab == "housing" && (
        <CorridorUI
          selectedIndexCustomSettings={selectedIndexCustomSettings}
          updateCustomObject={updateCustomObject}
          selectedInfo={selectedInfo}
          addCustom={addCustom}
        />
      )}
      {currentTab == "carpark" && (
        <CarparkUI
          selectedIndexCustomCarparkSettings={
            selectedIndexCustomCarparkSettings
          }
          updateCustomObject={updateCustomObject}
          selectedInfo={selectedInfo}
          addCustom={addCustom}
        />
      )}
      {currentTab == "amenity" && (
        <AmenityUI
          selectedIndexCustomAmenitySettings={
            selectedIndexCustomAmenitySettings
          }
          updateCustomObject={updateCustomObject}
          selectedInfo={selectedInfo}
          addCustom={addCustom}
        />
      )}
      {currentTab == "landscape" && (
        <LandscapeUI
          selectedIndexCustomLandscapeSettings={
            selectedIndexCustomLandscapeSettings
          }
          updateCustomObject={updateCustomObject}
          selectedInfo={selectedInfo}
          addCustom={addCustom}
        />
      )}
    </div>
  );
}
