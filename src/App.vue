<script setup>
import Test from "./views/Test.vue";
import login1 from "./views/login/login-1.vue";
import layout from "./components/layout.vue";
import asideMenu from "./components/aside.vue"
const asideWith = "200px";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="asideWith">
        <asideMenu></asideMenu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main> Main </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
