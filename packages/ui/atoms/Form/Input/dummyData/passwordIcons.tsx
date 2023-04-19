import Show from '../../../../icons/svg/Show';
import { IconInterface } from '../types/inputTypes';

const passwordIcons: IconInterface[] = [
    {
        name: "Show",
        icon: Show,
        handleAction: (name: string) => console.log(`${name} has been pressed`) 
    }
];

export default passwordIcons;