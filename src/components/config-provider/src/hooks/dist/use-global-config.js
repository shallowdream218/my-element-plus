"use strict";
exports.__esModule = true;
exports.useGlobalComponentSettings = void 0;
var use_namespace_1 = require("../../../../hooks/use-namespace");
function useGlobalComponentSettings(block) {
    var ns = use_namespace_1.useNamespace(block);
    return {
        ns: ns
    };
}
exports.useGlobalComponentSettings = useGlobalComponentSettings;
