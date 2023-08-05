<script setup>
import { computed, onMounted, ref } from "vue";
import { usePagination } from "@/components/usePagination";
import axios from "axios";

//import staticUsersData from "@/staticJson/staticUsersData.json";
// 用于存储从后端获取的数据
const usersData = ref([]);
//const usersData = ref(staticUsersData);

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

//搜索功能
const searchUsername = ref("");
const searchUserId = ref("");
const filterData = computed(() =>
  usersData.value.filter((data) => {
    // 过滤用户名
    const isUsernameMatched =
      !searchUsername.value ||
      data.username.toLowerCase().includes(searchUsername.value.toLowerCase());

    // 过滤用户ID
    const isUserIdMatched =
      !searchUserId.value || data.user_id.toString().includes(searchUserId.value);

    // 返回符合两个搜索条件的数据
    return isUsernameMatched && isUserIdMatched;
  })
);

//分页
const { total, pageSize, currentPage, currentPageData } =
  usePagination(filterData);
</script>
<template>
  <!-- info -->
  <el-alert
    title="用户名和用户编号都是模糊搜索"
    type="info"
    show-icon
    class="info"
  />
  <!-- 搜索 -->
  <el-form :inline="true" label-width="auto" label-position="left">
    <el-form-item label="搜索用户名"
      ><el-input v-model="searchUsername" placeholder="search" class="input"
    /></el-form-item>
    <el-form-item label="搜索用户编号"
      ><el-input v-model="searchUserId" placeholder="search" class="input"
    /></el-form-item>
  </el-form>

  <!-- 表格 -->
  <el-table :data="currentPageData" style="width: 100%">
    <el-table-column prop="user_id" label="用户编号"></el-table-column>
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
<style scoped>
.info {
  margin-bottom: 15px;
}
</style>
