<script setup>
console.log("aside");
</script>
<template >
  <h5 class="aside-title">Default colors</h5>
  <el-menu default-active="2">
    <el-menu-item index="1">First</el-menu-item>
    <el-menu-item index="2">Second</el-menu-item>
  </el-menu>
</template>
<style scoped>
.aside-title {
  background-color: aliceblue;
  justify-content: center;
}
</style>
