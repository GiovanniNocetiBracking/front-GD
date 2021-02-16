"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vueToastNotification = _interopRequireDefault(require("vue-toast-notification"));

var _vueToasted = _interopRequireDefault(require("vue-toasted"));

var _authentication = _interopRequireDefault(require("./authentication"));

var _suscribers = _interopRequireDefault(require("./suscribers"));

var _contactUs = _interopRequireDefault(require("./contactUs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* import createPersistedState from 'vuex-persistedstate'; */
_vue["default"].use(_vuex["default"]);

_vue["default"].use(_vueToastNotification["default"]);

_vue["default"].use(_vueToasted["default"]);

var _default = new _vuex["default"].Store({
  strict: true,
  modules: {
    authentication: _authentication["default"],
    suscribers: _suscribers["default"],
    contactUs: _contactUs["default"]
  },
  state: {
    baseUrl: '/api'
  },
  mutations: {},
  actions: {}
  /* plugins:[
      createPersistedState(),
  ], */

});

exports["default"] = _default;