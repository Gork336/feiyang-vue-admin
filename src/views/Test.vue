<script setup>
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();

function increment() {
  counter.increment();
}
function double() {
  counter.count = counter.doubleCount;
}

import { computed, ref } from "vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";

const language = ref("zh-cn");
const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));

const toggle = () => {
  language.value = language.value === "zh-cn" ? "en" : "zh-cn";
};
</script>
<template>
  This is test!<br />
  Current {{ counter.count }}<br />
  <el-button type="primary" @click="increment">increment</el-button>
  <el-button type="primary" @click="double">double</el-button>
  <br />
  <div>
    <el-button mb-2 @click="toggle">Switch Language</el-button>
    <br />

    <el-config-provider :locale="locale">
      <el-table mb-1 :data="[]" />
      <el-pagination :total="100" />
    </el-config-provider>
  </div>
</template>
