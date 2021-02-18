"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _router = _interopRequireDefault(require("../router"));

var _vue = _interopRequireDefault(require("vue"));

var _axios = _interopRequireDefault(require("axios"));

var _vuelidate = _interopRequireDefault(require("vuelidate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  namespaced: true,
  state: {
    suscriberEmail: null,
    isSuscribe: 1
  },
  getters: {
    formEmailSuscriber: function formEmailSuscriber(state) {
      return state.suscriberEmail;
    }
  },
  setters: {
    formEmailSuscriber: function formEmailSuscriber(state, email) {
      state.suscriberEmail = email;
    }
  },
  mutations: {
    setSuscriberEmail: function setSuscriberEmail(state, email) {
      state.suscriberEmail = email;
    }
  },
  actions: {
    suscribe: function suscribe(_ref) {
      var state, commit, apiUrl;
      return regeneratorRuntime.async(function suscribe$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              state = _ref.state, commit = _ref.commit;
              _context.prev = 1;
              apiUrl = process.env.VUE_APP_URL_API;
              _context.next = 5;
              return regeneratorRuntime.awrap(_axios["default"].post(apiUrl + '/landing/suscribe', {
                email: state.suscriberEmail,
                suscribe: state.isSuscribe
              }).then(function () {
                commit('setSuscriberEmail', null);
                console.log("enviado");
              }));

            case 5:
              return _context.abrupt("return", _context.sent);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 8]]);
    }
  }
};
exports["default"] = _default;