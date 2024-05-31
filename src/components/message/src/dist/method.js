"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var vue_1 = require("vue");
var message_vue_1 = require("./message.vue");
var message_1 = require("./message");
var instance_1 = require("./instance");
var seed = 1;
var createMessage = function (_a, context) {
    var appendTo = _a.appendTo, options = __rest(_a, ["appendTo"]);
    console.log(options, appendTo);
    var userOnClose = options.onClose;
    var id = "message_" + seed++;
    var container = document.createElement('div');
    var props = __assign(__assign({}, options), { id: id, onClose: function () {
            console.log('close Message');
            userOnClose === null || userOnClose === void 0 ? void 0 : userOnClose();
            closeMessage(instance);
        }, onDestroy: function () {
            console.log("destroy Message");
            vue_1.render(null, container);
        } });
    console.log(props);
    var vnode = vue_1.createVNode(message_vue_1["default"], props);
    vnode.appContext = context;
    vue_1.render(vnode, container);
    appendTo.appendChild(container.firstChild);
    var vm = vnode.component;
    var handler = {
        close: function () {
            vm.exposed.visible.value = false;
        }
    };
    var instance = {
        id: id,
        vnode: vnode,
        vm: vm,
        handler: handler,
        props: props
    };
    return instance;
};
var closeMessage = function (instance) {
    var idx = instance_1.instances.indexOf(instance);
    if (idx === -1)
        return;
    instance_1.instances.splice(idx, 1);
    var handler = instance.handler;
    handler.close();
};
var normalizeOptions = function (params) {
    var options = typeof params === 'object' ? params : { message: params };
    if (!options.appendTo) {
        options.appendTo = document.body;
    }
    return __assign(__assign({}, message_1.messageDefaults), options);
};
var message = function (options, context) {
    var normalized = normalizeOptions(options);
    console.log(normalized);
    var instance = createMessage(normalized, context);
    instance_1.instances.push(instance);
    console.log(instance_1.instances);
    return instance.handler;
};
exports["default"] = message;
