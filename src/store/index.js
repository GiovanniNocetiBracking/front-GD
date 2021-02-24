/* import createPersistedState from 'vuex-persistedstate'; */
import Vue from 'vue'
import Vuex from 'vuex'
import VueToast from 'vue-toast-notification'
import Toasted from 'vue-toasted'
import Vuelidate from 'vuelidate'

Vue.use(Vuex);
Vue.use(VueToast);
Vue.use(Toasted);
Vue.use(Vuelidate);

export default new Vuex.Store({
    strict: true,
    modules:{
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