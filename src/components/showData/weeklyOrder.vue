<script setup>
import { onMounted } from "vue";
import axios from "axios";
import * as echarts from "echarts/core";
import {
  TooltipComponent,
  TitleComponent,
  GridComponent,
} from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

// 从 localStorage 获取令牌
const token = localStorage.getItem("jwtToken");

// 设置默认请求头
axios.defaults.headers.common["Authorization"] = token;

echarts.use([
  TooltipComponent,
  TitleComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
]);
onMounted(() => {
  axios
    .post("/getWeeklyOrders")
    .then((response) => {
      console.log(response);

      // 创建日期数组和订单数量数组
      const dates = [];
      const orderCounts = [];

      // 提取日期和订单数量数据
      response.data.forEach((item) => {
        dates.push(item.day);
        orderCounts.push(item.order_count);
      });

      //画图
      var chartDom = document.getElementById("main2");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "近七日每天维修订单数量",
          left: "center",
          top: "30",
        },
        tooltip: {},
        xAxis: {
          type: "category",
          data: dates,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: orderCounts,
            type: "bar",
          },
        ],
      };

      option && myChart.setOption(option);
    })
    .catch((e) => {
      console.log(e);
    });
});
</script>
<template>
  <div id="main2"></div>
</template>
<style>
#main2 {
  height: 400px;
}
</style>
