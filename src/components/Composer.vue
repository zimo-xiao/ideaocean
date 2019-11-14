<template>
  <div v-if="control.composer">
    <div class="floatBackground" @click="control.composer = false"></div>
    <div class="floatWindow shadow">
      <div class="container">
        <p class="title">Compose Idea</p>
        <p class="close">
          <a-icon type="close" @click="control.composer = false" />
        </p>
      </div>
      <div class="container" style="margin-top: -40px">
        <a-input class="input" size="large" placeholder="large size" />
        <a-textarea class="input" placeholder="Description" :rows="4" />
        <div style="float:left;width:100%">
          <a-button style="float:right;margin-top:20px" type="primary">Add Comment</a-button>
        </div>
      </div>
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