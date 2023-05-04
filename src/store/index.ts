import { defineStore } from "pinia";

export type RootState = {
  currentEmail: String;
};

export const useMainStore = defineStore({
  id: "mainstore",
  state: () =>
    ({
      currentEmail: "",
    } as RootState),
});
