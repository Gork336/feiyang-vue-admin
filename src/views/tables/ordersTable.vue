<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { usePagination } from "@/components/usePagination";
import axios from "axios";

// 用于存储从后端获取的数据
const ordersData = ref([]);

onMounted(() => {
  axios
    .post("/getOrders")
    .then(function (response) {
      ordersData.value = response.data; // 将从后端获取的数据保存在usersData中
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});

const { total, pageSize, currentPage, currentPageData } =
  usePagination(ordersData);
</script>
<template>
  <el-table :data="currentPageData" style="width: 100%">
    <el-table-column prop="order_id" label="订单编号"></el-table-column>
    <el-table-column prop="user_id" label="用户编号"></el-table-column>
    <el-table-column prop="technician_id" label="技术员编号"></el-table-column>
    <el-table-column prop="created_at" label="创建时间"></el-table-column>
    <el-table-column prop="completed_at" label="完成时间"></el-table-column>
    <el-table-column prop="status" label="订单状态"></el-table-column>
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
F
