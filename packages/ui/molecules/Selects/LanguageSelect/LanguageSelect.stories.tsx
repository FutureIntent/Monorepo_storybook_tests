import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LanguageSelect } from './index';
import { CountryIso } from '../../../atoms/CountryFlag/types';

export default {
    title: 'LanguageSelect',
    component: LanguageSelect,
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
        defaultValue: {
            control: {
                type: 'select',
            },
            options: Object.values(CountryIso),
            defaultValue: CountryIso.Italy,
        },
    },
} as ComponentMeta<typeof LanguageSelect>;

export const Basic: ComponentStory<typeof LanguageSelect> = (args) => <LanguageSelect {...args} />;
