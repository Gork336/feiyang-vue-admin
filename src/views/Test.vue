<script setup>
import { reactive } from "vue";
const dialogForm = reactive({
  name: "",
});
</script>
<template>
  123
  <el-form :model="dialogForm">
    <el-form-item label="Activity name">
      <el-input v-model="dialogForm.name" />
    </el-form-item>
  </el-form>
</template>
