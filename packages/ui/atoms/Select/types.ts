import { ReactNode } from 'react';
import { NamedProps } from 'react-select';
import { ResponsiveValue } from 'styled-system';
import { SelectSizes } from './sizes';

export interface SelectProps extends NamedProps<SelectOption, false> {
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    name: string;
    label?: string;
    placeholder?: string;
    selected?: any;
    defaultValue?: any;
    readonly?: boolean;
    error?: string;
    isDirty?: boolean;
    disabled?: boolean;
    sizeVariant?: ResponsiveValue<SelectSizes>;
    onChange?: (value: any) => void;
}

export interface SelectOption {
    label: string;
    value: string;
    item?: any;
}
