import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import createPersist, { createStorage } from 'vuex-localstorage'

import state from './state.js'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

export default new Vuex.Store({
    state: state,
    actions: actions,
    mutations: mutations,
    getters: getters,
    plugins: [createPersist({
        namespace: 'schafkopfturnierliste-state',
        initialState: {},
        // two weeks
        expires: 2 * 7 * 24 * 60 * 60 * 1e3
    })]
})