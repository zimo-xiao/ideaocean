<template>
    <a-card :title="idea.title" class="card" @click="control.project = true" hoverable>
        <icon type="star" slot="extra" @click.stop="onSave"></icon>
        <p class="cardContent">{{idea.description}}</p>
    </a-card>
</template>

<script>
    import store from "../store";

    export default {
        name: "IdeaCard",
        props: ['idea'],
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
            }
        }
    }
</script>

<style scoped>
    .card .cardContent {
        overflow: hidden;
        width: calc(100% - 0px);
        box-sizing: border-box;
        white-space: pre-wrap;
        display: -webkit-box;
        word-break: break-all;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        height: 60px;
    }
</style>