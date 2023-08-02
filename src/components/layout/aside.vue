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
    <RouterLink to="/main/" class="router-a">
      <el-menu-item index="1">
        <font-awesome-icon icon="fa-solid fa-house" size="lg" class="icon" />
        <template #title v-if="!collapse">首页</template>
      </el-menu-item>
    </RouterLink>
    <el-menu-item index="2">
      <font-awesome-icon icon="fa-solid fa-gauge" size="lg" class="icon" />
      <template #title v-if="!collapse">小程序管理</template>
    </el-menu-item>

    <RouterLink to="/main/users" class="router-a"
      ><el-menu-item index="3">
        <font-awesome-icon icon="fa-solid fa-users" size="lg" class="icon" />
        <template #title v-if="!collapse">用户列表</template>
      </el-menu-item></RouterLink
    >
    <RouterLink to="/main/technicians" class="router-a"
      ><el-menu-item index="4">
        <font-awesome-icon
          icon="fa-solid fa-users-gear"
          size="lg"
          class="icon"
        />
        <template #title v-if="!collapse">技术员列表</template>
      </el-menu-item></RouterLink
    >
    <RouterLink to="/main/orders" class="router-a"
      ><el-menu-item index="6">
        <font-awesome-icon
          icon="fa-solid fa-file-lines"
          size="lg"
          class="icon"
        />
        <template #title v-if="!collapse">维修订单列表</template>
      </el-menu-item></RouterLink
    >

    <RouterLink to="/login1" class="router-a"
      ><el-menu-item index="7">
        <font-awesome-icon
          icon="fa-solid fa-user-secret"
          size="lg"
          class="icon"
        />
        <template #title v-if="!collapse">退出登录</template>
      </el-menu-item></RouterLink
    >
    <RouterLink to="/test" class="router-a"
      ><el-menu-item index="7">
        <font-awesome-icon
          icon="fa-solid fa-user-secret"
          size="lg"
          class="icon"
        />
        <template #title v-if="!collapse">test</template>
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
