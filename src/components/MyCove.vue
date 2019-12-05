<template>
    <div class="bottom">
        <p class="title">Saved ideas</p>

        <a-layout-content :style="{ padding: '0 0px', margin: '0px' }">
            <!-- cards start -->
            <a-row style="margin-bottom: 100px">
                <a-col :span="8" v-for="(idea, id) in saved" :key="id">
                    <idea-card style="width: 94%; margin-left: 3%; margin-bottom: 5%" v-bind:idea="idea"></idea-card>
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
        components: {IdeaCard},
        computed: {
            control() {
                return store.state.control;
            },
            saved() {
                return store.state.ideas.filter(idea => {
                    return idea.saved;
                });
            }
        },
        mounted() {}
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