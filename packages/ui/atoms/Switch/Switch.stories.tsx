import { ComponentMeta } from '@storybook/react';
import Switch, { SwitchProps } from './Switch';

export default {
    title: 'Switch',
    component: Switch,
    argTypes: {
        disabled: {
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        },
    },
} as ComponentMeta<typeof Switch>;

export const Basic = (args: SwitchProps) => <Switch {...args} />;
