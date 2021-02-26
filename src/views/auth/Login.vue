<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-gray-600 text-sm font-bold">
                Sign in with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="github" />
                Github
              </button>
              <button
                class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-gray-500 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form  @submit.prevent="loginClick()" method="post" >
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input                  
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  v-model="formLogin.email"
                  @blur="$v.formLogin.email.$touch()"
                />
                <div v-if="$v.formLogin.email.$error">
                    <p class="text-red-500" v-if="!$v.formLogin.email.required">El campo
                        email es requerido!</p>
                    <p class="text-red-500" v-if="!$v.formLogin.email.email">El campo
                        email debe ser valido!</p>
                </div>
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  v-model="formLogin.password"
                  @blur="$v.formLogin.password.$touch()"
                />   
                 <div v-if="$v.formLogin.password.$error">
                    <p class="text-red-500" v-if="!$v.formLogin.password.required">El campo
                        contraseña es requerido!</p>                     
                </div>             
              </div>
             
              <div class="text-center mt-6">
                <button
                  v-if="$v.formLogin.$invalid"
                  :disabled="true"
                  class="bg-gray-700 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  >
                  ingresar
                </button>
                <button
                  v-if="!$v.formLogin.$invalid"
                  :disabled="false"
                  class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                  v-on:keyup.enter="submit" >
                  ingresar
                </button>              
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2">
            <a href="javascript:void(0)" class="text-gray-300">
              <small>¿Olvidaste tu contraseña?</small>
            </a>
          </div>
          <div class="w-1/2 text-right">
            <router-link to="/auth/register" class="text-gray-300">
              <small>Crear una cuenta nueva</small>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import router from "@/router" 
import github from "@/assets/img/github.svg";
import google from "@/assets/img/google.svg";
import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex';
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      github,
      google,
      formLogin:{
        email:null,
        password:null,
      },
      token:null,      
    }
  },  
    computed: {      
    },

    methods: {
       ...mapMutations([
        'setToken'
      ]),
      loginClick(){
        try {
          const apiUrl = process.env.VUE_APP_URL_API
          axios.post(apiUrl + '/auth/login', this.formLogin)
          .then(({data}) => {
            this.token = data.token 
            this.$store.commit('setToken', this.token)
            if(this.token != null){
              this.$vToastify.success("Sesion iniciada!")
              this.formLogin = this.clearFormLogin()            
              router.push({path:'/admin/dashboard'})             
            }else{            
              if (data._errorMessages) {
                this.$vToastify.error(data._errorMessages[0].message)
              } else {
                this.$vToastify.error("El email o la contraseña, no coinciden")                
              }
            }                       
          })
        } catch (error) {
          console.log(error)
        }     
      },
      clearFormLogin(){
        return {
          name: null,
          password: null
        }
      }
    },
    validations: {
        formLogin: {
          email: {
            required,
            email
          },
          password: {
            required
          }
        }
      },
}
</script>
