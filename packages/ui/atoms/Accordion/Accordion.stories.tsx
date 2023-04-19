import { ComponentMeta, ComponentStory } from '@storybook/react';
import Accordion from './Accordion';
import Box from '../Box';
import CollapsableItem from './CollapsableItem';
import Typography from '../Typography';
import Select from '../Select';

export default {
    title: 'Accordion',
    component: Accordion,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        rowGap: {
            control: {
                type: 'number',
            },
        },
        withSwitch: {
            control: {
                type: 'boolean',
            },
        },
    },
} as ComponentMeta<typeof Accordion>;

const InfoTooltipContent = () => (
    <Box>
        <Typography variant="h3">This is info tooltip</Typography>
        <Typography variant="paragraph2">
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad dicta ea eos est hic
                inventore labore laboriosam, mollitia, omnis porro possimus quod quos recusandae
                repellendus saepe tempore, veritatis! Ex?
            </div>
            <div>
                Accusantium asperiores deleniti est necessitatibus neque quisquam reiciendis rem! Ab
                aperiam aspernatur cupiditate deserunt ea est eveniet excepturi fugiat, minima,
                numquam perferendis quia quidem repudiandae ut velit. Commodi corporis, doloremque?
            </div>{' '}
        </Typography>
    </Box>
);

export const Basic: ComponentStory<typeof Accordion> = (args) => (
    <Box
        px="10rem"
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gridGap={20}
    >
        <Accordion {...args}>
            <Accordion.Item label="Item 1" infoTooltip={<InfoTooltipContent />}>
                <Typography>This is content of collapsable Item 1</Typography>
            </Accordion.Item>
            <Accordion.Item
                label="Item 2 With input, that`s going to be disabled if switch is off"
                infoTooltip={<InfoTooltipContent />}
            >
                <Typography>This is content of collapsable Item 2 With Input</Typography>
                <Select
                    name="test select"
                    options={[
                        { value: 'test', label: 'test' },
                        { value: 'test2', label: 'test2' },
                        { value: 'test3', label: 'test3' },
                    ]}
                />
            </Accordion.Item>
            <Accordion.Item label="Item 3" infoTooltip={<InfoTooltipContent />}>
                <Typography>This is content of collapsable Item 3</Typography>
            </Accordion.Item>
            <Accordion.Item label="Item 4" infoTooltip={<InfoTooltipContent />}>
                <Typography>This is content of collapsable Item 4</Typography>
            </Accordion.Item>
        </Accordion>
    </Box>
);

export const Collapsable: ComponentStory<typeof Accordion> = (args) => (
    <Box
        px="10rem"
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gridGap={20}
    >
        <CollapsableItem {...args} label="Collapsable Item">
            <Typography>This is content of collapsable Item</Typography>
        </CollapsableItem>
    </Box>
);
