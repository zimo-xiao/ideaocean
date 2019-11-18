<template>
  <div v-if="control.login">
    <div class="floatBackground" @click="control.login = false"></div>
    <div class="floatWindow shadow">
      <div class="container">
        <p class="title">Login</p>
        <p class="close">
          <a-icon type="close" @click="control.login = false" />
        </p>
      </div>
      <!-- input start -->
      <div class="container" style="margin-top: -40px">
        <a-input class="input" size="large" placeholder="username" />
        <a-input-password class="input" size="large" placeholder="password" />

        <div class="input" compact>
          <a-button style="float:right" type="primary" @click="control.login = false">Login</a-button>
        </div>
      </div>
      <!-- input end -->
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data: function() {
    return {};
  },
  computed: {
    control() {
      return store.state.control;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.floatWindow .title {
  float: left;
  font-size: 60px;
  margin-top: 30px;
  margin-left: 0px;
  margin-right: 60px;
  margin-bottom: 0px;
  width: calc(100% - 120px);
  font-family: "IdeaFontBold";
}

.floatWindow .close {
  float: left;
  width: 60px;
  margin-top: 30px;
  font-size: 60px;
  text-align: center;
  margin-right: 0px;
  color: #777;
}

.container .input {
  float: left;
  margin-top: 20px;
}
</style>