<script setup>
import { ref } from "vue";

import { useAsideWidthStore } from "@/stores/asidewidth";
const asideWidth = useAsideWidthStore();

const collapse = ref(false); // 默认侧边导航不折叠
const toggleCollapse = () => {
  collapse.value = !collapse.value;
  asideWidth.width = collapse.value ? "64px" : "240px";
  console.log(asideWidth.width);
};
</script>
<template>
  <!-- <h2 class="aside-title">后台管理</h2> -->
  <el-menu mode="vertical" default-active="1">
    <el-menu-item index="0" @click="toggleCollapse" class="first">
      <font-awesome-icon
        icon="fa-solid fa-circle-arrow-left"
        size="lg"
        v-if="!collapse"
      />
      <font-awesome-icon
        icon="fa-solid fa-circle-arrow-right"
        size="lg"
        v-if="collapse"
      />

      <template #title v-if="!collapse"></template>
    </el-menu-item>
    <el-menu-item index="1">
      <font-awesome-icon icon="fa-solid fa-user-secret" />
      <template #title v-if="!collapse">Navigator One</template>
    </el-menu-item>
    <el-menu-item index="2">
      <font-awesome-icon icon="fa-solid fa-user-secret" />
      <template #title v-if="!collapse">Navigator Two</template>
    </el-menu-item>
  </el-menu>
</template>
<style scoped>
.first{
  height: 60px;
}</style>
