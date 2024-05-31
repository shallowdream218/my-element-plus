import { createVNode, render } from 'vue';
import MessageConstructor from './message.vue'
import { messageDefaults, MessageHandler } from './message'
import { instances, MessageContext } from './instance';
let seed = 1
const createMessage = ({ appendTo, ...options }: any, context: any) => {
    console.log(options, appendTo);
    const userOnClose = options.onClose
    const id = `message_${seed++}`
    const container = document.createElement('div');
    const props = {
        ...options,
        id,
        onClose: () => {
            console.log('close Message')
            userOnClose?.();
            closeMessage(instance);
        },
        onDestroy: () => {
            console.log(`destroy Message`);
            render(null, container)
        }
    }
    console.log(props);

    const vnode = createVNode(MessageConstructor, props)

    vnode.appContext = context
    render(vnode, container)


    appendTo.appendChild(container.firstChild);
    const vm = vnode.component!;
    const handler: MessageHandler = {
        close: () => {
            vm.exposed!.visible.value = false
        }
    }
    const instance = {
        id,
        vnode,
        vm,
        handler,
        props: (vnode.component as any).props,
    }
    return instance
}
const closeMessage = (instance: MessageContext) => {
    const idx = instances.indexOf(instance);
    if (idx === -1) return
    instances.splice(idx, 1);
    const { handler } = instance
    handler.close()
}
interface MessageOptions {
    message: string,
    appendTo?: any
}
const normalizeOptions = (params: any) => {
    const options: MessageOptions = typeof params === 'object' ? params : { message: params }
    if (!options.appendTo) {
        options.appendTo = document.body
    }
    return { ...messageDefaults, ...options };
}
const message = (options: any, context: any) => {
    const normalized = normalizeOptions(options)
    console.log(normalized);
    if (normalized.grouping) {
        const ins = instances.find(instance => instance.props.message === normalized.message)
        console.log(ins);
        
        if (ins) {
            ins.props.repeatNum ++;
            ins.props.type = normalized.type;
            ins.props.duration = normalized.duration
            return
        }
    }
    const instance = createMessage(normalized, context)
    instances.push(instance);
    console.log(instances);

    return instance.handler
}
export default message;
