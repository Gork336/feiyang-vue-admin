import { ref } from "vue";
import { defineStore } from "pinia";
export const useLoginStatusStore = defineStore("loginStatus", () => {
  const isAuthenticated = ref(false);
  return { isAuthenticated };
});
