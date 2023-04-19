import { Variant } from '../../../atoms/Typography/Typography';

export interface SurfaceInterface {
    width: string;
    height: string;
}

export type TabsViewType = {
    [key: string]: boolean;
};

export interface TabsInterface {
    view: TabsViewType;
    setView: React.Dispatch<TabsViewType>;
    justifyContent?: string;
    icons?: any[];
    textVariant?: Variant;
    iconSize?: SurfaceInterface;
    underlineHeight?: string;
}

export type IconObject = {
    icon: React.Component;
    name: string;
};

export interface UnderlineInterface {
    underlineHeight: string;
}
