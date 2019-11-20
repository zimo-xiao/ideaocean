import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import ideas from './ideas'
import search from './search'

const store = new Vuex.Store({
    state: {
        control: {
            composer: false,
            project: false,
            login: false,
            register: false
        },
        ideas: ideas,
        search: search
    }
})

export default store