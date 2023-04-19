import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent, useRef, useState } from 'react';
import Input from './Input';
import { InputProps, InputVariants } from './types/inputTypes';
import startIcons from './dummyData/startIcons';
import endIcons from './dummyData/endIcons';
import editIcons from './dummyData/editIcons';
import buttonInput from './dummyData/buttonInput';

export default {
    title: 'Input',
    component: Input,
    argTypes: {
        name: {
            name: 'Input name',
            control: {
                type: 'text',
            },
            defaultValue: 'inputName',
        },
        id: {
            name: 'Input id',
            control: {
                type: 'text',
            },
            defaultValue: 'inputId',
        },
        label: {
            name: 'Label',
            control: {
                type: 'text',
            },
            defaultValue: 'Your delivery address',
        },
        type: {
            name: 'Type',
            mapping: Object.keys(InputVariants),
            control: {
                type: 'select',
            },
        },
        startIcons: {
            name: 'Start icons',
            table: {
                disable: true,
            },
            control: false,
        },
        endIcons: {
            name: 'End icons',
            table: {
                disable: true,
            },
            control: false,
        },
        button: {
            name: 'Input button',
            table: {
                disable: true,
            },
            control: false,
        },
        hideIcons: {
            name: 'Hide icons',
            control: {
                type: 'boolean',
            },
        },
        value: {
            table: {
                disable: true,
            },
            control: false,
        },
        errorMessage: {
            name: 'Error message',
            control: {
                type: 'text',
            },
        },
        disabled: {
            name: 'Disable input',
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        },
        strengthBar: {
            name: 'Password complexity evaluator',
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof Input>;

export const Basic: ComponentStory<typeof Input> = ({ ...props }: InputProps) => {
    const [input, setInput] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Input
            {...props}
            ref={inputRef}
            value={input}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
        />
    );
};

export const BasicError: ComponentStory<typeof Input> = ({
    errorMessage = 'Error text',
    ...props
}: InputProps) => {
    const [input, setInput] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Input
            {...props}
            ref={inputRef}
            value={input}
            errorMessage={errorMessage}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
        />
    );
};

export const BasicDisabled: ComponentStory<typeof Input> = ({ ...props }: InputProps) => {
    const [input, setInput] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Input
            {...props}
            ref={inputRef}
            value={input}
            disabled
            onChange={(event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
        />
    );
};

export const StartIcon: ComponentStory<typeof Input> = ({ ...props }: InputProps) => {
    const [input, setInput] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Input
            {...props}
            ref={inputRef}
            value={input}
            startIcons={startIcons}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
        />
    );
};

export const EndIcon: ComponentStory<typeof Input> = ({ ...props }: InputProps) => {
    const [input, setInput] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Input
            {...props}
            ref={inputRef}
            value={input}
            endIcons={endIcons}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
        />
    );
};

export const EditInput: ComponentStory<typeof Input> = ({
    hideIcons = true,
    ...props
}: InputProps) => {
    const [input, setInput] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Input
            {...props}
            ref={inputRef}
            value={input}
            endIcons={editIcons}
            hideIcons={hideIcons}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
        />
    );
};

export const PasswordInput: ComponentStory<typeof Input> = ({
    type = 'password',
    strengthBar = true,
    ...props
}: InputProps) => {
    const [input, setInput] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Input
            {...props}
            ref={inputRef}
            value={input}
            type={type}
            strengthBar={strengthBar}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
        />
    );
};

export const ButtonInput: ComponentStory<typeof Input> = ({ ...props }: InputProps) => {
    const [input, setInput] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Input
            {...props}
            ref={inputRef}
            value={input}
            button={buttonInput}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
        />
    );
};
