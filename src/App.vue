<template>
  <div id="app">
    <a-layout>
      <Header />
      <router-view />
      <Footer />
    </a-layout>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
@font-face {
  font-family: "IdeaFont";
  src: url("./assets/font/KlarnaText-Regular.woff") format("woff");
}

@font-face {
  font-family: "IdeaFontMedium";
  src: url("./assets/font/KlarnaText-Medium.woff") format("woff");
}

@font-face {
  font-family: "IdeaFontBold";
  src: url("./assets/font/KlarnaText-Bold.woff") format("woff");
}

@font-face {
  font-family: "IdeaHeadlineBold";
  src: url("./assets/font/KlarnaHeadline-Bold.woff") format("woff");
}
</style>
