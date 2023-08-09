<script setup>
import { onMounted } from "vue";
import axios from "axios";
//echarts
import * as echarts from "echarts/core";
import { TitleComponent, TooltipComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

// 从 localStorage 获取令牌
const token = localStorage.getItem("jwtToken");

// 设置默认请求头
axios.defaults.headers.common["Authorization"] = token;

echarts.use([
  TitleComponent,
  TooltipComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
]);

onMounted(() => {
  //获取数据
  axios
    .post("/getCampusOrders")
    .then((response) => {
      //console.log(response);
      //生成图表
      var chartDom = document.getElementById("main1");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "各校区报修数量",
          subtext: "（累计）",
          left: "center",
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
              { value: response.data.JA, name: "江安校区" },
              { value: response.data.WJ, name: "望江校区" },
              { value: response.data.HX, name: "华西校区" },
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
    })
    .catch((e) => {
      console.log(e);
    });
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
