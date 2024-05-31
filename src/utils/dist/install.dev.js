"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withInstall = exports.withInstallFunction = void 0;

var withInstallFunction = function withInstallFunction(fn, name) {
  fn.install = function (app) {
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };

  return fn;
};

exports.withInstallFunction = withInstallFunction;

var withInstall = function withInstall(comp) {
  comp.install = function (app) {
    app.component(comp.name, comp);
  };

  return comp;
};

exports.withInstall = withInstall;