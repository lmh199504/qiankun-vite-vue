import { registerMicroApps, start } from "qiankun";

const microApps = [
  {
    name: "child1",
    entry: "//localhost:40001",
    path: '/child1',
    container: "#sub-container1",
    activeRule: "/child1"
  },
  {
    name: "child2",
    entry: "//localhost:40002",
    path: '/child2',
    container: "#sub-container2",
    activeRule: '/child2',
  },
];
const apps = microApps.map((item) => {
  return {
    ...item,
    container: item.container,
    // 传递给子应用的参数
    props: {
      routerBase: item.path, // 下发基础路由
      container: item.container,
    },
  };
});

registerMicroApps(apps);

start()

