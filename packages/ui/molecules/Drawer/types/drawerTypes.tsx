import { AnimationControls, DragControls, PanInfo } from 'framer-motion';
import React from 'react';

export type SideType = 'top' | 'right' | 'bottom' | 'left';

export interface DrawerInterface {
    side?: SideType;
    pullerHeight?: number;
    pullerColor?: string;
    pullerRadius?: number;
    lineLength?: number;
    lineColor?: string;
    children?: JSX.Element;
    isOpen?: boolean;
}

export interface PullerWrapperInterface {
    pullerHeight: number;
    pullerColor: string;
    pullerRadius: number;
}

export interface PullerLineInterface {
    isAxisX: boolean;
    lineColor: string;
    lineLength: number;
}

export interface PullerInterface {
    pullerHeight: number;
    pullerColor: string;
    pullerRadius: number;
    lineLength: number;
    lineColor: string;
    side: SideType;
    dragControls: DragControls;
}

export interface ContentInterface {
    children?: JSX.Element;
    side: SideType;
}
export interface DragConstraintsInterface {
    side: SideType;
}

export interface InitialPositionInterface {
    side: SideType;
}

export interface DragEndInterface {
    info: PanInfo;
    pullerHeight: number;
    side: SideType;
    controls: AnimationControls;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AnimationInterface {
    side: SideType;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    controls: AnimationControls;
}

export interface OpenHandlerInterface {
    axis: string;
    direction: number;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    controls: AnimationControls;
}

export interface CloseHandlerInterface {
    axis: string;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    controls: AnimationControls;
}
