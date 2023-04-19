import { ComponentMeta, ComponentStory } from '@storybook/react';
import PhoneCodeSelect from './PhoneCodeSelect';

export default {
    title: 'PhoneCodeSelect',
    component: PhoneCodeSelect,
    argTypes: {
        iconLeft: {
            control: false,
        },
        iconRight: {
            control: false,
        },
        selected: {
            control: false,
        },
        sizeVariant: {
            control: false,
        },
    },
} as ComponentMeta<typeof PhoneCodeSelect>;

export const Basic: ComponentStory<typeof PhoneCodeSelect> = (args) => (
    <PhoneCodeSelect {...args}></PhoneCodeSelect>
);
