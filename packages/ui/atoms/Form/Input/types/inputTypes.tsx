import React, { Dispatch, HTMLAttributes } from 'react';

export interface IconInterface {
    name: string;
    icon: any;
    handleAction: (name: string) => void;
}

export interface IconPropsInterface {
    hideIcons: boolean;
    hasError: boolean;
    width: number;
}

export interface InputWrapperInterface {
    iconBefore?: boolean;
    iconAfter?: boolean;
    showPassword?: boolean;
    hasButton?: boolean;
}

export interface IconWrapperInterface extends IconPropsInterface {
    icons: IconInterface[];
}

export interface ShowPasswordInterface extends IconPropsInterface {
    inputType: string;
    setInputType: Dispatch<React.SetStateAction<string>>;
}

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
    type?: 'text' | 'number' | 'password' | 'email' | 'tel';
    startIcons?: IconInterface[];
    endIcons?: IconInterface[];
    hideIcons?: boolean;
    errorMessage?: string | null;
    id: string;
    value?: string | number;
    disabled?: boolean;
    button?: InputButtonInterface;
    strengthBar?: boolean;
}

export interface InputButtonInterface {
    name: string;
    text: string;
    handleAction: (name: string) => void;
}

export interface TriggerInterface {
    wrapper?: HTMLDivElement | null;
    label?: HTMLLabelElement | null;
    input?: HTMLElement | null;
    hasError?: boolean;
    hideIcons?: boolean;
    setHiddenIcons?: Dispatch<React.SetStateAction<boolean>>;
    setWindowWidth?: Dispatch<React.SetStateAction<number>>;
}

export enum InputVariants {
    Text = 'text',
    Number = 'number',
    Password = 'password',
    Email = 'email',
    Phone = 'tel',
}

export interface PasswordEvaluatorInterface {
    value: string;
    setError: Dispatch<React.SetStateAction<string | null>>;
}

export interface ErrorMessageInterface {
    evaluator: boolean;
}

export interface EvaluatorContainerInterface {
    score: number;
}
