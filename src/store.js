import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import ideas from './ideas'

const store = new Vuex.Store({
    state: {
        control: {
            composer: false,
            project: false
        },
        ideas: ideas
    }
})

export default store