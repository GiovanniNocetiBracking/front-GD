import { sync } from "vuex-router-sync";

import Vue from "vue";
import Vuex from "vuex";
import Vuelidate from "vuelidate";
import VueToastify from "vue-toastify";
import axios from "axios";
import router from "./router";
import store from "./store";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

import firebase from "firebase/app";
import "firebase/database";
import { rtdbPlugin as VueFire } from "vuefire";
// app config
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Vuelidate);
Vue.use(VueToastify);
Vue.use(VueFire);

sync(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
