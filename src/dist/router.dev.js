"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Admin = _interopRequireDefault(require("@/layouts/Admin.vue"));

var _Auth = _interopRequireDefault(require("@/layouts/Auth.vue"));

var _Dashboard = _interopRequireDefault(require("@/views/admin/Dashboard.vue"));

var _Settings = _interopRequireDefault(require("@/views/admin/Settings.vue"));

var _Login = _interopRequireDefault(require("@/views/auth/Login.vue"));

var _Register = _interopRequireDefault(require("@/views/auth/Register.vue"));

var _Landing = _interopRequireDefault(require("@/views/Landing.vue"));

var _Chat = _interopRequireDefault(require("@/views/Chat.vue"));

var _Profile = _interopRequireDefault(require("@/views/Profile.vue"));

var _Sensors = _interopRequireDefault(require("@/views/Sensors.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// layouts
// views for Admin layout
// views for Auth layout
// views without layouts
_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  mode: "history",
  routes: [{
    path: "/admin",
    redirect: "/admin/dashboard",
    component: _Admin["default"],
    children: [{
      path: "/admin/dashboard",
      component: _Dashboard["default"]
    }, {
      path: "/admin/settings",
      component: _Settings["default"]
    }]
  }, {
    path: "/auth",
    redirect: "/auth/login",
    component: _Auth["default"],
    children: [{
      path: "/auth/login",
      component: _Login["default"]
    }, {
      path: "/auth/register",
      component: _Register["default"]
    }]
  }, {
    path: "/profile",
    component: _Profile["default"]
  }, {
    path: "/chat",
    component: _Chat["default"]
  }, {
    path: "/sensors",
    component: _Sensors["default"]
  }, {
    path: "/",
    component: _Landing["default"]
  }, {
    path: "*",
    redirect: "/"
  }]
});

exports["default"] = _default;