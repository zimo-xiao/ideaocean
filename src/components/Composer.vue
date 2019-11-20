<template>
  <div v-if="control.composer">
    <div class="floatBackground" @click="control.composer = false"></div>
    <div class="floatWindow shadow">
      <div class="container">
        <p class="title" v-if="step == 1">Compose Idea</p>
        <p class="title" v-if="step == 2">Similar Ideas</p>
        <p class="close">
          <a-icon type="close" @click="control.composer = false" />
        </p>
      </div>
      <!-- input start -->
      <div class="container" v-if="step == 1" style="margin-top: -40px">
        <a-input class="input" size="large" placeholder="Title" />

        <a-textarea class="input" placeholder="Description" :rows="4" />

        <a-input-group class="input" compact>
          <!-- <a-select defaultValue="Option1-1">
            <a-select-option value="Option1-1">Category-1</a-select-option>
            <a-select-option value="Option1-2">Category-2</a-select-option>
          </a-select>-->
          <a-select defaultValue="Option2-2">
            <a-select-option value="Option2-1">Post As Cornfield Warrior</a-select-option>
            <a-select-option value="Option2-2">Post As Anonymous</a-select-option>
          </a-select>
          <a-button style="float:right" type="primary" @click="step = 2">Next Step</a-button>
        </a-input-group>
      </div>
      <!-- input end -->

      <!-- similar idea start -->
      <div class="container" v-if="step == 2" style="margin-top: -40px">
        <div class="input" style="width:100%" v-for="index in 4" :key="index">
          <a href="/#/?idea=1" target="_blank">
            <a-card title="Default size card" class="card">
              <a slot="extra">view in new tab</a>
              <p>card content</p>
              <p>card content</p>
              <p>card content</p>
            </a-card>
          </a>
        </div>
        <div class="input" style="width:100%;margin-bottom:30px;">
          <a-button
            style="float:right"
            type="primary"
            @click="control.composer = false;control.project = true"
          >Submit Unique Idea</a-button>
          <a-button
            style="float:right;margin-right:10px;"
            type="default"
            @click="step = 1"
          >Last Step</a-button>
        </div>
      </div>
      <!-- similar idea end -->
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data: function() {
    return {
      step: 1
    };
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

.container .card {
  float: left;
  margin: 0px;
  width: 100%;
}
</style>