<template>
  <a-card :title="idea.title" class="card" @click="onOpenProject" hoverable>
    <icon
            type="star"
            :theme="idea.saved? 'filled' : 'outlined'"
            slot="extra"
            v-bind:style="{color: starColor}"
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
    },
    starColor () {
      return this.idea.saved ? '#f4c74b' : '#000000';
    }
  },
  methods: {
    onSave: function() {
      if (!this.idea.saved) {
        this.$notification.success({message : '"' + this.idea.title + '" added to my cove'});
      } else {
        this.$notification.error({message : '"' + this.idea.title + '" removed from my cove'});
      }
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