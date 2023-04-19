import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box from './Box';
import colors from '../../theme/configs/colors';

export default {
    title: 'Box',
    component: Box,
    argTypes: {
        width: {
            control: {
                type: 'number',
            },
            defaultValue: 200,
        },
        height: {
            control: {
                type: 'number',
            },
            defaultValue: 200,
        },
        borderRadius: {
            control: {
                type: 'number',
            },
            defaultValue: 6,
        },
        backgroundColor: {
            control: {
                type: 'select',
            },
            defaultValue: 'blueBrand',
            options: Object.entries(colors).map(([name]) => name),
        },
    },
} as ComponentMeta<typeof Box>;

type Colors = keyof typeof colors;

export const Basic: ComponentStory<typeof Box> = ({ backgroundColor, ...args }) => (
    <>
        <h1>Box component</h1>
        <hr />
        <p>Can accept almost any css property as prop.</p>
        <Box mt="40px" backgroundColor={colors[backgroundColor as Colors]} {...args}></Box>
    </>
);
