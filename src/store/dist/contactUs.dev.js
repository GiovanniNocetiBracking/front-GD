"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _router = _interopRequireDefault(require("../router"));

var _axios = _interopRequireDefault(require("axios"));

var _vue = _interopRequireDefault(require("vue"));

var _vuelidate = _interopRequireDefault(require("vuelidate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  namespaced: true,
  state: {
    contactName: null,
    contactEmail: null,
    contactSubject: null,
    contactMessage: null
  },
  getters: {
    formName: function formName(state) {
      return state.contactName;
    },
    formEmail: function formEmail(state) {
      return state.contactEmail;
    },
    formSubject: function formSubject(state) {
      return state.contactSubject;
    },
    formMessage: function formMessage(state) {
      return state.contactMessage;
    }
  },
  mutations: {
    setContactName: function setContactName(state, name) {
      state.contactName = name;
    },
    setContactEmail: function setContactEmail(state, email) {
      state.contactEmail = email;
    },
    setContactSubject: function setContactSubject(state, subject) {
      state.contactSubject = subject;
    },
    setContactMessage: function setContactMessage(state, message) {
      state.contactMessage = message;
    }
  },
  actions: {
    sentMessage: function sentMessage(_ref) {
      var state = _ref.state,
          commit = _ref.commit;
      var apiUrl = process.env.VUE_APP_URL_API;
      return _axios["default"].post(apiUrl + '/landing/contactUs', {
        name: state.contactName,
        email: state.contactEmail,
        subject: state.contactSubject,
        message: state.contactMessage
      }).then(function () {
        var toast = _vue["default"].toasted.show("Gracias por escribirnos !!", {
          theme: "outline",
          position: "top-center",
          duration: 3000
        });
      }).then(function () {
        commit('setContactName', null);
        commit('setContactEmail', null);
        commit('setContactSubject', null);
        commit('setContactMessage', null);
      });
    }
  }
};
exports["default"] = _default;