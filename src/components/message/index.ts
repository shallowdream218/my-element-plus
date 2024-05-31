// import {withInstallFunction} from '@/utils/install.ts'
import { withInstallFunction } from '../../utils/install'
import Message from '../message/src/method'
export const MyMessage = withInstallFunction(Message, '$message');

export default MyMessage

export { withInstallFunction };