import router from '../router'
import Vue from 'vue';
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
            try {
                const apiUrl = process.env.VUE_APP_URL_API
            return axios.post(apiUrl + '/landing/suscribe', {
                email: state.suscriberEmail,
                suscribe: state.isSuscribe                
            })
            .then(() => {
                
                let toast = Vue.toasted.show("Gracias por suscribirte !!", { 
                    theme: "outline", 
                    position: "top-center", 
                    duration : 3000
                })                    
             })
            .then(() => {
                commit('setSuscriberEmail', null)
            })
            } catch (error) {
                console.log(error)                
            }
        },
    }
}