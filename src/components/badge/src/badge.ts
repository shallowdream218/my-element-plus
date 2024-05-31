import { buildProps, definePropType } from "@my/utils/vue/prop/runtime";
import { StyleValue, ExtractPropTypes } from 'vue'
export const badgeProps = buildProps({
    value: {
        type: [String, Number],
        default: ''
    },
    max: {
        type: Number,
        default: 99
    },
    isDot: {
        type: Boolean,
        default: false
    },
    hidden: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        values: ['primary', 'success', 'warning', 'danger', 'info'],
        default: 'danger'
    },
    showZero: {
        type: Boolean,
        default: true
    },
    color: String,
    offset: {
        type: definePropType<[number, number]>(Array),
        default: [0, 0],
    },
    badgeStyle: {
        type: definePropType<StyleValue>([String, Object, Array])
    },
    badgeClass: {
        type: String,
    },
} as const)
export type BadgeProps = ExtractPropTypes<typeof badgeProps>