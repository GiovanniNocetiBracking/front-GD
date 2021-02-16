/* import createPersistedState from 'vuex-persistedstate'; */
import Vue from 'vue';
import Vuex from 'vuex';
import VueToast from 'vue-toast-notification';
import Toasted from 'vue-toasted';
import authentication from './authentication'
import suscribers from './suscribers'
import contactUs from './contactUs'

Vue.use(Vuex);
Vue.use(VueToast);
Vue.use(Toasted);

export default new Vuex.Store({
    strict: true,
    modules:{
        authentication,
        suscribers,
        contactUs,
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