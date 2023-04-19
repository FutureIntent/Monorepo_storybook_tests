import Close from '../../../../icons/svg/Close';
import Check from '../../../../icons/svg/Check';
import { IconInterface } from '../types/inputTypes';

const editIcons: IconInterface[] = [
    {
        name: "Accept",
        icon: Check,
        handleAction: (name: string) => console.log(`${name} has been pressed`) 
    },
    {
        name: "Decline",
        icon: Close,
        handleAction: (name: string) => console.log(`${name} has been pressed`) 
    }
]

export default editIcons;