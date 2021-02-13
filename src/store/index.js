/* import createPersistedState from 'vuex-persistedstate'; */
import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication'
import suscribers from './suscribers'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules:{
        authentication,
        suscribers,
    },
    state: {
        baseUrl: '/api'
    },
    mutations:{

    },
    actions: {

    },
    /* plugins:[
        createPersistedState(),
    ], */
});