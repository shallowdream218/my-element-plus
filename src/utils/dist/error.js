"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.debugWarn = void 0;
var types_1 = require("./types");
var ElementPlusError = /** @class */ (function (_super) {
    __extends(ElementPlusError, _super);
    function ElementPlusError(m) {
        var _this = _super.call(this, m) || this;
        _this.name = 'ElementPlusError';
        return _this;
    }
    return ElementPlusError;
}(Error));
function debugWarn(scope, message) {
    if (process.env.NODE_ENV !== 'production') {
        var error = types_1.isString(scope)
            ? new ElementPlusError("[" + scope + "] " + message)
            : scope;
        // eslint-disable-next-line no-console
        console.warn(error);
    }
}
exports.debugWarn = debugWarn;
