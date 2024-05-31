"use strict";
exports.__esModule = true;
exports.addUnit = void 0;
var types_1 = require("../types");
var error_1 = require("../error");
var SCOPE = 'utils/dom/style';
function addUnit(value, defaultUnit) {
    if (defaultUnit === void 0) { defaultUnit = 'px'; }
    if (!value)
        return '';
    if (types_1.isNumber(value) || types_1.isStringNumber(value)) {
        return "" + value + defaultUnit;
    }
    else if (types_1.isString(value)) {
        return value;
    }
    error_1.debugWarn(SCOPE, 'binding value must be a string or number');
}
exports.addUnit = addUnit;
