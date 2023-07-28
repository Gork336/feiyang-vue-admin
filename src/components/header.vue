<script setup>
import { ref } from "vue";

const activeIndex = ref("-1");
</script>
<template>
  <el-menu mode="horizontal" :default-active="activeIndex" class="custom-menu">
    <el-menu-item class="logo">
      <font-awesome-icon icon="fa-solid fa-bars" size="lg" /> &#8203;
    </el-menu-item>
    <el-menu-item index="0">LOGO</el-menu-item>

    <el-menu-item index="1" class="to-right">Processing Center</el-menu-item>
    <el-menu-item index="2">nickname</el-menu-item>
  </el-menu>
</template>
<style scoped>
.to-right {
  margin-left: auto;
}
.logo {
  height: 100%;
}
</style>
