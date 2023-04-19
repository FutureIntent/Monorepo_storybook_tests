import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from './index';
import Box from '../Box/Box';
import { CreditCardIcon } from '../../icons/svg';
import Typography from '../Typography';

export default {
    title: 'Select',
    component: Select,
    argTypes: {},
} as ComponentMeta<typeof Select>;

export const Basic: ComponentStory<typeof Select> = (args) => (
    <Box maxWidth={600} m="auto">
        <Typography variant="paragraph2" mb="1rem">
            Default
        </Typography>
        <Select
            options={[
                { label: 'Components for Stories 1', value: 'Components 1' },
                { label: 'Components for Stories 2', value: 'Components 2' },
            ]}
            {...args}
        />
        <Box my="2.5rem" />
        <Typography variant="paragraph2" mb="1rem">
            Default with placeholder
        </Typography>
        <Select
            placeholder="This is placeholder"
            options={[
                { label: 'Components for Stories 1', value: 'Components 1' },
                { label: 'Components for Stories 2', value: 'Components 2' },
            ]}
            {...args}
        />
        <Box my="2.5rem" />
        <Typography variant="paragraph2" mb="1rem">
            Disabled
        </Typography>
        <Select
            disabled
            options={[
                { label: 'Components for Stories 1', value: 'Components 1' },
                { label: 'Components for Stories 2', value: 'Components 2' },
            ]}
            {...args}
        />
        <Box my="2.5rem" />
        <Typography variant="paragraph2" mb="1rem">
            Has error
        </Typography>
        <Select
            error="has error"
            options={[
                { label: 'Components for Stories 1', value: 'Components 1' },
                { label: 'Components for Stories 2', value: 'Components 2' },
            ]}
            {...args}
        />
        <Box my="2.5rem" />
        <Typography variant="paragraph2" mb="1rem">
            Read-only
        </Typography>
        <Select
            readonly
            options={[
                { label: 'Components for Stories 1', value: 'Components 1' },
                { label: 'Components for Stories 2', value: 'Components 2' },
            ]}
            {...args}
        />
    </Box>
);

export const WithIcon: ComponentStory<typeof Select> = (args) => (
    <Box maxWidth={600} m="auto">
        <Typography variant="paragraph2" mb="1rem">
            Default
        </Typography>
        <Select
            iconLeft={<CreditCardIcon />}
            options={[
                { label: 'Components for Stories 1', value: 'Components 1' },
                { label: 'Components for Stories 2', value: 'Components 2' },
            ]}
            {...args}
        />
        <Box my="2.5rem" />
        <Typography variant="paragraph2" mb="1rem">
            Default with placeholder
        </Typography>
        <Select
            placeholder="This is placeholder"
            iconLeft={<CreditCardIcon />}
            options={[
                { label: 'Components for Stories 1', value: 'Components 1' },
                { label: 'Components for Stories 2', value: 'Components 2' },
            ]}
            {...args}
        />
        <Box my="2.5rem" />
        <Typography variant="paragraph2" mb="1rem">
            Disabled
        </Typography>
        <Select
            disabled
            iconLeft={<CreditCardIcon />}
            options={[
                { label: 'Components for Stories 1', value: 'Components 1' },
                { label: 'Components for Stories 2', value: 'Components 2' },
            ]}
            {...args}
        />
        <Box my="2.5rem" />
        <Typography variant="paragraph2" mb="1rem">
            Has error
        </Typography>
        <Select
            error="has error"
            iconLeft={<CreditCardIcon />}
            options={[
                { label: 'Components for Stories 1', value: 'Components 1' },
                { label: 'Components for Stories 2', value: 'Components 2' },
            ]}
            {...args}
        />
        <Box my="2.5rem" />
        <Typography variant="paragraph2" mb="1rem">
            Read-only
        </Typography>
        <Select
            readonly
            iconLeft={<CreditCardIcon />}
            options={[
                { label: 'Components for Stories 1', value: 'Components 1' },
                { label: 'Components for Stories 2', value: 'Components 2' },
            ]}
            {...args}
        />
    </Box>
);
