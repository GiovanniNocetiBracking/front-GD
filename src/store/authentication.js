import router from '../router'
import HTTP from '../http'

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
            return HTTP().post('/auth/register', {
                email: state.registerEmail,
                password: state.registerPassword,
                username: state.registerUserName,
                suscribe: state.stateToSuscribe 
            })
            .then(({data}) => {
                commit('setToken', data.token)
                router.push('/admin/dashboard')
            })
            .catch(() => {
                commit('setRegisterError', 'A ocurrido un error al intentar ingresar al sistema de gestion')
            })
        },
        login({state, commit}) {
            return HTTP().post('/auth/login', {
                email: state.loginEmail,
                password: state.loginPassword,
            })
            .then(({data}) => {
                commit('setToken', data.token)
                router.push('/admin/dashboard')
            })
            .catch(() => {
                commit('setLoginError', 'A ocurrido un error al intentar ingresar al sistema de gestion')
            })
        },
        logOut({commit}){
            commit('setToken', null)
            window.location.href = "/"
        },
    }


}