<template>
  <div v-if="control.project">
    <div class="floatBackground" @click="control.project = false"></div>
    <div class="floatWindow shadow" id="project_container">
      <div class="container">
        <p class="title">{{project.title}}</p>
        <p class="close">
          <a-icon type="close" @click="control.project = false" />
        </p>
      </div>

      <!-- content start -->
      <div class="container">
        <a-row>
          <a-col :span="24">
            <div style="description">
              <img src="../assets/user-img.png" class="authorImg" />
              <p class="author">{{project.author}}, created on {{projectTime}}</p>
            </div>
            <p class="description" style="word-break: normal">{{project.description}}</p>
          </a-col>
        </a-row>
      </div>
      <!-- content end -->

      <!-- like & favourite start -->
      <div class="container">
        <a-col :span="22">
          <!--Hard margin override here because we want the up and down vote to look closer to the number-->
          <a-button
            :type="project.upvoted? 'primary' : 'default'"
            @click="upvote"
            class="vote"
            shape="round"
            icon="like"
          >{{project.votes}}</a-button>
          <a-button class="vote" type="default" shape="round" @click.stop="onSave">
            <icon
                    type="star"
                    :theme="saved? 'filled' : 'outlined'"
                    v-bind:style="{color: starColor}"
                    />
            Favourite
          </a-button>
        </a-col>
      </div>
      <!-- like and favourite end -->

      <!-- comment start -->
      <div class="container commentSection" style="margin-top:20px;margin-bottom:50px;">
        <a-textarea v-model="commentInput" placeholder="Comment..." :rows="4" />
        <div style="float:left;width:100%">
          <a-button
            style="float:right;margin-top:20px"
            type="primary"
            @click="onComment"
            v-scroll-to="{
              el: '#project_bottom',
              container: '#project_container'
          }"
          >Add Comment</a-button>
        </div>

        <a-card
          v-for="(comment, id) in project.comments"
          :title="comment.author"
          class="commentCard"
          :key="id"
        >
          <p>{{comment.content}}</p>
          <!-- <a-button class="vote" type="default" shape="circle" icon="like"></a-button> -->
        </a-card>

        <div id="project_bottom" />
      </div>
      <!-- comment end -->
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data: function() {
    return { commentInput: "" };
  },
  computed: {
    control() {
      return store.state.control;
    },
    project() {
      return store.state.currentViewingProject;
    },
    projectTime() {
      return new Date(
        store.state.currentViewingProject.postTime
      ).toDateString();
    },
    starColor () {
      return store.state.currentViewingProject.saved ? '#f4c74b' : '#000000';
    },
    saved () {
      return store.state.currentViewingProject.saved;
    }

  },
  mounted() {},
  methods: {
    upvote: function() {
      // if not already upvoted, upvote and add 1
      if (!store.state.currentViewingProject.upvoted) {
        store.state.currentViewingProject.upvoted = true;
        store.state.currentViewingProject.votes += 1;
      } else {
        store.state.currentViewingProject.upvoted = false;
        store.state.currentViewingProject.votes -= 1;
      }
    },
    onComment: function() {
      if (this.commentInput == "") {
        this.$message.info("Please fill out all the entries");
        return;
      }

      // TODO remove hardcoded author
      store.state.currentViewingProject.comments.push({
        author: "Cornfield Warriors",
        content: this.commentInput
      });

      this.commentInput = "";
    },
    onSave: function() {
      store.state.currentViewingProject.saved = !store.state.currentViewingProject.saved;
    }
  }
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

.container .author {
  float: left;
  margin-top: 1px;
  margin-left: 10px;
  font-size: 18px;
}

.container .authorImg {
  float: left;
  margin: 0px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.container .description {
  float: left;
  width: 100%;
  font-size: 18px;
  line-height: 40px;
}

.container .vote {
  float: left;
  margin-top: 5px;
  margin-left: 0px;
  margin-right: 5px;
  height: 42px;
  margin-bottom: 10px;
}

.voteCount {
  width: 42px;
  height: 35px;
  padding-left: 0px;
  padding-right: 0px;
  color: black;
  font-size: large;
}

.commentSection {
  padding-top: 20px;
  border-top: 1px solid grey;
}

.commentCard {
  float: left;
  margin-top: 20px;
  width: 100%;
}
</style>