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
      <!-- input start -->
      <div class="container" style="margin-top: -40px">
        <a-input class="input" size="large" placeholder="Title" />

        <a-textarea class="input" placeholder="Description" :rows="4" />

        <a-input-group class="input" compact>
          <a-select defaultValue="Option1-1">
            <a-select-option value="Option1-1">Category-1</a-select-option>
            <a-select-option value="Option1-2">Category-2</a-select-option>
          </a-select>
          <a-select defaultValue="Option2-2">
            <a-select-option value="Option2-1">Post As Cornfield Warrior</a-select-option>
            <a-select-option value="Option2-2">Post As Anonymous</a-select-option>
          </a-select>
          <a-button style="float:right" type="primary">Add Comment</a-button>
        </a-input-group>
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