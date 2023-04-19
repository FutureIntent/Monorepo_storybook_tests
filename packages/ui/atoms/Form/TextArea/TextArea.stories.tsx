import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useRef, useState } from 'react';
import TextArea, { TextAreaProps } from './TextArea';

export default {
    title: 'TextArea',
    component: TextArea,
    argTypes: {
        label: {
            name: 'Text area label',
            control: {
                type: 'text',
            },
            defaultValue: 'Enter comment',
        },
        ref: {
            name: 'Text area ref',
            table: {
                display: false,
            },
            control: false,
        },
        value: {
            name: 'Text area value',
            table: {
                display: false,
            },
            control: false,
        },
        name: {
            name: 'Text area name',
            control: {
                type: 'text',
            },
            defaultValue: 'textAreaName',
        },
        id: {
            name: 'Text area id',
            control: {
                type: 'text',
            },
            defaultValue: 'textAreaId',
        },
    },
} as ComponentMeta<typeof TextArea>;

export const TextAreaStory: ComponentStory<typeof TextArea> = ({ ...props }: TextAreaProps) => {
    const [input, setInput] = useState<string>('');
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    return (
        <TextArea
            {...props}
            value={input}
            onChange={(event: any) => setInput(event.target.value)}
            ref={textAreaRef}
        />
    );
};
