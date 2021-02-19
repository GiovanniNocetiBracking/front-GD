import router from '../router'
import axios from 'axios'
import Vue from 'vue'
import VueToastify from 'vue-toastify';

Vue.use(VueToastify)

export default {
    namespaced:true,
    state:{
        registerEmail: null,
        registerPassword: null,
        registerUserName: null,
        loginEmail: null,
        loginPassword: null,
        registerError:null,
        loginError:null,
        token: null,
        stateSuscriber: false,
        stateToSuscribe: 0,

    },
    getters:{
        isLoggedIn(state){
            return !!state.token
        }
    },
    mutations:{
        setToken( state, token){
            state.token = token
        },
        setRegisterEmail(state, email){
            state.registerEmail = email
        },
        setRegisterPassword(state, password){
            state.registerPassword = password
        },
        
        setRegisterUserName(state, username){
            state.registerUserName = username
        },
        setLoginEmail(state, email){
            state.loginEmail = email
        },
        setLoginPassword(state, password){
            state.loginPassword = password
        },
        setLoginError(state, error){
            state.loginError = error
        },
        setRegisterError(state, error){
            state.registerError = error
        },
        setStateSuscriber(state, suscriber){
            state.stateSuscriber = suscriber
            suscriber ? state.stateToSuscribe = 1 : state.stateToSuscribe = 0            
        },

    },
    actions:{
        register({state, commit}) {
            const apiUrl = process.env.VUE_APP_URL_API
            return axios.post(apiUrl + '/auth/register', {
                email: state.registerEmail,
                password: state.registerPassword,
                username: state.registerUserName,
                suscribe: state.stateToSuscribe 
            })
            .then(({data}) => {
                commit('setToken', data.token)
                if(data.registrado){
                    Vue.$vToastify.success(data.registrado)
                }else{
                    Vue.$vToastify.error(data.error)
                }
            })
            .catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
                console.log(error.config);
              });
        },
        login({state, commit}) {
            const apiUrl = process.env.VUE_APP_URL_API
            return axios.post(apiUrl + '/auth/login', {
                email: state.loginEmail,
                password: state.loginPassword,
            })
            .then(({data}) => {
                commit('setToken', data.token) 
                console.log(data.token)                               
            })
            .catch(() => {
                commit('setLoginError', 'A ocurrido un error al intentar ingresar al sistema de gestion')
            })
        },
        logOut({commit}){
            commit('setToken', null)
            window.location.href = "/"
        },
        
    },
    


}