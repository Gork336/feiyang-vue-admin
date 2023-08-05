import { ref } from "vue";
import { defineStore } from "pinia";
export const useThemeStatusStore = defineStore("themeStatus", () => {
  const theme = ref("light");
  return { theme };
});
