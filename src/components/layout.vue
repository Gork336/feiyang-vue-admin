<script setup>
import { ref, watch } from "vue";
import asideMenu from "./aside.vue";
import headerMenu from "./header.vue";

import { useAsideWidthStore } from "@/stores/asidewidth";
const asideWidth = useAsideWidthStore();
console.log("aside初始" + asideWidth.width);
watch(
  () => asideWidth.width,
  (newWidth) => {
    // console.log("new aside: " + newWidth);
    fWidth.value = newWidth;
  }
);
const fWidth = ref(asideWidth.width);
</script>

<template>
  <div class="common-layout">
    <el-container class="custom-container">
      <el-aside :width="fWidth" class="custom-aside">
        <asideMenu></asideMenu>
      </el-aside>
      <el-container>
        <el-header class="custom-header">
          <headerMenu></headerMenu>
        </el-header>
        <el-main> <RouterView></RouterView></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  height: 100%;
}
.custom-container {
  height: 100%;
  display: flex;
}
.custom-header {
  padding-left: 0px;
  padding-right: 0px;
}
.custom-aside {
  height: 100%;
  transition: width 0.5s;

  /* border-right: 1px solid var(--el-border-color); */
}
</style>
