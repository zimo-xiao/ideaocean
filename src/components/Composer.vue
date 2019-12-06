<template>
    <div v-if="control.composer">
        <div class="floatBackground" @click="onCloseComposer"></div>
        <div class="floatWindow shadow">
            <div class="container">
                <p class="title" v-if="step == 1">Compose Idea</p>
                <p class="title" v-if="step == 2">Similar Ideas</p>
                <p class="close">
                    <a-icon type="close" @click="onCloseComposer()"/>
                </p>
            </div>
            <div class="container" v-if="step == 1" style="margin-top: -40px">
                <a-input class="input" size="large" v-model="newIdea.title" placeholder="Summarize idea"/>
                <a-textarea
                        class="input"
                        v-model="newIdea.description"
                        placeholder="More details about the idea"
                        :rows="4"
                />
                <a-input-group class="input" compact>
                    <a-select defaultValue="Cornfield Warrior" v-model="newIdea.author">
                        <a-select-option value="Cornfield Warrior">Post As Cornfield Warrior</a-select-option>
                        <a-select-option value="Anonymous">Post As Anonymous</a-select-option>
                    </a-select>
                    <a-button style="float:right" type="primary" @click="onSubmitUniqueIdea">Submit Idea</a-button>
                </a-input-group>
            </div>
        </div>
    </div>
</template>

<script>
  import store from "../store";

  export default {
    data: function () {
      return {
        step: 1,
        newIdea: {
          title: "",
          description: "",
          author: "Cornfield Warrior"
        }
      };
    },
    computed: {
      control() {
        return store.state.control;
      }
    },
    mounted() {
    },
    methods: {
      onCloseComposer: function () {
        var that = this;
        this.$confirm({
          title: "Do you want to leave?",
          content: "Data might lost when you leave the compose page",
          onOk() {
            that.control.composer = false;
            that.newIdea.title = "";
            that.newIdea.description = "";
          },
          onCancel() {
          }
        });
      },
      onSubmitUniqueIdea: function () {
        if (
          this.newIdea.title == "" ||
          this.newIdea.description == "" ||
          this.newIdea.author == ""
        ) {
          this.$message.info("Please fill out all the entries");
          return;
        }

        this.step = 1;
        const newidea = {
          title: this.newIdea.title,
          description: this.newIdea.description,
          author: this.newIdea.author,
          id: Math.max.apply(Math, store.state.ideas.map(i => i.id)) + 1,
          postTime: Date.now(),
          comments: [],
          upvoted: false,
          downvoted: false,
          votes: 0,
          saved: true
        };
        store.state.ideas.unshift(newidea);
        store.state.currentViewingProject = newidea;
        store.state.control.composer = false;
        store.state.control.project = true;
        this.$notification.success({
          message: "New Idea '" + this.newIdea.title + "' added"
        });
        this.newIdea.title = "";
        this.newIdea.description = "";
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