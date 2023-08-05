<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-setup-props-destructure -->

<script setup>
import { ref, watchEffect, watch } from "vue";
import { useDark, useToggle } from "@vueuse/core";
//theme status
import { useThemeStatusStore } from "@/stores/themeStatus";
const themeStatus = useThemeStatusStore();

//drawer
const props = defineProps(["drawer"]);
const emits = defineEmits(["close"]);
const drawer = ref(props.drawer);
watchEffect(() => {
  drawer.value = props.drawer;
});
function handleClose() {
  emits("close");
}
//isDark
const isDark = useDark();
const toggleDark = useToggle(isDark);
watch(isDark, () => {
  if (isDark.value) {
    themeStatus.theme = "dark";
  } else {
    themeStatus.theme = "light";
  }
});
</script>
<template>
  <el-drawer v-model="drawer" title="页面设置" @close="handleClose"
    ><button @click="toggleDark()">Dark</button>
    {{ isDark }}
    <br />
    登陆页面的深色模式要进一次主页面才会完全生效
  </el-drawer>
</template>
<style>
.login-container {
  background-color: #121212;
}
</style>
