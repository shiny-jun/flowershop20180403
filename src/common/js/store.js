/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    uName: ''
}

const mutations = {
    set(state,n){
        state.uName = n.n
    },
    del(state){
        state.uName = ''
    }
}

export default new Vuex.Store({
	state, mutations
})