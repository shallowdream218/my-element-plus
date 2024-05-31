<template>
    <i :class="ns.b()" :style="style">
        <slot></slot>
    </i>
</template>

<script lang="ts" setup>
import { useGlobalComponentSettings } from '../../config-provider/src/hooks/use-global-config'
import { computed } from 'vue'
import iconProps from './icon';

import { idUndefined } from '../../../utils/types'
import { addUnit } from '../../../utils/dom/style'

defineOptions({
    name: 'MyIcon'
})
const { ns } = useGlobalComponentSettings('icon')

const props = defineProps(iconProps);
const style = computed(() => {
    const { color, size } = props;
    if (!size && !color) return {}
    return {
        fontSize: idUndefined(size) ? undefined : addUnit(size),
        '--color': color
    }
})
</script>
