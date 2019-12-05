<template>
  <a-card :title="idea.title" class="card" @click="onOpenProject" hoverable>
    <icon
            type="star"
            :theme="idea.saved? 'filled' : 'outlined'"
            slot="extra"
            style="color:#f4c74b"
            @click.stop="onSave">
    </icon>
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
      // We don't want to show card if save on the search page.
      this.idea.saved = !this.idea.saved
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