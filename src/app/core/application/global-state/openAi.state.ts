import { create } from "zustand";
import { IOpenAiResponseReply } from "../dto";

export interface IOpenAiState {
  openAiResponse: IOpenAiResponseReply;
  setOpenAiResponse: (value: IOpenAiResponseReply) => void;
}

export const useOpenAiState = create<IOpenAiState>()(
  (set) => ({
    openAiResponse: {
      message: "",
      reply: "",
    },
    setOpenAiResponse: (value: IOpenAiResponseReply) =>
      set(() => ({
        openAiResponse: value,
      })),
  })
);
