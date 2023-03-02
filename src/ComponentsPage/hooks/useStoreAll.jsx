import { create } from "zustand";
import { nanoid } from "nanoid";

export const useStoreAll = create((set) => ({
  points: [],

  addpoint: (pos) => {
    set((prev) => ({
      points: [
        ...prev.points,
        {
          key: nanoid(),
          position: pos,
          /* position: pos, */
        },
      ],
    }));
  },

  removepoints: (index) => {
    set((prev) => ({
      points: prev.points.filter((object) => {
        return index !== object.key;
      }),
    }));
  },

  updatepoints: (index, newPos) => {
    set((prev) => ({
      points: prev.points.map((object) => {
        if (index === object.key) {
          object.position = newPos;
        }
        return object;
      }),
    }));
  },

  setallpoints: (points) => {
    set({ points });
  },
}));
