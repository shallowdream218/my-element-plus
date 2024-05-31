"use strict";
exports.__esModule = true;
var runtime_1 = require("../../../utils/vue/prop/runtime");
var iconProps = runtime_1.buildProps({
    size: {
        type: runtime_1.definePropType([Number, String])
    },
    color: {
        type: String
    }
});
exports["default"] = iconProps;
