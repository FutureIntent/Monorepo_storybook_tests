import { IconInterface } from "../types/inputTypes";
import Location from '../../../../icons/svg/Location';

const startIcons: IconInterface[] = [
    {
        name: "Location",
        icon: Location,
        handleAction: (name: string) => console.log(`${name} has been pressed`)
    }
]

export default startIcons;