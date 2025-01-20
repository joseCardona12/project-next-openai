import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IContextState {
  contextState: string[];
  setContextState: (value: string[]) => void;
}

export const useContextState = create<IContextState>(
  persist(
    (set) => ({
      contextState: [""],
      setContextState: (value: string[]) => set(() => ({ contextState: value })),
    }),
    {
      name: "contextStateStorage",
      getStorage: () => localStorage,
    }
  )
);
