import { createRouter, createWebHistory } from "vue-router";
import Main from "@pages/Main.vue";
import Sub from "@pages/sub.vue";
import Child1Vue from "@pages/Child1.vue"
import Child2Vue from "@/pages/Child2.vue";

const routes = [
	{
    path: "/index",
    name: "Index",
    component: Main,
  },
  {
    path: "/",
    redirect: "/index",
  },
	
  
  {
    path: "/child1",
    component: Child1Vue,
		redirect: "/child1/hello",
    children: [  // 想要显示的微应用路由，都需要在主应用中注册
      {
        path: "hello",
        component: Sub, // 所有路由都使用同一个vue组件
      },
			{
        path: "home",
        component: Sub, // 所有路由都使用同一个vue组件
      },
			{
        path: "about",
        component: Sub, // 所有路由都使用同一个vue组件
      },
    ],
  },
	{
    path: "/child2",
    component: Child2Vue,
		redirect: "/child2/hello",
    children: [
      {
        path: "hello",
        component: Sub, // 所有路由都使用同一个vue组件
      },
			{
        path: "home",
        component: Sub, // 所有路由都使用同一个vue组件
      },
			{
        path: "about",
        component: Sub, // 所有路由都使用同一个vue组件
      },
    ],
  },

	{
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
