<template>
  <div id="sub-container2"></div>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { MicroApp, loadMicroApp } from "qiankun";
import { onMounted, onUnmounted } from "vue";

let microApp: MicroApp 
onMounted(() => {
  // 加载微应用
  microApp = loadMicroApp({
    name: "child2",
    entry: "//localhost:40002",
    container: "#sub-container2",
    props: {
      routerBase: "/child2", // 下发基础路由
      container: "#sub-container2",
    },
  });
});
onUnmounted(() => {
  microApp.unmount()
})
</script>
