import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './index';
import Box from '../Box';
import { AddIcon } from '../../icons/svg';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        theme: { control: false },
        as: { control: false },
        forwardedAs: { control: false },
        variant: {
            control: {
                type: 'select',
            },
            defaultValue: 'primary',
            options: [
                'primary',
                'secondary',
                'outline',
                'borderless',
                'borderlessNeutral',
                'borderlessNegative',
            ],
        },
        size: {
            control: {
                type: 'select',
            },
            defaultValue: 'default',
            options: ['default', 'small'],
        },
    },
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = (args) => (
    <Box display="flex" flexDirection="column" gridGap={30}>
        <Button {...args}>Click me</Button>
        <Button {...args} withIcon>
            With Icon <AddIcon />
        </Button>
        <Button tooltipText="This is example of tooltip" {...args}>
            Hover me to see tooltip
        </Button>
    </Box>
);
