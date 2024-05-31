<template>
    <div :class="ns.b()">
        <slot></slot>
        <sup :class="[ns.e('content'), ns.em('content', type), ns.is('fixed', !!$slots.default), ns.is('dot', isDot)]"
            v-show="!hidden && (content || isDot)" v-text="content" />
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { badgeProps } from './badge'
import { useNamespace } from '@my/hooks/use-namespace'
import { isNumber } from '@my/utils/types';
defineOptions({
    name: "MyBadge"
})
const props = defineProps(badgeProps)
const ns = useNamespace('badge')
const content = computed<string>(() => {
    if (props.isDot) return ''
    if (isNumber(props.value) && isNumber(props.max)) {
        if (props.value > props.max) {
            return `${props.max}+`
        }

        return props.value === 0 && !props.showZero ? '' : `${props.value}`
    }

    return `${props.value}`;
})
</script>