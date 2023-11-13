<template>
  <div class="layout">
    <div class="side">
      <div class="menu-item">
        <RouterLink to="/">主应用</RouterLink>
      </div>
      <div class="menu-item">
        <RouterLink to="/child1">子应用1</RouterLink>
      </div>
      <div class="menu-item">
        <RouterLink to="/child2">子应用2</RouterLink>
      </div>
      <div class="menu-item">
        <RouterLink to="/child2/hello">子应用2-hello</RouterLink>
      </div>
      <div class="menu-item">
        <RouterLink to="/child2/home">子应用2-home</RouterLink>
      </div>
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
<style scoped lang="less">
.layout {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .side {
    width: 250px;
    padding: 20px;
    border: 1px solid rosybrown;
    .menu-item {
      margin-bottom: 10px;
    }
  }

  .content {
    flex: 1;
  }
}</style>