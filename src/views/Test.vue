<script setup>
import { ref } from "vue";
import numberCount from "../components/showData/numberCount.vue";
const input=ref(123)
</script>
<template>
  This is test!
  <br />
  <numberCount :target-number='input' ></numberCount>
  <input type="text" v-model="input" >
</template>
<style scoped></style>
