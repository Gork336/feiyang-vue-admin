<script setup>
import { ref, onMounted } from "vue";
const captcha = ref(null);
onMounted(() => {
  console.log("mounted: _dx", _dx);
  console.log("mounted: window._dx", window._dx);
  console.log("el", captcha);
  _dx.Captcha(captcha.value, {
    appId: "e2980cf6ee7dbf35dbaab289612ca750",
    style: "inline",
    width: "4000",
    success: (token) => {
      console.log(token);
    },
  });
});
</script>
<template>
    123ding
  <div ref="captcha"></div>
</template>
<!-- index.html
<script
      src="https://cdn.dingxiang-inc.com/ctu-group/captcha-ui/v5/index.js"
      crossorigin="anonymous"
      id="dx-captcha-script"
    ></script> -->
