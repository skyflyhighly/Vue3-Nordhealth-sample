import { defineStore } from "pinia";

export type RootState = {
  currentEmail: String;
};

export const useUserStore = defineStore({
  id: "userstore",
  state: (): RootState => ({
    currentEmail: "",
  }),
  actions: {
    setCurrentEmail(email: string) {
      this.currentEmail = email;
    },
  },
});
