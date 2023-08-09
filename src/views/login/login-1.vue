<script setup>
import { reactive, ref, watchEffect } from "vue";
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";
import axios from "axios";
import router from "../../router/mainRouter";

import { useLoginStatusStore } from "@/stores/loginStatus";
const loginStatus = useLoginStatusStore();

import { useThemeStatusStore } from "@/stores/themeStatus";
const themeStatus = useThemeStatusStore();

import { setCookie } from "@/components/useCookie.js";

const captchaTheme = ref(themeStatus.theme);
watchEffect(() => {
  captchaTheme.value = themeStatus.theme;
});

const info = ref(null);
//const sitekey = "10000000-ffff-ffff-ffff-000000000001";
const sitekey = "9ffd0b46-5be5-4711-85de-0be0ede57159";
const loginForm = reactive({
  username: "",
  password: "",
  token: "",
});

function captchaVerify(token) {
  //console.log(token);
  loginForm.token = token;
}
function loginSubmit() {
  //console.log(JSON.stringify(loginForm));

  if (loginForm.username == "" || loginForm.password == "") {
    info.value.textContent = "请将用户名和密码填写完整！";
  } else if (loginForm.token == "") {
    info.value.textContent = "请通过验证！";
  } else {
    info.value.textContent = "";
    axios
      .post("/login", loginForm)
      .then(function (response) {
        const { captchaValid, accountValid, token } = response.data;
        if (captchaValid === "true") {
          // 验证码验证成功
          info.value.textContent = "";
        } else {
          // 验证码验证失败
          info.value.textContent = "验证失败，请重试";
        }
        if (accountValid === "true") {
          // 账号验证成功
          info.value.textContent = "";
        } else {
          // 账号验证失败
          info.value.textContent = "账号或者密码错误，请重试";
        }

        if (captchaValid === "true" && accountValid === "true" && token) {
          localStorage.setItem("jwtToken", token);
          loginStatus.isAuthenticated = "true";
          setCookie(
            "c8708d766768d65cb155e3272096eec8c3cc4d8971336368c833926f07d7f6a9",
            "27974a0e7646329d1d8826536f2865a04d7ff058"
          );
          router.push("/main");
          // 在此处进行需要登录后的操作，例如导航到其他页面等
        } else {
          // 登录失败，没有获取到有效的 token
          console.log("token为空！");
        }
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

// function toMain() {
//   loginStatus.isAuthenticated = "true";
//   setCookie(
//     "c8708d766768d65cb155e3272096eec8c3cc4d8971336368c833926f07d7f6a9",
//     "27974a0e7646329d1d8826536f2865a04d7ff058"
//   );
//   console.log(document.cookie)
//   router.push("/main");
// }
</script>

<template>
  <el-container calss="login-container">
    <el-card>
      <el-form
        :model="loginForm"
        label-width="auto"
        label-position="left"
        class="login-form"
      >
        <h1 class="login-title">Welcome to Fei Yang</h1>

        <el-form-item label="用户名">
          <el-input v-model="loginForm.username" />
        </el-form-item>

        <el-form-item label="密码">
          <el-input
            v-model="loginForm.password"
            type="password"
            show-password
          />
        </el-form-item>
        <el-form-item
          ><vue-hcaptcha
            :theme="captchaTheme"
            :sitekey="sitekey"
            @verify="captchaVerify"
          ></vue-hcaptcha
        ></el-form-item>

        <el-form-item>
          <el-button type="primary" @click="loginSubmit">登录</el-button>
        </el-form-item>
        <!-- <el-form-item>
          <el-button type="primary" @click="toMain">去主界面（test）</el-button>
        </el-form-item> -->
        <p ref="info" class="warning"></p>
      </el-form>
    </el-card>
  </el-container>
</template>

<style scoped>
.el-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.el-card {
  border-radius: 8px;
}

.login-form {
  width: 300px;
  padding: 30px;
}

.login-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.el-button {
  width: 100%;
}
.warning {
  color: #e6a23c;
  text-align: center;
}
</style>
