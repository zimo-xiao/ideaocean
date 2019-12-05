<template>
  <div>
<!--    <div class="top">-->
<!--      <a-input-group class="input" compact>-->
<!--        <a-input class="box" v-model="searchQuery" size="large" placeholder="enter your key words" />-->
<!--        <a-button class="box" style="float:right" size="large" type="primary">Search</a-button>-->
<!--      </a-input-group>-->
<!--    </div>-->
    <div class="bottom">
      <p class="title">Ideas similar to "{{searchQuery}}"</p>

      <a-layout-content :style="{ padding: '0 0px', margin: '0px' }">
        <!-- cards start -->
        <a-row style="margin-bottom: 100px">
          <a-col :span="8" v-for="(idea, id) in ideas" :key="id">
            <idea-card v-bind:idea="idea"></idea-card>
          </a-col>
        </a-row>
        <!-- cards end -->
      </a-layout-content>
    </div>
  </div>
</template>

<script>
import store from "../store";
import IdeaCard from "./IdeaCard";


export default {
  components: { IdeaCard },
  computed: {
    control() {
      return store.state.control;
    },
    searchQuery() {
      return store.state.query;
    },
    ideas() {
      const query = this.searchQuery.toLowerCase();
      return store.state.ideas.filter(idea => {
        return (
          idea.title.toLowerCase().includes(query) ||
          idea.description.toLowerCase().includes(query)
        );
      });
    }
  },
  mounted() {
    store.state.control.search = true;
    store.state.control.index = false;
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

.top {
  top: 64px;
  position: fixed;
  background: white;
  width: 100%;
}

.bottom {
  top: 64px;
  position: fixed;
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

.input {
  float: left;
  margin-top: 20px;
  margin-left: 5%;
  width: 90%;
}

.box {
  margin-top: 15px;
}
</style>