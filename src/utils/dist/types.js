"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.isStringNumber = exports.isNumber = exports.idUndefined = void 0;
var shared_1 = require("@vue/shared");
var shared_2 = require("@vue/shared");
__createBinding(exports, shared_2, "isObject");
__createBinding(exports, shared_2, "isString");
exports.idUndefined = function (val) { return val === undefined; };
exports.isNumber = function (val) { return typeof val === 'number'; };
exports.isStringNumber = function (val) {
    if (!shared_1.isString(val)) {
        return false;
    }
    return !Number.isNaN(Number(val));
};
