<template>
  <div>
    <h1>我是子应用2</h1>

    <div class="menu-wrapper">
      <div class="menu-item">
        <RouterLink to="/home" active-class="active">home</RouterLink>
      </div>
      <div class="menu-item">
        <RouterLink to="/about" active-class="active">about</RouterLink>
      </div>
      <div class="menu-item">
        <RouterLink to="/hello" active-class="active">hello</RouterLink>
      </div>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped lang="less">
.menu-wrapper {
  display: flex;
  .menu-item {
    margin-right: 10px;
    &:has(.active) {
      color: red!important;
    }
  }
  .router-link-exact-active {
    color: red;
  }
}
</style>
