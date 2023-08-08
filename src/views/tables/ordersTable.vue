<script setup>
import { computed, onMounted, ref } from "vue";
import { usePagination } from "@/components/usePagination";
import axios from "axios";

// 从 localStorage 获取令牌
const token = localStorage.getItem("jwtToken");

// 设置默认请求头
axios.defaults.headers.common["Authorization"] = "Bearer " + token;

//import staticOrderData from "@/staticJson/staticOrderData.json";

// 用于存储从后端获取的数据
const ordersData = ref([]);
//ordersData.value = staticOrderData;
onMounted(() => {
  axios
    .post("/getOrders")
    .then(function (response) {
      ordersData.value = response.data; // 将从后端获取的数据保存在usersData中
    })
    .catch(function (error) {
      console.log(error);
    });
});
//搜索功能
const searchTechnicianId = ref("");
const searchUserId = ref("");
const dateRange = ref("");
const filterData = computed(() =>
  ordersData.value.filter((data) => {
    // 过滤用户名
    const isTechnicianIdMatched =
      !searchTechnicianId.value ||
      data.technician_id.toString().includes(searchTechnicianId.value);

    // 过滤用户ID
    const isUserIdMatched =
      !searchUserId.value ||
      data.user_id.toString().includes(searchUserId.value);
    // 过滤时间段
    const isDateInRange = !dateRange.value || isDateWithinRange(data);

    // 返回同时满足所有搜索条件的数据项
    return isTechnicianIdMatched && isUserIdMatched && isDateInRange;
  })
);
function isDateWithinRange(data) {
  const startDate = dateRange.value[0];
  const endDate = dateRange.value[1];

  const createdAt = new Date(data.created_at.split(" ")[0]);

  return createdAt >= startDate && createdAt <= endDate;
  //return data;
}

//分页
const { total, pageSize, currentPage, currentPageData } =
  usePagination(filterData);
</script>
<template>
  <!-- 提示 -->
  <el-alert
    title="订单状态：0->待分配，1->维修中，2->已完成；校区是拼音首字母"
    type="info"
    show-icon
    class="info"
  />

  <!-- 搜索 -->
  <el-form :inline="true" label-width="auto" label-position="left">
    <el-form-item label="搜索技术员编号"
      ><el-input
        v-model="searchTechnicianId"
        placeholder="search"
        class="input"
    /></el-form-item>
    <el-form-item label="搜索用户编号"
      ><el-input v-model="searchUserId" placeholder="search" class="input"
    /></el-form-item>
    <br />
    <el-form-item label="筛选创建时间"
      ><el-date-picker
        v-model="dateRange"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
    /></el-form-item>
  </el-form>
  <!-- 表格 -->
  <el-table :data="currentPageData" style="width: 100%">
    <el-table-column prop="order_id" label="订单编号"></el-table-column>
    <el-table-column prop="user_id" label="用户编号"></el-table-column>
    <el-table-column prop="technician_id" label="技术员编号"></el-table-column>
    <el-table-column prop="created_at" label="创建时间"></el-table-column>
    <el-table-column prop="completed_at" label="完成时间"></el-table-column>
    <el-table-column prop="status" label="订单状态"></el-table-column>
    <el-table-column prop="campus" label="校区"></el-table-column>
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
