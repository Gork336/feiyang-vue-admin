/* eslint-disable no-undef */
import { createRouter, createWebHistory } from "vue-router";
import layout from "@/components/layout/layout.vue";
import login1 from "@/views/login/login-1.vue";
import Test from "@/views/Test.vue";

import usersTable from "@/views/tables/usersTable.vue";
import techniciansTable from "@/views/tables/techniciansTable.vue";
import ordersTable from "@/views/tables/ordersTable.vue";
import showData from "@/views/show/showData.vue";

import NotFound from "@/views/error/404.vue";

import { useLoginStatusStore } from "@/stores/loginStatus";

import { getCookie } from "@/components/useCookie.js";

const routes = [
  { path: "/", redirect: "/login1" },
  { path: "/login1", name: "LoginPage", component: login1 },
  {
    path: "/main",
    component: layout,
    children: [
      {
        path: "",
        component: showData,
      },
      {
        path: "users",
        component: usersTable,
      },
      {
        path: "technicians",
        component: techniciansTable,
      },
      {
        path: "orders",
        component: ordersTable,
      },
    ],
  },
  { path: "/test", component: Test },
  {
    path: "/404",
    component: NotFound,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const openMessage = () => {
  ElMessage({
    showClose: true,
    message: "请先登录！",
    type: "warning",
  });
};
// eslint-disable-next-line no-unused-vars
router.beforeEach(async (to, from) => {
  const loginStatus = useLoginStatusStore();
  const localStorageLoginStatus = getCookie(
    "c8708d766768d65cb155e3272096eec8c3cc4d8971336368c833926f07d7f6a9"
  );
  if (localStorageLoginStatus === "27974a0e7646329d1d8826536f2865a04d7ff058") {
    loginStatus.isAuthenticated = true;
  }
  if (!loginStatus.isAuthenticated && to.name !== "LoginPage") {
    // console.log(loginStatus.isAuthenticated + "+" + to.name);
    // console.log(loginStatus.isAuthenticated && to.name !== "LoginPage");
    // 将用户重定向到登录页面
    openMessage();
    return { name: "LoginPage" };
  }
});

export default router;
