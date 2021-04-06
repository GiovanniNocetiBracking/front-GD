"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Get a RTDB instance
var db = _app["default"].initializeApp({
  databaseURL: "https://gasdetect-fe60e-default-rtdb.firebaseio.com"
}).database();

var _default = db;
exports["default"] = _default;