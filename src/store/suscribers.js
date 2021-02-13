import router from '../router'
import axios from 'axios'

export default {
    namespaced:true,
    state:{
        suscriberEmail : null,
        isSuscribe: 1
    },
    mutations: {
        setSuscriberEmail(state, email){
            state.suscriberEmail = email
        },
    },
    actions:{
        suscribe({state, commit}) {
            const apiUrl = process.env.VUE_APP_URL_API
            return axios.post(apiUrl + '/api/landing/suscribe', {
                email: state.suscriberEmail,
                suscribe: state.isSuscribe
                
            })
            .then(() => {
                commit('setSuscriberEmail', null)
            })
        },
    }
}