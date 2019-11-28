<template>
  <div>
    <div class="right">
      <a-input-group class="input" compact>
        <a-input class="box" size="large" placeholder="enter your key words" />
        <!-- <a-select
          class="box"
          mode="multiple"
          :defaultValue="[]"
          style="width: 100%"
          size="large"
          placeholder="Select a Category"
        >
          <a-select-option
            v-for="i in 25"
            :key="(i + 9).toString(36) + i"
          >{{(i + 9).toString(36) + i}}</a-select-option>
        </a-select>-->
        <a-button class="box" style="float:right" size="large" type="primary">Search</a-button>
      </a-input-group>
    </div>
    <div class="left">
      <p class="title">Ideas similar to Community</p>

      <a-layout-content :style="{ padding: '0 0px', margin: '0px' }">
        <!-- cards start -->
        <a-row style="margin-bottom: 100px">
          <a-col :span="8" v-for="(idea, id) in search" :key="id">
            <a-card :title="idea.title" class="card" @click="control.project = true" hoverable>
              <icon type="star" slot="extra" @click.stop="onSave"></icon>
              <p class="cardContent">{{idea.description}}</p>
            </a-card>
          </a-col>
        </a-row>
        <!-- cards end -->
      </a-layout-content>
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
    },
    search() {
      return store.state.search;
    }
  },
  mounted() {},
  methods: {
    onSave: function() {
      // eslint-disable-next-line no-console
      console.log("A save event is triggered!");
      // We don't want to show card if save on the search page.
    }
  }
};
</script>

<style scoped>
.title {
  float: left;
  font-size: 60px;
  margin-top: 30px;
  margin-left: 22px;
  margin-right: 60px;
  margin-bottom: 20px;
  width: 100%;
  font-family: "IdeaFontBold";
}

.left {
  position: absolute;
  top: 64px;
  left: 25%;
  width: 75%;
}

.right {
  position: fixed;
  top: 64px;
  left: 0px;
  width: 25%;
  background: white;
  height: calc(100% - 64px);
  overflow: scroll;
  border-right: 1px solid #e8e8e8;
}

.card {
  width: 90%;
  margin: 5%;
}

.input {
  float: left;
  margin-top: 20px;
  margin-left: 5%;
  width: 90%;
}

.card .cardContent {
  overflow: hidden;
  width: calc(100% - 0px);
  box-sizing: border-box;
  white-space: pre-wrap;
  display: -webkit-box;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  height: 60px;
}

.box {
  margin-top: 15px;
}
</style>