<script setup>
import { useDark, useToggle, useColorMode } from "@vueuse/core";

const isDark = useDark();
const colorMode = useColorMode({
  modes:{
    dim:'dim',
    cafe:'cafe',
  }
});
const toggleDark = useToggle(isDark);
</script>
<template>
  {{ colorMode }}
  <button @click="colorMode = 'dark'">Dark</button>
  <button @click="colorMode = 'light'">Light</button>
  <button @click="colorMode = 'dim'">Dim</button>
  <button @click="colorMode = 'cafe'">cafe </button>
</template>
<style>
.dark {
  background: #252525;
  color: white;
}
</style>
