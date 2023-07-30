import { createRouter, createWebHistory } from "vue-router";
import login1 from "@/views/login/login-1.vue";
import Test from "@/views/Test.vue";
import usersTable from "@/views/tables/usersTable.vue";

const routes = [
  { path: "/", component: Test },
  { path: "/login1", component: login1 },
  { path: "/users", component: usersTable },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
