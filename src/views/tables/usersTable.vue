<script setup>
import { computed, onMounted, ref, watch } from "vue";
import axios from "axios";

// 用于存储从后端获取的数据
const usersData = ref([]);
onMounted(() => {
  axios
    .post("/getUsers")
    .then(function (response) {
      usersData.value = response.data; // 将从后端获取的数据保存在usersData中
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});

//total
const total = computed(() => {
  console.log(usersData.value.length);
  return usersData.value.length;
});

//page-size
const pageSize = ref(10); //每页多少条
watch(
  () => pageSize.value,
  (newSize) => {
    pageSize.value = newSize;
    console.log("newSize: " + newSize);
  }
);
//current-page
const currentPage = ref(1); //当前页
watch(
  () => currentPage.value,
  (newPage) => {
    currentPage.value = newPage;
    console.log("newPage: " + newPage);
  }
);

//当前分页数据
const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return usersData.value.slice(start, end);
});
</script>
<template>
  <el-table :data="currentPageData" style="width: 100%">
    <el-table-column prop="user_id" label="用户ID"></el-table-column>
    <el-table-column prop="username" label="用户名"></el-table-column>
    <el-table-column prop="phone_no" label="电话号码"></el-table-column>
    <el-table-column prop="qq_no" label="QQ号码"></el-table-column>
  </el-table>
  <div class="pagination-block">
    <el-pagination
      layout=" sizes, prev, pager, next, jumper, total"
      :total="total"
      v-model:page-size="pageSize"
      v-model:current-page="currentPage"
    />
  </div>
</template>
<style scoped></style>
