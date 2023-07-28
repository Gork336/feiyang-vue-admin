import { ref, computed } from "vue";
import { defineStore } from "pinia";
export const useAsideWidthStore = defineStore("asideWidth", () => {
  const width = ref("240px");
  function setWidth(newWidth) {
    width = newWidth;
    console.log("newWidth:" + newWidth + width);
  }
  return { width, setWidth };
});
