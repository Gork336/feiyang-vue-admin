import { createRouter, createWebHistory } from "vue-router";
import login1 from "@/views/login/login-1.vue";
import Test from "@/views/Test.vue";
import usersTable from "@/views/tables/usersTable.vue";
import techniciansTable from "@/views/tables/techniciansTable.vue"
import layout from "@/components/layout.vue";

import { useLoginStatusStore } from "@/stores/loginStatus";

const routes = [
  { path: "/", redirect: "/login1" },
  { path: "/login1", name: "LoginPage", component: login1 },
  {
    path: "/main",
    component: layout,
    children: [
      {
        path: "",
      },
      {
        path: "users",
        component: usersTable,
      },
      {
        path: "technicians",
        component: techniciansTable,
      },
    ],
  },
  { path: "/test", component: Test },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// router.beforeEach(async (to, from) => {
//   const loginStatus = useLoginStatusStore();
//   console.log(loginStatus.isAuthenticated + "+" + to.name);
//   console.log(loginStatus.isAuthenticated && to.name !== "LoginPage")
//   if (!loginStatus.isAuthenticated && to.name !== "LoginPage") {
//     // 将用户重定向到登录页面
//     alert("请登录！")
//     return { name: "LoginPage" };
//   }
// });

export default router;
