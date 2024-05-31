import { VNode, ComponentInternalInstance, shallowReactive } from "vue"
import { MessageHandler, MessageProps } from "./message"
import { Mutable } from '../../../utils/typescript'
export type MessageContext = {
    id: string
    vnode: VNode
    handler: MessageHandler
    vm: ComponentInternalInstance
    props: Mutable<MessageProps>
}

export const instances: MessageContext[] = shallowReactive([]);

export const getInstance = (id: string) => {
    console.log(instances, instances.length);

    const idx: number = instances.findIndex(instance => id === instance.id);
    const cur = instances[idx];
    let prev: MessageContext | undefined
    if (idx > 0) {
        prev = instances[idx - 1];
    }
    console.log(idx);

    return {
        prev,
        cur
    }
}
export const getLastOffset = (id: string) => {
    const { prev } = getInstance(id);
    if (!prev) return 0
    console.log(prev);

    return prev.vm.exposed!.bottom.value
}
export const getOffsetOrSpace = (id: string, offset: number) => {
    const idx = instances.findIndex((instance) => instance.id === id)
    return idx > 0 ? 16 : offset
}