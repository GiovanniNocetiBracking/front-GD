"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _router = _interopRequireDefault(require("../router"));

var _vue = _interopRequireDefault(require("vue"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  namespaced: true,
  state: {
    suscriberEmail: null,
    isSuscribe: 1
  },
  mutations: {
    setSuscriberEmail: function setSuscriberEmail(state, email) {
      state.suscriberEmail = email;
    }
  },
  actions: {
    suscribe: function suscribe(_ref) {
      var state = _ref.state,
          commit = _ref.commit;

      try {
        var apiUrl = process.env.VUE_APP_URL_API;
        return _axios["default"].post(apiUrl + '/landing/suscribe', {
          email: state.suscriberEmail,
          suscribe: state.isSuscribe
        }).then(function () {
          var toast = _vue["default"].toasted.show("Gracias por suscribirte !!", {
            theme: "outline",
            position: "top-center",
            duration: 3000
          });
        }).then(function () {
          commit('setSuscriberEmail', null);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
exports["default"] = _default;