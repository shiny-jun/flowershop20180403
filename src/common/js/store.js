/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import vuexAlong from 'vuex-along'

Vue.use(Vuex);

const state = {
    uName: '',
    userId: null
}

const mutations = {
    set(state,n){
        state.uName = n.n
    },
    del(state){
        state.uName = ''
    },
    setId(state,n){
        state.userId = n.n
    },
    delId(state){
        state.userId = null
    }
}

export default new Vuex.Store({
	state, mutations,plugins: [vuexAlong]
})
