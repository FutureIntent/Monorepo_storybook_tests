import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tooltip from './Tooltip';
import Typography from '../Typography';

export default {
    title: 'Tooltip',
    component: Tooltip,
    argTypes: {
        text: {
            control: {
                type: 'text',
            },
            defaultValue: 'Tooltip text',
        },
    },
} as ComponentMeta<typeof Tooltip>;

export const Basic: ComponentStory<typeof Tooltip> = (args) => (
    <Tooltip {...args}>
        <Typography variant="paragraph">This text triggers tooltip</Typography>
    </Tooltip>
);
