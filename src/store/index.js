/* import createPersistedState from 'vuex-persistedstate'; */
import Vue from 'vue'
import Vuex from 'vuex'
import VueToast from 'vue-toast-notification'
import Toasted from 'vue-toasted'
import Vuelidate from 'vuelidate'
import router from '@/router'

Vue.use(Vuex);
Vue.use(VueToast);
Vue.use(Toasted);
Vue.use(Vuelidate);

export default new Vuex.Store({
    strict: true,
    modules:{
    },
    state: {
        baseUrl: '/api',
        token: null
    },
    getters:{
        isLoggedIn(state){
            return !!state.token
        }
    },
    mutations:{
        setToken(state, token) {
            state.token = token
        }
    },
    actions: {
        logOut({commit}){
            commit('setToken', null)
            if(router.location != '/'){
                router.push('/')
            }
        }
    },    
});