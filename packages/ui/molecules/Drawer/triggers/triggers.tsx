import {
    AnimationInterface,
    CloseHandlerInterface,
    DragEndInterface,
    OpenHandlerInterface,
} from '../types/drawerTypes';

const transition = {
    bounce: 0,
};

const handleOpen = ({ axis, direction, setOpen, controls }: OpenHandlerInterface) => {
    const innerLength = axis === 'x' ? window.innerWidth : window.innerHeight;

    controls
        .start({
            [axis]: (innerLength / 2) * direction,
            transition,
        })
        .then(() => setOpen(true));
};

const handleClose = ({ axis, setOpen, controls }: CloseHandlerInterface) => {
    controls
        .start({
            [axis]: 0,
            transition,
        })
        .then(() => setOpen(false));
};

export const handleDragEnd = ({
    info,
    pullerHeight,
    side,
    controls,
    setOpen,
}: DragEndInterface) => {
    const axis: string = ['right', 'left'].includes(side) ? 'x' : 'y';
    const direction: number = ['top', 'left'].includes(side) ? 1 : -1;
    let initialPoint = 0;
    const pullerMiddle =
        axis === 'x'
            ? (window.innerWidth / 2 + pullerHeight) / 2
            : (window.innerHeight / 2 + pullerHeight) / 2;

    if (direction === -1 && axis === 'x') {
        initialPoint = window.innerWidth;
    } else if (direction === -1 && axis === 'y') {
        initialPoint = window.innerHeight;
    }

    const splitPointModule = Math.abs(initialPoint - pullerMiddle);

    if (axis === 'x') {
        if (direction === 1 && info.point.x >= splitPointModule) {
            handleOpen({ axis, direction, setOpen, controls });
        } else if (direction === 1 && info.point.x <= splitPointModule) {
            handleClose({ axis, setOpen, controls });
        }

        if (direction === -1 && info.point.x <= splitPointModule) {
            handleOpen({ axis, direction, setOpen, controls });
        } else if (direction === -1 && info.point.x >= splitPointModule) {
            handleClose({ axis, setOpen, controls });
        }
    }

    if (axis === 'y') {
        if (direction === 1 && info.point.y >= splitPointModule) {
            handleOpen({ axis, direction, setOpen, controls });
        } else if (direction === 1 && info.point.y <= splitPointModule) {
            handleClose({ axis, setOpen, controls });
        }

        if (direction === -1 && info.point.y <= splitPointModule) {
            handleOpen({ axis, direction, setOpen, controls });
        } else if (direction === -1 && info.point.y >= splitPointModule) {
            handleClose({ axis, setOpen, controls });
        }
    }
};

export const handleAnimation = ({ side, open, setOpen, controls }: AnimationInterface) => {
    const direction: number = ['top', 'left'].includes(side) ? 1 : -1;
    const axis: string = ['right', 'left'].includes(side) ? 'x' : 'y';

    if (!open) {
        handleOpen({ axis, direction, setOpen, controls });
    } else {
        handleClose({ axis, setOpen, controls });
    }
};
