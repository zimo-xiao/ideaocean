import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        control: {
            composer: false,
            project: true
        }
    }
})

export default store