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
    })
    .catch((e) => {
      console.log(e);
    });
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
      data: ["7-11", "7-12", "7-13", "T7-14", "7-15", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [12, 20, 15, 8, 7, 11, 13],
        type: "bar",
      },
    ],
  };

  option && myChart.setOption(option);
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
