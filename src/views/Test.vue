<script setup>
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore();

function increment() {
  counter.increment();
}
function double() {
  counter.count = counter.doubleCount;
}
</script>
<template>
  This is test!<br />
  Current {{ counter.count }}<br />
  <el-button type="primary" @click="increment">increment</el-button>
  <el-button type="primary" @click="double">double</el-button>
</template>
