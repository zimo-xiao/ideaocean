import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from "./components/IndexPage.vue";

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: IndexPage
    }]
})

export default router