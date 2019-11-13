<template>
  <div v-if="control.composer">
    <div class="floatBackground" @click="control.composer = false"></div>
    <div class="floatWindow shadow">
      <div class="container">
        <p class="close">
          <a-icon type="close" @click="control.composer = false" />
        </p>
        <p class="title">Compose Your Idea</p>
      </div>
      <div class="container" style="margin-top: -20px;">
        <a-input size="large" placeholder="Title" />
        <a-textarea placeholder="Description" :rows="4" />
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

<style>
.floatWindow {
  position: fixed;
  top: 10%;
  left: 25%;
  width: 50%;
  height: 80%;
  background-color: white;
  z-index: 1001;
  border-radius: 2px;
  overflow: scroll;
}

a-input {
  margin-bottom: 25px;
}

a-textarea {
  margin-bottom: 25px;
}

.floatBackground {
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1000;
  opacity: 0.4;
}

.floatWindow .container {
  float: left;
  width: 90%;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 5%;
}

.floatWindow .title {
  float: left;
  font-size: 60px;
  margin-top: 30px;
  margin-left: 0px;
  font-family: "IdeaHeadlineBold";
}

.floatWindow .close {
  float: right;
  margin-top: 30px;
  font-size: 60px;
  text-align: center;
  margin-right: 0px;
  color: #777;
}
</style>