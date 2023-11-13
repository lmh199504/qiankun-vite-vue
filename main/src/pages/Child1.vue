<!-- <template>
  <div id="sub-container1"></div>
  <RouterView />
</template>

<script setup lang="ts">
import { loadMicroApp, MicroApp } from "qiankun";
import { onMounted, onUnmounted } from "vue";

let microApp: MicroApp | undefined = undefined

onMounted(() => {
  // 加载微应用
  microApp = loadMicroApp({
    name: "child1",
    entry: "//localhost:40001",
    container: "#sub-container1",
    props: {
      routerBase: "/child1", // 下发基础路由
      container: "#sub-container1",
    },
  });
});

onUnmounted(() => {
  microApp?.unmount()
})
</script> -->
<template></template>