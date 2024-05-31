import { definePropType, buildProps } from '../../../utils/vue/prop/runtime'
const iconProps = buildProps({
    size: {
        type: definePropType<number | string>([Number, String]),
    },
    color: {
        type: String
    }
})
export default iconProps;