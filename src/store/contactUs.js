import router from '../router'
import axios from 'axios'
import Vue from 'vue';
import Vuelidate from 'vuelidate'

export default {
    namespaced:true,
    state:{
        contactName: null,
        contactEmail: null,
        contactSubject: null,
        contactMessage: null,
    },
    mutations: {
        setContactName(state, name){
            state.contactName = name
        },
        setContactEmail(state, email){
            state.contactEmail = email
        },
        setContactSubject(state, subject){
            state.contactSubject = subject
        },
        setContactMessage(state, message){
            state.contactMessage = message
        },
    },
    actions:{
        sentMessage({state, commit}){
            
            const apiUrl = process.env.VUE_APP_URL_API
            return axios.post(apiUrl +'/landing/contactUs', {
                name: state.contactName,
                email: state.contactEmail,
                subject: state.contactSubject,
                message: state.contactMessage,
            })
            .then(() => {               
                let toast = Vue.toasted.show("Gracias por escribirnos !!", { 
                    theme: "outline", 
                    position: "top-center", 
                    duration : 3000
                })                
            })
            .then(() => {
                commit('setContactName', null)
                commit('setContactEmail', null)
                commit('setContactSubject', null)
                commit('setContactMessage', null)
            })                 
            
        }
        
    },
}