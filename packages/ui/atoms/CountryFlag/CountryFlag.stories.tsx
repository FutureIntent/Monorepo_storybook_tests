import { ComponentMeta, ComponentStory } from '@storybook/react';
import CountryFlag from './CountryFlag';
import { CountryIso, ICountryFlagProps } from './types';

export default {
    title: 'CountryFlag',
    component: CountryFlag,
    argTypes: {
        iso: {
            control: {
                type: 'select',
            },
            options: Object.values(CountryIso),
            defaultValue: CountryIso.Italy,
        },
        fontSize: {
            control: {
                type: 'number',
            },
            defaultValue: 120,
        },
    },
} as ComponentMeta<typeof CountryFlag & { fontSize: number }>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Basic: ComponentStory<typeof CountryFlag & { fontSize: number }> = ({
    fontSize,
    ...args
}: ICountryFlagProps & { fontSize: number }) => (
    <div style={{ fontSize }}>
        <CountryFlag {...args}></CountryFlag>
    </div>
);
