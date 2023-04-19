import { SideType, DragConstraintsInterface, InitialPositionInterface } from '../types/drawerTypes';

export const dragConstraints = ({ side }: DragConstraintsInterface) => {
    if (side === 'top') return { top: 0, bottom: window.innerHeight / 2 };
    if (side === 'right') return { left: -window.innerWidth / 2, right: 0 };
    if (side === 'bottom') return { top: -window.innerHeight / 2, bottom: 0 };
    if (side === 'left') return { left: 0, right: window.innerWidth / 2 };

    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    };
};

export const dragElastic = (side: SideType) => ({ [side]: 0.5 });

export const initialPosition = ({ side }: InitialPositionInterface) => {
    if (side === 'top') return { y: window.innerHeight / 2 };
    if (side === 'right') return { x: -window.innerWidth / 2 };
    if (side === 'bottom') return { y: -window.innerHeight / 2 };
    if (side === 'left') return { x: window.innerWidth / 2 };

    return false;
};
