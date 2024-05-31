"use strict";
exports.__esModule = true;
exports.getOffsetOrSpace = exports.getLastOffset = exports.getInstance = exports.instances = void 0;
var vue_1 = require("vue");
exports.instances = vue_1.shallowReactive([]);
exports.getInstance = function (id) {
    console.log(exports.instances, exports.instances.length);
    var idx = exports.instances.findIndex(function (instance) { return id === instance.id; });
    var cur = exports.instances[idx];
    var prev;
    if (idx > 0) {
        prev = exports.instances[idx - 1];
    }
    console.log(idx);
    return {
        prev: prev,
        cur: cur
    };
};
exports.getLastOffset = function (id) {
    var prev = exports.getInstance(id).prev;
    if (!prev)
        return 0;
    console.log(prev);
    return prev.vm.exposed.bottom.value;
};
exports.getOffsetOrSpace = function (id, offset) {
    var idx = exports.instances.findIndex(function (instance) { return instance.id === id; });
    return idx > 0 ? 16 : offset;
};
