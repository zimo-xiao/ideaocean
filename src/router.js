import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from "./components/IndexPage.vue";
import SearchPage from "./components/SearchPage.vue";

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: IndexPage
    }, {
        path: '/search',
        component: SearchPage
    }]
})

export default router