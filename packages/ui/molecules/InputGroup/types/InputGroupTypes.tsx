export interface InputGroupInterface extends React.HTMLAttributes<HTMLDivElement> {
    children: JSX.Element[];
    childrenLength?: string[];
}

export interface DateGroupInterface {
    month: string;
    year: string;
}

export interface PasswordGroupInterface {
    password: string;
    repeat: string;
}

export interface MultiVariationInterface {
    input1: string;
    input2: string;
    input3: string;
}

export interface GroupContainerInterface {
    repeat: number;
    split: string;
}

export interface PhoneNumberInterface {
    prefix: string;
    phone: string;
}
