<template>
  <div v-if="control.project">
    <div class="floatBackground" @click="control.project = false"></div>
    <div class="floatWindow shadow">
      <div class="container">
        <p class="title">Title of the idea that is really loooooooooooooooooooooooog</p>
        <p class="close">
          <a-icon type="close" @click="control.project = false" />
        </p>
      </div>

      <!-- content start -->
      <div class="container">
        <a-row>
          <a-col :span="2">
            <a-button class="vote" type="default" shape="circle" icon="like"></a-button>
            <a-button class="vote" type="default" shape="circle">200</a-button>
            <a-button class="vote" type="primary" shape="circle" icon="dislike"></a-button>
            <a-button class="vote" type="default" shape="circle" icon="pushpin"></a-button>
          </a-col>
          <a-col :span="22">
            <div style="description">
              <img src="../assets/user-img.png" class="authorImg" />
              <p class="author">Author Name, created at 2019-10-10</p>
            </div>
            <p class="description">
              First Gentleman
              His daughter, and the heir of's kingdom, whom
              He purposed to his wife's sole son--a widow
              That late he married--hath referr'd herself
              Unto a poor but worthy gentleman: she's wedded;
              Her husband banish'd; she imprison'd: all
              Is outward sorrow; though I think the king
              Be touch'd at very heart.
              Second Gentleman
              None but the king?
              First Gentleman
              He that hath lost her too; so is the queen,
              That most desired the match; but not a courtier,
              Although they wear their faces to the bent
              Of the king's look's, hath a heart that is not
              Glad at the thing they scowl at.
              Second Gentleman
              And why so?
              First Gentleman
              He that hath miss'd the princess is a thing
              Too bad for bad report: and he that hath her--
              I mean, that married her, alack, good man!
              And therefore banish'd--is a creature such
              As, to seek through the regions of the earth
              For one his like, there would be something failing
              In him that should compare. I do not think
              So fair an outward and such stuff within
              Endows a man but he.
              Second Gentleman
              You speak him far.
              First Gentleman
              I do extend him, sir, within himself,
              Crush him together rather than unfold
              His measure duly.
              Second Gentleman
              What's his name and birth?
              First Gentleman
              I cannot delve him to the root: his father
              Was call'd Sicilius, who did join his honour
              Against the Romans with Cassibelan,
              But had his titles by Tenantius whom
              He served with glory and admired success,
              So gain'd the sur-addition Leonatus;
              And had, besides this gentleman in question,
              Two other sons, who in the wars o' the time
              Died with their swords in hand; for which
              their father,
              Then old and fond of issue, took such sorrow
              That he quit being, and his gentle lady,
              Big of this gentleman our theme, deceased
              As he was born. The king he takes the babe
              To his protection, calls him Posthumus Leonatus,
              Breeds him and makes him of his bed-chamber,
              Puts to him all the learnings that his time
              Could make him the receiver of; which he took,
              As we do air, fast as 'twas minister'd,
              And in's spring became a harvest, lived in court--
              Which rare it is to do--most praised, most loved,
              A sample to the youngest, to the more mature
              A glass that feated them, and to the graver
              A child that guided dotards; to his mistress,
              For whom he now is banish'd, her own price
              Proclaims how she esteem'd him and his virtue;
              By her election may be truly read
              What kind of man he is.
              Second Gentleman
              I honour him
              Even out of your report. But, pray you, tell me,
              Is she sole child to the king?
              First Gentleman
              His only child.
              He had two sons: if this be worth your hearing,
              Mark it: the eldest of them at three years old,
              I' the swathing-clothes the other, from their nursery
              Were stol'n, and to this hour no guess in knowledge
              Which way they went.
              Second Gentleman
              How long is this ago?
              First Gentleman
              Some twenty years.
            </p>
          </a-col>
        </a-row>
      </div>
      <!-- content end -->

      <!-- comment start -->
      <div class="container commentSection" style="margin-top:20px;margin-bottom:50px;">
        <a-textarea placeholder="Description" :rows="4" />
        <div style="float:left;width:100%">
          <a-button style="float:right;margin-top:20px" type="primary">Add Comment</a-button>
        </div>
        <a-card title="Zimo Xiao" class="commentCard">
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
          <a-button class="vote" type="default" shape="circle" icon="like"></a-button>
        </a-card>
      </div>
      <!-- comment end -->
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
  width: 42px;
  height: 42px;
  margin-bottom: 10px;
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