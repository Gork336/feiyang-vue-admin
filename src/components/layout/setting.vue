<script setup>
import { ref, watchEffect, watch } from "vue";
const props = defineProps(["drawer"]);
console.log(props);
const emits = defineEmits(["close"]);
const drawer = ref(props.drawer);
watchEffect(() => {
  drawer.value = props.drawer;
});

function handleClose() {
  emits("close");
}
</script>
<template>
  <el-drawer v-model="drawer" title="I am the title" @close="handleClose"
    >123
  </el-drawer>
</template>
<style scoped></style>
