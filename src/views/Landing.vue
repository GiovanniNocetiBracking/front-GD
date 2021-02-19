<template>
  <div>
    <navbar />
    <main>
      <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div class="absolute top-0 w-full h-full bg-center bg-cover ">
          <div>
            <span>
              <img id="blackOverlay" class="w-full h-full absolute opacity-25 bg-black" alt="..." :src="image1" />
            </span>
          </div>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-9">
                <h1 class="text-white font-bold text-4xl">
                  Dejanos ayudarte a encontrar la solucion que buscabas.
                </h1>

              </div>
            </div>
          </div>
        </div>
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>

      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Awarded Agency</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Free Revisions</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Verified Company</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>
              <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>
              <router-link to="/" class="font-bold text-gray-800 mt-8">
                Check Vue Notus!
              </router-link>
            </div>

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-green-600">
                <img alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  class="w-full align-middle rounded-t-lg" />
                <blockquote class="relative p-8 mb-4">
                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon points="-30,95 583,95 583,65" class="text-green-600 fill-current"></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-20">
        <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style="transform: translateZ(0);">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img alt="..." class="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-green-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-green-300">
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">A growing company</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  The extension comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3">
                          <i class="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Carefully crafted components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3">
                          <i class="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Amazing page examples
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 mr-3">
                          <i class="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Dynamic components</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Here are our heroes</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                According to the National Oceanic and Atmospheric
                Administration, Ted, Scambos, NSIDClead scentist, puts the
                potentially record maximum.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap justify-center">
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img alt="..." :src="team1" class="shadow-lg rounded-full mx-auto max-w-120-px" />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Giovanni Noceti Bracking</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Fundador y CEO
                  </p>
                  <div class="mt-6">
                    <button
                      class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button">
                      <a href="https://twitter.com/NocetiGiovanni" target="_blank">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </button>
                    <button
                      class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button">
                      <a href="https://www.facebook.com/giovanni.noceti.b" target="_blank" class="facebook">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </button>
                    <button class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button">
                      <a href="https://www.instagram.com/noceti_viking_way" target="_blank" class="instagram">
                        <i class="fab fa-instagram"></i>
                      </a>

                    </button>
                    <button
                      class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button">
                      <a href="https://www.linkedin.com/in/giovanni-noceti-bracking-121b13191/" target="_blank">
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </button>
                    <button
                      class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button">
                      <a href="https://gitlab.com/giovanni.noceti" target="_blank">
                        <i class="fab fa-gitlab"></i>
                      </a>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-20 relative block bg-gray-900">
        <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style="transform: translateZ(0);">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-gray-900 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">
                Build something
              </h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Put the potentially record low maximum sea ice extent tihs year
                down to low ice. According to the National Oceanic and
                Atmospheric Administration, Ted, Scambos.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap mt-12 justify-center">
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i class="fas fa-medal text-xl"></i>
              </div>
              <h6 class="text-xl mt-5 font-semibold text-white">
                Excelent Services
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i class="fas fa-poll text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Grow your market
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <div
                class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i class="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 class="text-xl mt-5 font-semibold text-white">
                Launch time
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="relative block py-24 lg:pt-0 bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                
                  <div class="flex-auto p-5 lg:p-10">
                    <form action="" @submit.prevent="sentMessage()" method="post" role="form">
                    <h4 class="-2xl font-semibold">
                      Contacto
                    </h4>
                    <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                      Si tienes alguna inquietud o sugerencia, rellena este formulario y te responderemos a la brevedad.
                    </p>
                    <div class="relative w-full mb-3 mt-8">
                      <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="full-name">
                        Nombre
                      </label>
                      <input type="text"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                        v-model="formContact.name"
                        @blur="$v.formContact.name.$touch()" />
                      <div v-if="$v.formContact.name.$error">
                        <p class="text-red-500" v-if="!$v.formContact.name.required">El campo
                          nombre es requerido!</p>
                      </div>
                    </div>

                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                        Email
                      </label>
                      <input type="email"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        v-model="formContact.email"
                        @blur="$v.formContact.email.$touch()"  />
                      <div v-if="$v.formContact.email.$error">
                        <p class="text-red-500" v-if="!$v.formContact.email.required">El campo
                          email es requerido!</p>
                        <p class="text-red-500" v-if="!$v.formContact.email.email">El campo
                          email debe ser valido!</p>
                      </div>
                    </div>
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="full-name">
                        Asunto
                      </label>
                      <input type="text"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                        v-model="formContact.subject"
                        @blur="$v.formContact.subject.$touch()" />
                      <div v-if="$v.formContact.subject.$error">
                        <p class="text-red-500" v-if="!$v.formContact.subject.required">El campo
                          asunto es requerido!</p>
                      </div>
                    </div>

                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                        Mensaje
                      </label>
                      <textarea rows="4" cols="80"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                        v-model="formContact.message"
                        @blur="$v.formContact.message.$touch()" />
                      <div v-if="$v.formContact.message.$error">
                          <p class="text-red-500" v-if="!$v.formContact.message.required">El campo
                              mensaje es requerido!</p>
                          <p class="text-red-500" v-if="!$v.formContact.message.minLength">El campo
                              mensaje debe contener al menos 4 caracteres!</p>
                          <p class="text-red-500" v-if="!$v.formContact.message.maxLength">El campo
                          mensaje debe contener 500 caracteres o menos!</p>
                        </div>
                      </div>
                    <div class="text-center mt-6">                    
                      <button 
                      v-if="$v.formContact.$invalid"
                      :disabled="true" 
                      class="bg-gray-700 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                      >Enviar Mensaje</button>
                      <button 
                      v-else
                      v-on:keyup.enter="submit"
                      :disabled="false"
                      class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                      type="submit">Enviar Mensaje</button>
                    </div>
                    </form>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
        </section>
        <div class="relative block py-24 lg:pt-0 bg-gray-900 mt-5"></div>
        <section class="relative block py-24 lg:pt-0 bg-gray-900 mt-20" >
          <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              >
                <div class="flex-auto p-5 lg:p-10">
                  <form action="api/landing/suscribe" @submit.prevent="setSuscriptor()" method="post" >
                    
                  <h4 class="text-2xl font-semibold">
                    ¡Suscribete!
                  </h4>
                  <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                    Si no quieres perderte las novedades que tenemos para ti ¡suscribete!.
                  </p>
                  

                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      v-model="formSuscriber.email"
                      @blur="$v.formSuscriber.email.$touch()"
                    />
                    <div v-if="$v.formSuscriber.email.$error">
                        <p class="text-red-500" v-if="!$v.formSuscriber.email.required">El campo
                            email es requerido!</p>
                        <p class="text-red-500" v-if="!$v.formSuscriber.email.email">El campo
                            email debe ser valido!</p>
                    </div>
                    
                  </div>
                  
                  <div class="text-center mt-6">
                     <button 
                      v-if="$v.formSuscriber.$invalid"
                      :disabled="true" 
                      class="bg-gray-700 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                      >Suscribirse</button>
                      <button 
                      v-else
                      v-on:keyup.enter="submit"
                      :disabled="false"
                      class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                      type="submit">suscribirse</button>                    
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>     
    </main>
    <footer-component />
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
import axios from 'axios'

import team1 from "@/assets/img/foto.jpeg";
import image1 from "@/assets/img/image5.jpg";
import {
  required, 
  email, 
  minLength, 
  maxLength
} from 'vuelidate/lib/validators'; 
  
export default {
  data() {
    return {
      team1,
      image1,
      formSuscriber:{
        email: null,
        suscribe: 1
      },
      formContact:{
        name:null,
        email:null,
        subject:null,
        message:null
      }    
    };
  },
  computed:{
    
  },
  methods:{

    sentMessage(){      
      const apiUrl = process.env.VUE_APP_URL_API
      axios.post(apiUrl + '/landing/contactUs', this.formContact)       
      .then((res) => {
       if(res.data._errorMessages){
            this.$vToastify.error(res.data._errorMessages[0].message)
          } 
          else{
            this.$vToastify.success("¡Muchas gracias por escribirnos!")
            this.formContact = this.clearFormContact()
            this.$v.$reset();
          } 
      })
      .catch((error)=>{
          console.log(error.message)
      })           
    },
    setSuscriptor(){      
      const apiUrl = process.env.VUE_APP_URL_API
      axios.post(apiUrl + '/landing/suscribe', this.formSuscriber)       
      .then((res) => {
          if(res.data._errorMessages){
            this.$vToastify.error(res.data._errorMessages[0].message);            
          }else if(res.data.suscrito){
            this.$vToastify.success(res.data.suscrito)
            this.formSuscriber.email = ""
            this.$v.$reset();
          }else{
            this.$vToastify.success("¡Muchas gracias por suscribirte!");
            this.formSuscriber.email = ""
            this.$v.$reset();
          }       
      })
      .catch(function (error) {
         console.log(error.message)
      });
                
    },

    
    clearFormContact() {
      return{
        name:null,
        email:null,
        subject:null,
        message:null}
      },   
    
  },
  validations: {
    formContact:{
      name:{
      required
    },
      email:{
      required,
      email
    },
      subject:{
      required
    },
      message:{
      required,
      minLength:minLength(4),
      maxLength:maxLength(500)
    },
    },    
    formSuscriber:{
      email:{
        required,
        email
      }
    },
  },         
  components: {
    Navbar,
    FooterComponent,
  },
};
</script>
<style scoped>
.image{
  background-image: url("/assets/img/image1.jpg");
}
</style>