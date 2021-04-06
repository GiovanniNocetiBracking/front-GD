"use strict";

var _vuexRouterSync = require("vuex-router-sync");

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vuelidate = _interopRequireDefault(require("vuelidate"));

var _vueToastify = _interopRequireDefault(require("vue-toastify"));

var _axios = _interopRequireDefault(require("axios"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("@fortawesome/fontawesome-free/css/all.min.css");

require("@/assets/styles/tailwind.css");

var _App = _interopRequireDefault(require("@/App.vue"));

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/database");

var _vuefire = require("vuefire");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// styles
// mouting point for the whole app
// app config
_vue["default"].config.productionTip = false;

_vue["default"].use(_vuex["default"]);

_vue["default"].use(_vuelidate["default"]);

_vue["default"].use(_vueToastify["default"]);

_vue["default"].use(_vuefire.rtdbPlugin);

(0, _vuexRouterSync.sync)(_store["default"], _router["default"]);
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount("#app");