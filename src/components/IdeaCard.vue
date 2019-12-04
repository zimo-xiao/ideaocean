<template>
  <a-card :title="idea.title" class="card" @click="onOpenProject" hoverable>
    <icon type="star" slot="extra" @click.stop="onSave"></icon>
    <p class="cardContent">{{idea.description}}</p>
  </a-card>
</template>

<script>
import store from "../store";

export default {
  name: "IdeaCard",
  props: ["idea"],
  computed: {
    control() {
      return store.state.control;
    }
  },
  methods: {
    onSave: function() {
      // eslint-disable-next-line no-console
      console.log("A save event is triggered!");
      // We don't want to show card if save on the search page.
      // okay cool this does modify the underlying state.
      // store.state.ideas = []
    },
    onOpenProject: function() {
      store.state.control.project = true;
      store.state.currentViewingProject = this.idea;
    }
  }
};
</script>

<style scoped>
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