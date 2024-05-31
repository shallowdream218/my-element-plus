import { isString } from '@vue/shared'
export {
    isObject,
    isString
} from '@vue/shared'

export const idUndefined = (val: any): val is undefined => val === undefined
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isStringNumber = (val: any): boolean => {
    if (!isString(val)) {
        return false;
    }
    return !Number.isNaN(Number(val))
}