import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
  //   persist(
  //     (set) => ({
  //       contextState: [""],
  //       setContextState: (value: string[]) =>
  //         set(() => ({
  //           contextState: value,
  //         })),
  //     }),
  //     {
  //       name: "context-state",
  //       storage: createJSONStorage(() => localStorage),
  //     }
  //   )
);
