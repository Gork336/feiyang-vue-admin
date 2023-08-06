<script setup>
import { onMounted, reactive } from "vue";
import axios from "axios";
import campusOrder from "../../components/showData/campusOrder.vue";
import weeklyOrder from "../../components/showData/weeklyOrder.vue";
import numberCount from "../../components/showData/numberCount.vue";

import testChart from "../../components/showData/testChart.vue";

const totalNum = reactive({
  totalUsers: 0,
  totalTechnicians: 0,
  totalOrders: 0,
});

onMounted(() => {
  axios
    .post("/getTotal")
    .then((response) => {
      totalNum.totalUsers = response.data.totalUsers;
      totalNum.totalTechnicians = response.data.totalTechnicians;
      totalNum.totalOrders = response.data.totalOrders;
    })
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
        <numberCount :target-number="totalNum.totalUsers"></numberCount>
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
        <numberCount :target-number="totalNum.totalTechnicians"></numberCount>
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
        <numberCount :target-number="totalNum.totalOrders"></numberCount>
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

  <el-row :gutter="12">
    <el-col :span="12">
      <el-card shadow="always">
        <!-- <testChart></testChart> -->
        <campusOrder></campusOrder> 
      </el-card>
    </el-col>
    <el-col :span="12"
      ><el-card shadow="always">
        <weeklyOrder></weeklyOrder>
        </el-card
    ></el-col>
  </el-row>
</template>
<style scoped>
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
</style>
