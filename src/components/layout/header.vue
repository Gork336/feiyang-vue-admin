<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";
import setting from "./setting.vue";

const drawer = ref(false);

const activeIndex = ref("-1");
function handDrawerOpen() {
  drawer.value = true;
}
function handleDrawerClose() {
  drawer.value = false;
}
</script>
<template>
  <el-menu mode="horizontal" :default-active="activeIndex" class="custom-menu">
    <el-menu-item index="-1" class="logo">
      <font-awesome-icon icon="fa-solid fa-bars" size="lg" /> &#8203;
      <!-- <template #title>&#8203;</template> -->
    </el-menu-item>
    <el-menu-item index="0">LOGO</el-menu-item>
    <el-menu-item index="1"
      >系统开发中，仅为临时页面，不代表最终品质</el-menu-item
    >

    <el-menu-item index="2" class="to-right">Hello!</el-menu-item>
    <el-menu-item index="3" @click="handDrawerOpen"
      ><font-awesome-icon
        icon="fa-solid fa-gear"
        size="lg"
      />&#8203;</el-menu-item
    >
  </el-menu>

  <!-- 抽屉 -->
  <setting :drawer="drawer" @close="handleDrawerClose"></setting>
  <!-- <el-drawer v-model="drawer" title="I am the title">123 </el-drawer> -->
</template>
<style scoped>
.to-right {
  margin-left: auto;
}
.logo {
  height: 100%;
}
</style>
