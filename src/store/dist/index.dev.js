"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vueToastNotification = _interopRequireDefault(require("vue-toast-notification"));

var _vueToasted = _interopRequireDefault(require("vue-toasted"));

var _vuelidate = _interopRequireDefault(require("vuelidate"));

var _router = _interopRequireDefault(require("@/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* import createPersistedState from 'vuex-persistedstate'; */
_vue["default"].use(_vuex["default"]);

_vue["default"].use(_vueToastNotification["default"]);

_vue["default"].use(_vueToasted["default"]);

_vue["default"].use(_vuelidate["default"]);

var _default = new _vuex["default"].Store({
  strict: true,
  modules: {},
  state: {
    baseUrl: '/api',
    token: null
  },
  getters: {
    isLoggedIn: function isLoggedIn(state) {
      return !!state.token;
    }
  },
  mutations: {
    setToken: function setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    logOut: function logOut(_ref) {
      var commit = _ref.commit;
      commit('setToken', null);

      if (_router["default"].location != '/') {
        _router["default"].push('/');
      }
    }
  }
});

exports["default"] = _default;