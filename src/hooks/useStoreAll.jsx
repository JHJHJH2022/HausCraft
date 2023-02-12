import { create } from "zustand";
import { nanoid } from "nanoid";

export const useStoreAll = create((set) => ({
  // button id must be same as typology in useStore!
  objects: [],

  addobjects: (typology) => {
    let noOfUnitsPerLevel = 0;
    if (typology === "cluster1") {
      noOfUnitsPerLevel = 10;
    } else if (typology === "cluster2") {
      noOfUnitsPerLevel = 8;
    } else if (typology === "buildingIndiv") {
      noOfUnitsPerLevel = 2;
    } else if (typology === "carpark") {
      noOfUnitsPerLevel = 80;
    }

    set((prev) => ({
      objects: [
        ...prev.objects,
        {
          key: nanoid(),
          position: [0, 0, 0],
          rotation: [0, 0, 0],
          typology: typology,
          levels: 1,
          unitsPerLevel: noOfUnitsPerLevel,
        },
      ],
    }));
  },

  removeobjects: (index) => {
    set((prev) => ({
      objects: prev.objects.filter((object) => {
        return index !== object.key;
      }),
    }));
  },

  updateobjects: (index, newPos) => {
    set((prev) => ({
      objects: prev.objects.map((object) => {
        if (index === object.key) {
          object.position = newPos;
        }
        return object;
      }),
    }));
  },

  updateobjectsLevels: (index, newLevels) => {
    set((prev) => ({
      objects: prev.objects.map((object) => {
        if (index === object.key) {
          object.levels = newLevels;
        }
        return object;
      }),
    }));
  },
}));
