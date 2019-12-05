<template>
  <div>
    <!--    <div class="top">-->
    <!--      <a-input-group class="input" compact>-->
    <!--        <a-input class="box" v-model="searchQuery" size="large" placeholder="enter your key words" />-->
    <!--        <a-button class="box" style="float:right" size="large" type="primary">Search</a-button>-->
    <!--      </a-input-group>-->
    <!--    </div>-->
    <div class="bottom">
      <div v-if="ideas.length > 0">
        <p class="title" v-if="searchQuery === ''">Ideas in the ocean</p>
        <p class="title" v-else>Ideas similar to "{{searchQuery}}"</p>
      </div>
      <div v-else>
        <p class="title">Sorry no ideas related to "{{searchQuery}}" is found. Maybe try being less specific?</p>
      </div>

      <a-layout-content :style="{ padding: '0 0px', margin: '0px' }">
        <!-- cards start -->
        <a-row style="margin-bottom: 100px">
          <a-col :span="8" v-for="(idea, id) in ideas" :key="id">
            <idea-card style="width: 94%; margin-left: 3%; margin-bottom: 5%" v-bind:idea="idea"></idea-card>
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
.bottom {
  top: 64px;
  position: relative;
}
</style>