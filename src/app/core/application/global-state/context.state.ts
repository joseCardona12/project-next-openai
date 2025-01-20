import { create } from "zustand";

export interface IContextState {
  contextState: string[];
  setContextState: (value: string[]) => void;
}

export const useContextState = create<IContextState>()(
  (set) => ({
    contextState: [],
    setContextState: (value: string[]) =>
      set(() => ({
        contextState: value,
      })),
  })
);
