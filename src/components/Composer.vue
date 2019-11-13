<template>
  <div v-if="control.composer">
    <div class="floatBackground" @click="control.composer = false"></div>
    <div class="floatWindow shadow">
      <div class="top">
        <a-icon
          type="close"
          @click="control.composer = false"
          :style="{ float: 'right', margin: '30px', fontSize: '34px' }"
        />
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
  left: 20%;
  width: 60%;
  height: 80%;
  background-color: white;
  z-index: 1001;
  border-radius: 2px;
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

.floatWindow .top {
  float: left;
  width: 100%;
}
</style>