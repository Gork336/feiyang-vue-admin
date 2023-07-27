<script setup>
import { reactive, ref, onMounted } from "vue";
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";
import axios from "axios";

const info = ref(null);
const sitekey = "10000000-ffff-ffff-ffff-000000000001";
//const sitekey = "9ffd0b46-5be5-4711-85de-0be0ede57159";
const loginForm = reactive({
  username: "",
  password: "",
  token: "",
});

function captchaVerify(token) {
  console.log(token);
  loginForm.token = token;
}
function loginSubmit() {
  console.log(loginForm);
  if (loginForm.username == "" || loginForm.password == "") {
    info.value.textContent = "请将用户名和密码填写完整！";
  } else if (loginForm.token == "") {
    info.value.textContent = "请通过验证！";
  } else {
    info.value.textContent = "";
    axios
      .post("/login", loginForm)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>

<template>
  <div class="login-container">
    <el-form class="login-form" :model="loginForm">
      <h1 class="login-title">Welcome to Fei Yang</h1>

      <el-form-item label="用户名">
        <el-input v-model="loginForm.username" />
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="loginForm.password" />
      </el-form-item>

      <vue-hcaptcha :sitekey="sitekey" @verify="captchaVerify"></vue-hcaptcha>

      <el-form-item>
        <el-button type="primary" @click="loginSubmit">登录</el-button>
      </el-form-item>
      <p ref="info" class="warning"></p>
    </el-form>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
}

.login-form {
  width: 300px;
  padding: 30px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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
}
</style>
