import { createWebHistory, createRouter } from "vue-router";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/home",
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/hello",
    component: () => import("@/views/hello.vue"),
  },
  {
    path: "/about",
    component: () => import("@/views/about.vue"),
  },
];

const router = (parentBase: string) => {
  const base = qiankunWindow.__POWERED_BY_QIANKUN__
    ? `${parentBase}`
    : "/";
  return createRouter({
    history: createWebHistory(base),
    routes: constantRoutes,
  });
};

export { router };
