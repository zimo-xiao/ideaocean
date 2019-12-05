<template>
  <div>
    <div
      :style="{ width: '100%', height: primaryElemHeight, zIndex: '100', position: 'absolute', backgroundColor: '#97C9FA' }"
    >
      <div class="primaryHeaderCenterContent">
        <img src="../assets/logo.png" />
        <p class="title">Idea Ocean</p>
        <p class="description">The Place for Project Prompts</p>
        <div class="functionBar shadow">
          <a-input-search
            placeholder="what do you want to search?"
            @search="onSearch"
            v-model="indexPageQuery"
            enterButton
            size="large"
            class="search"
            :style="{ position: 'relative', top: '0px', left: '0px', marginTop: '25px', marginBottom: '25px', marginLeft: '3%', width: '76%' }"
          />
          <a-button
            type="primary"
            size="large"
            @click="control.composer = true"
            :style="{ position: 'relative', top: '0px', left: '0px', marginTop: '25px', marginBottom: '25px', marginLeft: '2%', width: '16%' }"
            ghost
          >
            <a-icon type="plus" />Add Idea
          </a-button>
        </div>
        <p class="guide bounce" style="color: #384656" v-scroll-to="'#cardSpace'">
          dive right in
          <br />
          <a-icon type="down" />
        </p>
      </div>
    </div>
    <a-layout-content :style="{ padding: '0 0px', margin: '0px' }">
      <div :style="{ width: '100%', height: primaryElemHeight}"></div>
      <!-- cards start -->
      <a-row style="margin-bottom: 100px" id="cardSpace">
        <a-col :span="6" v-for="(idea, id) in ideas" :key="id">
          <idea-card v-bind:idea="idea"></idea-card>
        </a-col>
      </a-row>
      <!-- cards end -->
    </a-layout-content>
  </div>
</template>

<script>
import store from "../store";
import IdeaCard from "./IdeaCard";

export default {
  components: { IdeaCard },
  data: function() {
    return {
      primaryElemHeight: "700px",
      indexPageQuery: ""
    };
  },
  computed: {
    control() {
      return store.state.control;
    },
    ideas() {
      return store.state.ideas;
    }
  },
  mounted() {},
  methods: {
    onSearch: function() {
      store.state.indexPageQuery = this.indexPageQuery;
      this.$router.push("search");
    }
  }
};
</script>

<style scoped>
.primaryHeaderCenterContent {
  position: relative;
  top: 50%;
  left: 50%;
  width: 55%;
  /* background-color: red; */
  transform: perspective(1px) translateY(-50%) translateX(-50%);
}

.primaryHeaderCenterContent img {
  width: 16%;
  left: 42%;
  right: 42%;
  top: 0px;
  margin: 0px;
  position: relative;
}

.primaryHeaderCenterContent .title {
  width: 100%;
  left: 0px;
  top: 0px;
  font-size: 60px;
  position: relative;
  text-align: center;
  margin: 0px;
  font-family: "IdeaHeadlineBold";
}

.primaryHeaderCenterContent .description {
  width: 100%;
  left: 0px;
  top: 0px;
  font-size: 23px;
  position: relative;
  text-align: center;
  margin: 0px;
  font-family: "IdeaFontBold";
}

.primaryHeaderCenterContent .functionBar {
  width: 100%;
  left: 0px;
  top: 25px;
  border-radius: 2px;
  background-color: white;
  position: relative;
  margin: 0px;
}

.primaryHeaderCenterContent .guide {
  width: 100%;
  left: 0px;
  top: 100px;
  font-size: 18px;
  position: relative;
  text-align: center;
  margin: 0px;
  font-family: "IdeaFont";
}

.card {
  width: 90%;
  margin: 5%;
}

.card .cardContent {
  overflow: hidden;
  width: calc(100% - 0px);
  box-sizing: border-box;
  white-space: pre-wrap;
  display: -webkit-box;
  word-break: normal;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  height: 60px;
}
</style>