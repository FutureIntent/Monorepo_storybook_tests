import { ComponentMeta, ComponentStory } from '@storybook/react';
import Typography, { TypographyProps } from './index';
import colors from '../../theme/configs/colors';
import Box from '../Box/Box';

interface TypographyStory extends TypographyProps {
    text?: string;
}

export default {
    title: 'Typography',
    component: Typography,
    argTypes: {
        variant: {
            control: false,
        },
        as: {
            control: false,
        },
        id: {
            control: false,
        },
        color: {
            control: {
                type: 'select',
            },
            defaultValue: 'blueBrand',
            options: Object.entries(colors).map(([name]) => name),
        },
        hoverColor: {
            control: {
                type: 'select',
            },
            defaultValue: 'blueBrand',
            options: Object.entries(colors).map(([name]) => name),
        },
        text: {
            control: {
                type: 'text',
            },
            defaultValue: 'Just some random text for preview.',
        },
        whiteSpace: {
            control: {
                type: 'select',
            },
            options: ['normal', 'nowrap', 'break-spaces', 'pre', 'pre-line', 'pre-wrap'],
        },
    },
} as ComponentMeta<typeof Typography>;

export const Basic: ComponentStory<typeof Typography> = ({ text, ...args }: TypographyStory) => (
    <Box maxWidth="70%" m="0 auto">
        <h1>Typography Component</h1>
        <hr />
        <p style={{ marginBottom: '40px' }}>Typography variants that are used in app.</p>
        <Typography variant="h1" {...args}>
            H1 - {text}
        </Typography>
        <Typography variant="h2" {...args}>
            H2 - {text}
        </Typography>
        <Typography variant="h3" {...args}>
            H3 - {text}
        </Typography>
        <Typography variant="paragraph" {...args}>
            Paragraph - {text}
        </Typography>
        <Typography variant="paragraph2" {...args}>
            Paragraph2 - {text}
        </Typography>
        <Typography variant="caption" {...args}>
            Caption - {text}
        </Typography>
        <Typography variant="accent" {...args}>
            Accent - {text}
        </Typography>
        <Typography variant="homeBanner" {...args}>
            HomeBanner - {text}
        </Typography>
        <Typography variant="link" {...args}>
            Link - {text}
        </Typography>
    </Box>
);
