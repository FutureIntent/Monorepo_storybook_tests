import { IconInterface } from "../types/inputTypes";
import Dropdown from '../../../../icons/svg/Dropdown';

const endIcons: IconInterface[] = [
    {
        name: "Submit",
        icon: Dropdown,
        handleAction: (name: string) => console.log(`${name} has been pressed`) 
    }
]

export default endIcons;