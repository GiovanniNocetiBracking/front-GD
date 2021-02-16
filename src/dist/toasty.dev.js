"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _store = _interopRequireDefault(require("./store"));

var _vueToastNotification = _interopRequireDefault(require("vue-toast-notification"));

var _vueToasted = _interopRequireDefault(require("vue-toasted"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return toast = $toasted.show(message, {
    theme: "bubble",
    position: "top-center",
    duration: 5000
  });
};

exports["default"] = _default;