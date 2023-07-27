import { createRouter, createWebHistory } from "vue-router";
import login1 from "../views/login/login-1.vue";
import dingXiang from "../views/login/ding_xiang_captcha.vue";
import Test from "../views/Test.vue";

const routes = [
  { path: "/login1", component: login1 },
  { path: "/dingxiang", component: dingXiang },
  { path: "/", component: Test },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
