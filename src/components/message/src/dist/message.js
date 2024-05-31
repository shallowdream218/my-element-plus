"use strict";
exports.__esModule = true;
exports.messageProps = exports.messageDefaults = exports.messageTypes = void 0;
var runtime_1 = require("../../../utils/vue/prop/runtime");
var typescript_1 = require("../../../utils/typescript");
exports.messageTypes = ['success', 'info', 'warning', 'error'];
exports.messageDefaults = typescript_1.mutable({
    customClass: '',
    center: false,
    dangerouslyUseHTMLString: false,
    duration: 3000,
    icon: undefined,
    id: '',
    message: '',
    onClose: undefined,
    showClose: false,
    type: 'info',
    plain: false,
    offset: 16,
    zIndex: 0,
    grouping: false,
    repeatNum: 1,
    appendTo: document.body
});
exports.messageProps = runtime_1.buildProps({
    /**
     * @description custom class name for Message
     */
    customClass: {
        type: String,
        "default": exports.messageDefaults.customClass
    },
    /**
     * @description whether to center the text
     */
    center: {
        type: Boolean,
        "default": exports.messageDefaults.center
    },
    /**
     * @description whether `message` is treated as HTML string
     */
    dangerouslyUseHTMLString: {
        type: Boolean,
        "default": exports.messageDefaults.dangerouslyUseHTMLString
    },
    /**
     * @description display duration, millisecond. If set to 0, it will not turn off automatically
     */
    duration: {
        type: Number,
        "default": exports.messageDefaults.duration
    },
    /**
   * @description custom icon component, overrides `type`
   */
    icon: {
        type: String,
        "default": exports.messageDefaults.icon
    },
    /**
     * @description custom icon component, overrides `type`
     */
    /**
     * @description message dom id
     */
    id: {
        type: String,
        "default": exports.messageDefaults.id
    },
    /**
     * @description message text
     */
    message: {
        type: runtime_1.definePropType([
            String,
            Object,
            Function,
        ]),
        "default": exports.messageDefaults.message
    },
    /**
     * @description callback function when closed with the message instance as the parameter
     */
    onClose: {
        type: runtime_1.definePropType(Function),
        "default": exports.messageDefaults.onClose
    },
    /**
     * @description whether to show a close button
     */
    showClose: {
        type: Boolean,
        "default": exports.messageDefaults.showClose
    },
    /**
     * @description message type
     */
    type: {
        type: String,
        values: exports.messageTypes,
        "default": exports.messageDefaults.type
    },
    /**
     * @description whether message is plain
     */
    plain: {
        type: Boolean,
        "default": exports.messageDefaults.plain
    },
    /**
     * @description set the distance to the top of viewport
     */
    offset: {
        type: Number,
        "default": exports.messageDefaults.offset
    },
    /**
     * @description input box size
     */
    zIndex: {
        type: Number,
        "default": exports.messageDefaults.zIndex
    },
    /**
     * @description merge messages with the same content, type of VNode message is not supported
     */
    grouping: {
        type: Boolean,
        "default": exports.messageDefaults.grouping
    },
    /**
     * @description The number of repetitions, similar to badge, is used as the initial number when used with `grouping`
     */
    repeatNum: {
        type: Number,
        "default": exports.messageDefaults.repeatNum
    }
});
