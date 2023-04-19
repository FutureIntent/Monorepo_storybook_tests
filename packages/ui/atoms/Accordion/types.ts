import { MouseEvent, ChangeEvent, ReactElement } from 'react';

export interface AccordionHeaderProps {
    label: string;
    isOpen: boolean;
    handleCollapse: (e: MouseEvent<HTMLButtonElement>) => void;
    isSwitchDisabled?: boolean;
    withSwitch?: boolean;
    setDisabled?: (e: ChangeEvent<HTMLInputElement>) => void;
    infoTooltip?: ReactElement;
}
