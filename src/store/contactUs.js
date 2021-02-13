import router from '../router'
import axios from 'axios'

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
            .then(({data}) => {
                console.log('enviado')
            })      
            
        }
        
    },
}