<script setup>
import { onMounted } from "vue";
import axios from "axios";
import campusOrder from "../../components/showData/campusOrder.vue";
import weeklyOrder from "../../components/showData/weeklyOrder.vue";

onMounted(() => {
  axios
    .post("/getTotal")
    .then((response) => {})
    .catch((e) => {
      console.log(e);
    });
});
</script>
<template>
  <el-row :gutter="12">
    <el-col :span="6">
      <el-card shadow="always">
        <h4>
          <font-awesome-icon
            icon="fa-solid fa-users"
            size="lg"
            class="icon"
          />用户总数
        </h4>
        <br />
        <h1 class="card-value">12346</h1>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always">
        <h4>
          <font-awesome-icon
            icon="fa-solid fa-users-gear"
            size="lg"
            class="icon"
          />技术员总数
        </h4>
        <br />
        <h1 class="card-value">12346</h1>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always">
        <h4>
          <font-awesome-icon
            icon="fa-solid fa-file-lines"
            size="lg"
            class="icon"
          />维修订单总数
        </h4>
        <br />
        <h1 class="card-value">12346</h1>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always">
        <h4>
          <font-awesome-icon
            icon="fa-solid fa-file-lines"
            size="lg"
            class="icon"
          />写点啥好呢
        </h4>
        <br />
        <h1 class="card-value">12346</h1>
      </el-card>
    </el-col>
  </el-row>
  <el-divider />
  <div class="chart-container">
    <campusOrder></campusOrder>
    <weeklyOrder></weeklyOrder>
  </div>
  <weeklyOrder></weeklyOrder>
</template>
<style scoped>
.chart-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  margin-right: 15px;
}
h1 {
  margin: 0 5px;
  font-size: 300%;
}
h4 {
  margin: 5px 5px;
}
.card-value {
  margin-bottom: 5px;
}
</style>
