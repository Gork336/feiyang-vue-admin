<script setup>
import Test from "./views/Test.vue";
import login1 from "./views/login/login-1.vue";
</script>

<template>
  <login1></login1>
  <RouterLink to="/login1">login1</RouterLink>
  <RouterView></RouterView>
</template>

<style scoped></style>
