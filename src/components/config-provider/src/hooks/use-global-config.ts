import { useNamespace } from '../../../../hooks/use-namespace'
export function useGlobalComponentSettings(
    block: string,
) {
    const ns = useNamespace(block);
    return {
        ns
    }
}