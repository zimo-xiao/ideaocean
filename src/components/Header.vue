<template>
  <a-layout-header
    class="header"
    :style="{ position: 'fixed', zIndex: 5, width: '100%', backgroundColor: '#FFFFFF', borderBottom: '1px solid #e8e8e8' }"
  >
    <div class="logo">
      <img src="../assets/logo.png" />
      <p>Idea Ocean</p>
    </div>
    <a-menu
      mode="horizontal"
      :defaultSelectedKeys="['2']"
      :style="{ lineHeight: '62px', borderBottom: '0px', backgroundColor: 'transparent' }"
    >
      <a-menu-item key="1">nav 2</a-menu-item>
      <a-menu-item key="2">nav 3</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>
<style>
.logo {
  height: 64px;
  margin: 0px;
  float: left;
}

.logo img {
  margin: 7px 24px 7px 0;
  float: left;
  height: 50px;
}

.logo p {
  margin: 3px 24px 3px 0;
  float: left;
  height: 58px;
  font-size: 22px;
  text-align: center;
  font-family: "IdeaHeadlineBold";
}
</style>