<script setup>
import { ref } from "vue";
import staticTechbiciansData from "@/staticJson/staticTechniciansData.json";
const usersData = ref([]);
function handleDetail(scope) {
  console.log(JSON.stringify(scope.row));
}
</script>
<template>
  <el-table :data="staticTechbiciansData" style="width: 100%">
    <el-table-column prop="technician_id" label="技术员编号" />
    <el-table-column prop="realname" label="真实姓名" />
    <el-table-column prop="nickname" label="昵称" />
    <el-table-column prop="phone_no" label="电话号码" />
    <el-table-column prop="qq_no" label="QQ号码" />
    <el-table-column fixed="right" label="操作">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="handleDetail(scope)"
          >Detail</el-button
        >
        <el-button link type="primary" size="small">Edit</el-button>
        <el-button link type="primary" size="small">third</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<style scoped></style>
