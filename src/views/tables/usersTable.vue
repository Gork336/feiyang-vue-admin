<script setup>
import { onMounted } from "vue";
import axios from "axios";
// const usersData = ref([]); // 用于存储从后端获取的数据

// onMounted(() => {
//   // 在页面加载时发送异步请求获取数据
//   axios
//     .post("/getUsers")
//     .then(function (response) {
//       usersData.value = response.data; // 将从后端获取的数据保存在usersData中
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

const staticData = [
  {
    user_id: "202300001",
    username: "kaze",
    phone_no: "17313194059",
    qq_no: "1194677153",
  },
  {
    user_id: "202300001",
    username: "kaze",
    phone_no: "17313194059",
    qq_no: "1194677153",
  },
  {
    user_id: "202300001",
    username: "kaze",
    phone_no: "17313194059",
    qq_no: "1194677153",
  },
  {
    user_id: "202300001",
    username: "kaze",
    phone_no: "17313194059",
    qq_no: "1194677153",
  },
  {
    user_id: "202300001",
    username: "kaze",
    phone_no: "17313194059",
    qq_no: "1194677153",
  },
  {
    user_id: "202300001",
    username: "kaze",
    phone_no: "17313194059",
    qq_no: "1194677153",
  },
];
</script>
<template>
  <el-table :data="staticData" height="90%" style="width: 100%">
    <el-table-column prop="user_id" label="用户ID"></el-table-column>
    <el-table-column prop="username" label="用户名"></el-table-column>
    <el-table-column prop="phone_no" label="电话号码"></el-table-column>
    <el-table-column prop="qq_no" label="QQ号码"></el-table-column>
  </el-table>
  <div class="pagination-block">
    <el-pagination layout="total, prev, pager, next" :total="1000" />
  </div>
</template>
<style scoped></style>
