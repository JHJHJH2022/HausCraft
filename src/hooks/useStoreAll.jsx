import { create } from "zustand";
import { nanoid } from "nanoid";

export const useStoreAll = create((set) => ({
  objects: [
    {
      key: "1",
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      typology: "buildingIndiv",
      levels: 1,
      unitsPerLevel: 2,
      totalUnits: 2,
    },
  ],

  addobjects: (typology) => {
    set((prev) => ({
      objects: [
        ...prev.objects,
        {
          key: nanoid(),
          position: [0, 0, 0],
          typology: typology,
          levels: 1,
          unitsPerLevel: 2,
          totalUnits: 2,
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
}));
