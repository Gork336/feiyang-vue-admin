<script setup>
import { onMounted } from "vue";
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
onMounted(() => {
  echarts.use([GridComponent, BarChart, CanvasRenderer]);

  var chartDom = document.getElementById("weeklyOrder");
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  option && myChart.setOption(option);
});
</script>
<template>
  <div id="weeklyOrder"></div>
</template>
<style>
#weeklyOrder {
  width: 600px;
  height: 400px;
}
</style>
