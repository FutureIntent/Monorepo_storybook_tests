import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useRef, useState } from 'react';
import Input from '../../atoms/Form/Input/Input';
import InputGroup from './InputGroup';
import {
    DateGroupInterface,
    InputGroupInterface,
    MultiVariationInterface,
    PasswordGroupInterface,
    PhoneNumberInterface,
} from './types/InputGroupTypes';
import editIcons from '../../atoms/Form/Input/dummyData/editIcons';
import startIcons from '../../atoms/Form/Input/dummyData/startIcons';
import endIcons from '../../atoms/Form/Input/dummyData/endIcons';
import Select from '../../atoms/Select/Select';

export default {
    title: 'InputGroup',
    component: InputGroup,
    argTypes: {},
} as ComponentMeta<typeof InputGroup>;

export const Basic: ComponentStory<typeof InputGroup> = ({ ...props }: InputGroupInterface) => {
    const [input, setInput] = useState<DateGroupInterface>({
        month: '',
        year: '',
    });

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInput((prevState: DateGroupInterface) => ({ ...prevState, [name]: value }));
    };

    return (
        <InputGroup {...props}>
            <Input
                name="month"
                id="month"
                label="Month"
                type="number"
                value={input.month}
                onChange={handleInput}
            />
            <Input
                name="year"
                id="year"
                label="Year"
                type="number"
                value={input.year}
                onChange={handleInput}
            />
        </InputGroup>
    );
};

export const BasicError: ComponentStory<typeof InputGroup> = ({
    ...props
}: InputGroupInterface) => {
    const [input, setInput] = useState<DateGroupInterface>({
        month: '',
        year: '',
    });

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInput((prevState: DateGroupInterface) => ({ ...prevState, [name]: value }));
    };

    return (
        <InputGroup {...props}>
            <Input
                name="month"
                id="month"
                label="Month"
                type="number"
                value={input.month}
                onChange={handleInput}
                errorMessage="Wrong month"
            />
            <Input
                name="year"
                id="year"
                label="Year"
                type="number"
                value={input.year}
                onChange={handleInput}
                errorMessage="Wrong year"
            />
        </InputGroup>
    );
};

export const BasicDisabled: ComponentStory<typeof InputGroup> = ({
    ...props
}: InputGroupInterface) => (
    <InputGroup {...props}>
        <Input
            name="month"
            id="month"
            label="Month"
            type="number"
            value=""
            onChange={() => {}}
            disabled
        />
        <Input
            name="year"
            id="year"
            label="Year"
            type="number"
            value=""
            onChange={() => {}}
            disabled
        />
    </InputGroup>
);

export const PasswordExample: ComponentStory<typeof InputGroup> = ({
    ...props
}: InputGroupInterface) => {
    const [input, setInput] = useState<PasswordGroupInterface>({
        password: 'grdggdr',
        repeat: '543hf',
    });

    const repeatRef = useRef<HTMLInputElement>(null);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput((prevState): PasswordGroupInterface => {
            const { name, value } = event.target;
            return { ...prevState, [name]: value };
        });
    };

    useEffect(() => {
        if (repeatRef.current) repeatRef.current.focus();
    }, []);

    return (
        <InputGroup {...props}>
            <Input
                name="password"
                id="password"
                label="Password"
                type="password"
                value={input.password}
                onChange={handleInput}
                strengthBar
            />
            <Input
                name="repeat"
                id="repeat"
                label="Repeat"
                type="password"
                value={input.repeat}
                onChange={handleInput}
                ref={repeatRef}
            />
        </InputGroup>
    );
};

export const MultiVariation: ComponentStory<typeof InputGroup> = ({
    ...props
}: InputGroupInterface) => {
    const [input, setInput] = useState<MultiVariationInterface>({
        input1: '',
        input2: '',
        input3: 'sadsdd',
    });

    const input1Ref = useRef<HTMLInputElement>(null);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput((prevState): MultiVariationInterface => {
            const { name, value } = event.target;
            return { ...prevState, [name]: value };
        });
    };

    useEffect(() => {
        if (input1Ref.current) input1Ref.current.focus();
    });

    return (
        <InputGroup {...props}>
            <Input
                name="input1"
                id="input1"
                label="Input1"
                type="text"
                value={input.input1}
                onChange={handleInput}
                endIcons={editIcons}
                hideIcons
                ref={input1Ref}
            />
            <Input
                name="input2"
                id="input2"
                label="Input2"
                type="text"
                value={input.input2}
                onChange={handleInput}
                startIcons={startIcons}
                endIcons={endIcons}
                errorMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu congue arcu, quis ultricies ipsum. Morbi at venenatis urna. Nam fringilla eros in purus gravida."
            />
            <Input
                name="input3"
                id="input3"
                label="Input3"
                type="password"
                value={input.input3}
                onChange={handleInput}
                strengthBar
            />
        </InputGroup>
    );
};

export const PhoneNumber: ComponentStory<typeof InputGroup> = ({
    ...props
}: InputGroupInterface) => {
    const [input, setInput] = useState<PhoneNumberInterface>({
        prefix: '',
        phone: '',
    });

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInput((prevState: PhoneNumberInterface) => ({ ...prevState, [name]: value }));
    };

    const handlePrefix = (select: { label: string; value: string }) => {
        setInput((prevState: PhoneNumberInterface) => ({ ...prevState, prefix: select.value }));
    };

    return (
        <InputGroup childrenLength={['20%', '80%']} {...props}>
            <Select
                name="prefix"
                placeholder="Prefix"
                options={[
                    { label: '+371', value: '+371' },
                    { label: '+144', value: '+144' },
                ]}
                onChange={handlePrefix}
            />
            <Input
                name="phone"
                id="phone"
                label="Phone"
                type="tel"
                value={input.phone}
                onChange={handleInput}
            />
        </InputGroup>
    );
};
