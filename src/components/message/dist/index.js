"use strict";
exports.__esModule = true;
exports.withInstallFunction = exports.MyMessage = void 0;
// import {withInstallFunction} from '@/utils/install.ts'
var install_1 = require("../../utils/install");
exports.withInstallFunction = install_1.withInstallFunction;
var method_1 = require("../message/src/method");
exports.MyMessage = install_1.withInstallFunction(method_1["default"], '$message');
exports["default"] = exports.MyMessage;
