<script setup>
const allData = [
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
  <el-table :data="allData" height="90%" style="width: 100%">
    <el-table-column prop="user_id" label="用户ID"></el-table-column>
    <el-table-column prop="username" label="用户名"></el-table-column>
    <el-table-column prop="phone_no" label="电话号码"></el-table-column>
    <el-table-column prop="qq_no" label="QQ号码"></el-table-column>
  </el-table>
</template>
<style scoped></style>
