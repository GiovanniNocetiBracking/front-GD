import router from '../router'
import HTTP from '../http'

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
            return HTTP().post('/landing/suscribe', {
                email: state.suscriberEmail,
                suscribe: state.isSuscribe
                
            })
            .then(() => {
                commit('setSuscriberEmail', null)
            })
        },
    }
}