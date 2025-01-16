// "use client"
import { create } from 'zustand';

interface UserState {
  userData: { name: string } | null;
  setUserData: (data: { name: string }) => void;

  responses: string[];
  addResponse: (response: string) => void;

  currentStep: number;
  setCurrentStep: (step: number) => void;

  resetProgress: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),

  responses: [],
  addResponse: (response) =>
    set((state) => ({ responses: [...state.responses, response] })),

  currentStep: 0,
  setCurrentStep: (step) => set({ currentStep: step }),

  resetProgress: () => set({ responses: [], currentStep: 0 }),
}));

//testear datos