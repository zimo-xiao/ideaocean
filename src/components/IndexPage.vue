<template>
  <div>
    <div
      :style="{ width: '100%', height: primaryElemHeight, zIndex: '100', position: 'absolute', backgroundColor: '#97C9FA' }"
    >
      <div class="primaryHeaderCenterContent">
        <img src="../assets/logo.png" />
        <p class="title">Idea Ocean</p>
        <p class="description">The Place for Project Prompts</p>
        <div class="functionBar">
          <a-input-search
            placeholder="input search text"
            @search="onSearch"
            enterButton="Search"
            size="large"
            class="search"
            :style="{ position: 'relative', top: '0px', left: '0px', marginTop: '25px', marginBottom: '25px', marginLeft: '3%', width: '80%' }"
          />
          <a-button
            type="primary"
            :style="{ position: 'relative', top: '0px', left: '0px', marginTop: '25px', marginBottom: '25px', marginLeft: '2%', width: '12%' }"
            ghost
          >Primary</a-button>
        </div>
      </div>
    </div>
    <a-layout-content :style="{ padding: '0 0px', margin: '0px' }">
      <div :style="{ width: '100%', height: primaryElemHeight}"></div>
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '3080px' }">Content</div>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      primaryElemHeight: "600px"
    };
  },
  computed: {},
  mounted() {}
};
</script>

<style scoped>
.primaryHeaderCenterContent {
  position: relative;
  top: 50%;
  left: 50%;
  width: 55%;
  /* background-color: red; */
  transform: perspective(1px) translateY(-50%) translateX(-50%);
}

.primaryHeaderCenterContent img {
  width: 16%;
  left: 42%;
  right: 42%;
  top: 0px;
  margin: 0px;
  position: relative;
}

.primaryHeaderCenterContent .title {
  width: 100%;
  left: 0px;
  top: 0px;
  font-size: 60px;
  position: relative;
  text-align: center;
  margin: 0px;
  font-family: "IdeaHeadlineBold";
}

.primaryHeaderCenterContent .description {
  width: 100%;
  left: 0px;
  top: 0px;
  font-size: 24px;
  position: relative;
  text-align: center;
  margin: 0px;
  font-family: "IdeaFontBold";
}

.primaryHeaderCenterContent .functionBar {
  width: 100%;
  left: 0px;
  top: 15px;
  border-radius: 5px;
  background-color: white;
  position: relative;
  margin: 0px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
}
</style>