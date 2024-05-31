"use strict";
exports.__esModule = true;
exports.useNamespace = void 0;
var vue_1 = require("vue");
var statePrefix = 'is-';
var _bem = function (namespace, block, blockSuffix, element, modifier) {
    var cls = namespace + "-" + block;
    if (blockSuffix) {
        cls += "-" + blockSuffix;
    }
    if (element) {
        cls += "__" + element;
    }
    if (modifier) {
        cls += "--" + modifier;
    }
    return cls;
};
exports.useNamespace = function (block) {
    var namespace = vue_1.ref('my');
    var b = function (blockSuffix) {
        if (blockSuffix === void 0) { blockSuffix = ''; }
        return _bem(namespace.value, block, blockSuffix, '', '');
    };
    var e = function (element) {
        return element ? _bem(namespace.value, block, '', element, '') : '';
    };
    var m = function (modifier) {
        return modifier ? _bem(namespace.value, block, '', '', modifier) : '';
    };
    var be = function (blockSuffix, element) {
        return blockSuffix && element
            ? _bem(namespace.value, block, blockSuffix, element, '')
            : '';
    };
    var em = function (element, modifier) {
        return element && modifier
            ? _bem(namespace.value, block, '', element, modifier)
            : '';
    };
    var bm = function (blockSuffix, modifier) {
        return blockSuffix && modifier
            ? _bem(namespace.value, block, blockSuffix, '', modifier)
            : '';
    };
    var bem = function (blockSuffix, element, modifier) {
        return blockSuffix && element && modifier
            ? _bem(namespace.value, block, blockSuffix, element, modifier)
            : '';
    };
    var is = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var state = args.length >= 1 ? args[0] : true;
        return name && state ? "" + statePrefix + name : '';
    };
    // for css var
    // --el-xxx: value;
    var cssVar = function (object) {
        var styles = {};
        for (var key in object) {
            if (object[key]) {
                styles["--" + namespace.value + "-" + key] = object[key];
            }
        }
        return styles;
    };
    // with block
    var cssVarBlock = function (object) {
        var styles = {};
        for (var key in object) {
            if (object[key]) {
                styles["--" + namespace.value + "-" + block + "-" + key] = object[key];
            }
        }
        return styles;
    };
    var cssVarName = function (name) { return "--" + namespace.value + "-" + name; };
    var cssVarBlockName = function (name) {
        return "--" + namespace.value + "-" + block + "-" + name;
    };
    return {
        namespace: namespace,
        b: b,
        e: e,
        m: m,
        be: be,
        em: em,
        bm: bm,
        bem: bem,
        is: is,
        // css
        cssVar: cssVar,
        cssVarName: cssVarName,
        cssVarBlock: cssVarBlock,
        cssVarBlockName: cssVarBlockName
    };
};
