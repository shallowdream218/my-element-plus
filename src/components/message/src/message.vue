<template>
    <transition name="my-message-fade" @before-leave="onClose" @after-leave="$emit('destroy')">
        <div :id="id" v-show="visible" :class="[ns.b(), ns.m(type), ns.is('plain', plain)]" :style="customStyle"
            ref="messageRef" @mouseenter="clearTimer" @mouseleave="startTimer">
            <my-icon v-if="iconComponent" :class="[ns.e('icon'), ns.bm('icon', type)]">
                <component :is="iconComponent" />
            </my-icon>
            <p v-if="!dangerouslyUseHTMLString" :class="ns.e('content')">{{ message }}</p>
            <p v-else :class="ns.e('content')" v-html="message"></p>
            <MyBadge :class="ns.e('badge')" :value="badgeValue" :type="badgeType"></MyBadge>
            <i v-if="showClose" :class="[ns.e('icon'), ns.e('closeBtn')]" @click.stop="close">
                <Close />
            </i>
        </div>
    </transition>

</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';
import { messageProps } from './message';
import { TypeComponentsMap, TypeComponents } from '../../../utils/vue/icon'
import { getLastOffset, getOffsetOrSpace } from './instance';
import { useResizeObserver, useTimeoutFn } from '@vueuse/core'
import { useGlobalComponentSettings } from '../../config-provider/src/hooks/use-global-config'
import MyIcon from '@my/components/icon';
import MyBadge from '@my/components/badge';

defineOptions({
    name: 'MyMessage',
})
const { Close } = TypeComponents
const visible = ref(false)
onMounted(() => {
    startTimer()
    console.log('onMounted');
    visible.value = true
})
const props = defineProps(messageProps)
const height = ref(0);
const messageRef = ref<HTMLDivElement>()
let stopTimer: () => void | undefined
console.log(props);

const { ns } = useGlobalComponentSettings('message')

const iconComponent = computed(
    () => props.icon || TypeComponentsMap[props.type] || ''
)
const lastOffset = computed(() => getLastOffset(props.id))

const offset = computed(() => getOffsetOrSpace(props.id, props.offset) + lastOffset.value)
const customStyle = computed(() => {
    return {
        top: `${offset.value}px`,
        zIndex: 1000
    }
})
const bottom = computed((): number => height.value + offset.value)

const badgeType = computed(() => {
    return props.type ? props.type === 'error' ? 'danger' : props.type : 'info'
})
const badgeValue = computed(() => props.repeatNum > 1 ? props.repeatNum : '')

useResizeObserver(messageRef, () => {
    height.value = messageRef.value!.getBoundingClientRect().height
})
watch(
  () => props.repeatNum,
  () => {
    clearTimer()
    startTimer()
  }
)
function startTimer() {
    if (!props.duration) return;
    ({ stop: stopTimer } = useTimeoutFn(close, props.duration));
}
function close() {
    visible.value = false;
}
function clearTimer() {
    stopTimer?.();
}
defineExpose({
    bottom,
    visible
})
</script>
<style lang="scss">
.my-icon {
    display: inline-block;
    justify-content: center;
    width: 1em;
    height: 1em;
    color: #409efc;
}
</style>