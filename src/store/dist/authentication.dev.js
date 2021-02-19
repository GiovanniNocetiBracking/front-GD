"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _router = _interopRequireDefault(require("../router"));

var _axios = _interopRequireDefault(require("axios"));

var _vue = _interopRequireDefault(require("vue"));

var _vueToastify = _interopRequireDefault(require("vue-toastify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueToastify["default"]);

var _default = {
  namespaced: true,
  state: {
    registerEmail: null,
    registerPassword: null,
    registerUserName: null,
    loginEmail: null,
    loginPassword: null,
    registerError: null,
    loginError: null,
    token: null,
    stateSuscriber: false,
    stateToSuscribe: 0
  },
  getters: {
    isLoggedIn: function isLoggedIn(state) {
      return !!state.token;
    }
  },
  mutations: {
    setToken: function setToken(state, token) {
      state.token = token;
    },
    setRegisterEmail: function setRegisterEmail(state, email) {
      state.registerEmail = email;
    },
    setRegisterPassword: function setRegisterPassword(state, password) {
      state.registerPassword = password;
    },
    setRegisterUserName: function setRegisterUserName(state, username) {
      state.registerUserName = username;
    },
    setLoginEmail: function setLoginEmail(state, email) {
      state.loginEmail = email;
    },
    setLoginPassword: function setLoginPassword(state, password) {
      state.loginPassword = password;
    },
    setLoginError: function setLoginError(state, error) {
      state.loginError = error;
    },
    setRegisterError: function setRegisterError(state, error) {
      state.registerError = error;
    },
    setStateSuscriber: function setStateSuscriber(state, suscriber) {
      state.stateSuscriber = suscriber;
      suscriber ? state.stateToSuscribe = 1 : state.stateToSuscribe = 0;
    }
  },
  actions: {
    register: function register(_ref) {
      var state = _ref.state,
          commit = _ref.commit;
      var apiUrl = process.env.VUE_APP_URL_API;
      return _axios["default"].post(apiUrl + '/auth/register', {
        email: state.registerEmail,
        password: state.registerPassword,
        username: state.registerUserName,
        suscribe: state.stateToSuscribe
      }).then(function (_ref2) {
        var data = _ref2.data;
        commit('setToken', data.token);

        if (data.registrado) {
          _vue["default"].$vToastify.success(data.registrado);
        } else {
          _vue["default"].$vToastify.error(data.error);
        }
      })["catch"](function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }

        console.log(error.config);
      });
    },
    login: function login(_ref3) {
      var state = _ref3.state,
          commit = _ref3.commit;
      var apiUrl = process.env.VUE_APP_URL_API;
      return _axios["default"].post(apiUrl + '/auth/login', {
        email: state.loginEmail,
        password: state.loginPassword
      }).then(function (_ref4) {
        var data = _ref4.data;
        commit('setToken', data.token);
        console.log(data.token);
      })["catch"](function () {
        commit('setLoginError', 'A ocurrido un error al intentar ingresar al sistema de gestion');
      });
    },
    logOut: function logOut(_ref5) {
      var commit = _ref5.commit;
      commit('setToken', null);
      window.location.href = "/";
    }
  }
};
exports["default"] = _default;