import { create } from "zustand";
import { nanoid } from "nanoid";

export const useStore = create((set) => ({
  buildings: [
    {
      key: "1",
      pos: [0, 0, 0],
    },
  ],
  addbuildings: (x, y, z) => {
    set((prev) => ({
      buildings: [...prev.buildings, { key: nanoid(), pos: [x, y, z] }],
    }));
  },
}));
