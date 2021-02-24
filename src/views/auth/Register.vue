<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-gray-600 text-sm font-bold">
                Sign up with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button">
                <img alt="..." class="w-5 mr-1" :src="github" />
                Github
              </button>
              <button
                class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button">
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-gray-500 text-center mb-3 font-bold">
              <small>Or sign up with credentials</small>
            </div>
            <form @submit.prevent="registerClick()" method="post">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                  Name
                </label>
                <input type="text"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Name"
                  v-model="formRegister.username"
                  @blur="$v.formRegister.username.$touch()"
                />   
                <div v-if="$v.formRegister.username.$error">
                  <p class="text-red-500" v-if="!$v.formRegister.username.required">El campo
                    nombre es requerido!</p>
                </div>                 
              </div>
              <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                  Email
                </label>
                <input type="email"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  v-model="formRegister.email"
                  @blur="$v.formRegister.email.$touch()"
                />
                 <div v-if="$v.formRegister.email.$error">
                  <p class="text-red-500" v-if="!$v.formRegister.email.required">El campo
                    email es requerido!</p>
                  <p class="text-red-500" v-if="!$v.formRegister.email.email">El campo
                    email debe ser valido!</p>
                </div>
              </div>

              <div class="relative w-full mb-3">
                <label class="block uppercase text-gray-700 text-xs font-bold mb-2">
                  Password
                </label>
                <input type="password"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Password" 
                  v-model="formRegister.password"
                  @blur="$v.formRegister.password.$touch()"
                />
                <div v-if="$v.formRegister.password.$error">
                  <p class="text-red-500" v-if="!$v.formRegister.password.required">El campo
                    contraseña es requerido!</p>
                </div> 
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    v-model="formRegister.suscribe"               
                  />
                  <span class="ml-2 text-sm font-semibold text-gray-700">
                    ¿Quieres suscribirte? No te pierdas ninguna novedad...
                  </span>
                  
                </label>
              </div>
              <div class="text-center mt-6">
                <button
                  v-if="$v.formRegister.$invalid"
                  :disabled="true"
                  class="bg-gray-700 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  >
                  Registrarme
                </button>
                <button
                  v-if="!$v.formRegister.$invalid"
                  :disabled="false"
                  class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                  v-on:keyup.enter="submit">
                  Registrarme
                </button>
              </div>
            </form>
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
    required,
    email,
  } from 'vuelidate/lib/validators';

  export default {
    data() {
      return {
        github,
        google,
        
        formRegister:{
          username: null,
          email: null,
          password: null,
          suscribe: false,
        },
        token: null,
      };
    },
    computed: {     
    },
    methods: {
      registerClick(){
        try {
          const apiUrl = process.env.VUE_APP_URL_API
          axios.post(apiUrl + '/auth/register', this.formRegister)
          .then(({data})=>{
             if(!data[0]._errorMessages){
              this.$vToastify.success("Bienvenido a Gas Detect!")
              this.formRegister = this.clearFormRegister()  
              this.$v.$reset();          
              router.push({path:'/admin/dashboard'})           
            }else{       
              this.$vToastify.error(data[0]._errorMessages[0].message)              
            }
          }) 
        } catch (e) {
          console.log(e)
        }      
      },
      clearFormRegister(){
        return{
          username: null,
          email:null,
          password: null,
          submit: false
        }
      }
    },
    validations: {
      formRegister:{
        username:{
          required
        },
        email:{
          required,
          email,
        },
        password:{
          required
        }
      }
    },
  };
</script>