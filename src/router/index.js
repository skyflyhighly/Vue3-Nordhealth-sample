import { createWebHistory, createRouter } from "vue-router";

import Login from "../pages/login.vue";
import Dashboard from "../pages/dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
