<script setup>
import { reactive, watch } from "vue";

import gsap from "gsap";
const props = defineProps(["targetNumber"]);
const tweened = reactive({
  number: 0,
});

watch(
  () => props.targetNumber,
  (newValue) => {
    gsap.to(tweened, { duration: 0.5, number: Number(newValue) || 0 });
  }
);
</script>
<template>
  <h1>{{ tweened.number.toFixed(0) }}</h1>
</template>
<style scoped>
h1 {
  margin-top: 5px;
}
</style>
