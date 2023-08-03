<script setup>
import { onMounted } from "vue";
import axios from "axios";
import * as echarts from "echarts/core";
import { TitleComponent, TooltipComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  TooltipComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
]);
onMounted(() => {
  axios
    .post("/getCampusOrders")
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
  var chartDom = document.getElementById("main1");
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: "各校区报修数量",
      subtext: "（累计）",
      left: "center",
      top: "30",
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "江安校区" },
          { value: 735, name: "望江校区" },
          { value: 580, name: "华西校区" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  option && myChart.setOption(option);
});
</script>
<template>
  <div id="main1"></div>
</template>
<style>
#main1 {
  
  height: 400px;
}
</style>
