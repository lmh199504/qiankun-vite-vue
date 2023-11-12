import { App, createApp } from "vue";
import "./style.css";
import AppCom from "./App.vue";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

/**
 * 这里需要特别注意：我们将router定义为了一个函数。
 * 因为主应用部署在二级目录，当微应用不独立运行时，如果微应用的router没有带上主应用二级目录作为前缀，访问会出错
 */
import { router } from "./router"; // router

let app: App;
// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  app = createApp(AppCom);
  // 独立运行，路由前缀为空
  app.use(router(""));
  app.mount("#app");
} else {
  // 作为微应用运行
  renderWithQiankun({
    // 调用renderWithQiankun
    mount(props) {
      app = createApp(AppCom);
      app.use(router(props.routerBase)); // 路由前缀添加router(props.routerBase)，routerBase是从主应用中传过来的
      app.mount(
        props.container ? props.container.querySelector("#app") : "#app"
      );
    },
    bootstrap() {
      console.log("-- bootstrap --");
    },
    update() {
      console.log("-- update --");
    },
    unmount() {
      console.log("-- unmount --", app);
      app?.unmount();
    },
  });
}
