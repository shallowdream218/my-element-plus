"use strict";
exports.__esModule = true;
exports.badgeProps = void 0;
var runtime_1 = require("@my/utils/vue/prop/runtime");
exports.badgeProps = runtime_1.buildProps({
    value: {
        type: [String, Number],
        "default": ''
    },
    max: {
        type: Number,
        "default": 99
    },
    isDot: {
        type: Boolean,
        "default": false
    },
    hidden: {
        type: Boolean,
        "default": false
    },
    type: {
        type: String,
        values: ['primary', 'success', 'warning', 'danger', 'info'],
        "default": 'danger'
    },
    showZero: {
        type: Boolean,
        "default": true
    },
    color: String,
    offset: {
        type: runtime_1.definePropType(Array),
        "default": [0, 0]
    },
    badgeStyle: {
        type: runtime_1.definePropType([String, Object, Array])
    },
    badgeClass: {
        type: String
    }
});
