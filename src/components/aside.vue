<script setup>
import { ref } from "vue";

import { useAsideWidthStore } from "@/stores/asidewidth";
const asideWidth = useAsideWidthStore();

const collapse = ref(false); // 默认侧边导航不折叠
const toggleCollapse = () => {
  collapse.value = !collapse.value;
  asideWidth.width = collapse.value ? "64px" : "240px";
  // console.log(asideWidth.width);
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
        class="icon"
      />
      <font-awesome-icon
        icon="fa-solid fa-circle-arrow-right"
        size="lg"
        v-if="collapse"
        class="icon"
      />

      <template #title v-if="!collapse"></template>
    </el-menu-item>
    <el-menu-item index="1">
      <font-awesome-icon icon="fa-solid fa-user-secret" class="icon" />
      <template #title v-if="!collapse">Navigator One</template>
    </el-menu-item>
    <el-menu-item index="2">
      <font-awesome-icon icon="fa-solid fa-user-secret" class="icon" />
      <template #title v-if="!collapse">Navigator Two</template>
    </el-menu-item>
    <RouterLink to="/login1" class="router-a"
      ><el-menu-item index="3">
        <font-awesome-icon icon="fa-solid fa-user-secret" class="icon" />
        <template #title v-if="!collapse">login</template>
      </el-menu-item></RouterLink
    >
    <RouterLink to="/users" class="router-a"
      ><el-menu-item index="4">
        <font-awesome-icon icon="fa-solid fa-user-secret" class="icon" />
        <template #title v-if="!collapse">users</template>
      </el-menu-item></RouterLink
    >
    <RouterLink to="/" class="router-a"
      ><el-menu-item index="5">
        <font-awesome-icon icon="fa-solid fa-user-secret" class="icon" />
        <template #title v-if="!collapse">root /</template>
      </el-menu-item></RouterLink
    >
  </el-menu>
</template>
<style scoped>
.first {
  height: 60px;
}
.icon {
  padding-right: 18px;
}
.router-a {
  text-decoration: none;
}
</style>
