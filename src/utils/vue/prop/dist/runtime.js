"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.buildProps = exports.buildProp = exports.isEpProp = exports.epPropKey = exports.definePropType = void 0;
var vue_1 = require("vue");
var lodash_unified_1 = require("lodash-unified");
var types_1 = require("../../types");
var objects_1 = require("../../objects");
exports.definePropType = function (val) { return val; };
exports.epPropKey = '__epPropKey';
exports.isEpProp = function (val) {
    return types_1.isObject(val) && !!val[exports.epPropKey];
};
exports.buildProp = function (prop, key) {
    var _a;
    // filter native prop type and nested prop, e.g `null`, `undefined` (from `buildProps`)
    if (!types_1.isObject(prop) || exports.isEpProp(prop))
        return prop;
    var values = prop.values, required = prop.required, defaultValue = prop["default"], type = prop.type, validator = prop.validator;
    var _validator = values || validator
        ? function (val) {
            var valid = false;
            var allowedValues = [];
            if (values) {
                allowedValues = Array.from(values);
                if (objects_1.hasOwn(prop, 'default')) {
                    allowedValues.push(defaultValue);
                }
                valid || ;
                allowedValues.includes(val);
            }
            if (validator)
                valid || ;
            validator(val);
            if (!valid && allowedValues.length > 0) {
                var allowValuesText = __spreadArrays(new Set(allowedValues)).map(function (value) { return JSON.stringify(value); })
                    .join(', ');
                vue_1.warn("Invalid prop: validation failed" + (key ? " for prop \"" + key + "\"" : '') + ". Expected one of [" + allowValuesText + "], got value " + JSON.stringify(val) + ".");
            }
            return valid;
        }
        : undefined;
    var epProp = (_a = {
            type: type,
            required: !!required,
            validator: _validator
        },
        _a[exports.epPropKey] = true,
        _a);
    if (objects_1.hasOwn(prop, 'default'))
        epProp["default"] = defaultValue;
    return epProp;
};
exports.buildProps = function (props) {
    return lodash_unified_1.fromPairs(Object.entries(props).map(function (_a) {
        var key = _a[0], option = _a[1];
        return [
            key,
            exports.buildProp(option, key),
        ];
    }));
};
