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
  actions: {
    setCurrentEmail(email: String) {
      if (!email) return;
      this.currentEmail = email;
    },
  },
});
