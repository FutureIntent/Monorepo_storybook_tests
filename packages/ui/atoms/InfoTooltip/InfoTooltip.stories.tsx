import { ComponentMeta, ComponentStory } from '@storybook/react';
import InfoTooltip from './InfoTooltip';
import Typography from '../Typography';

export default {
    title: 'InfoTooltip',
    component: InfoTooltip,
    argTypes: {},
} as ComponentMeta<typeof InfoTooltip>;

export const Basic: ComponentStory<typeof InfoTooltip> = (args) => (
    <InfoTooltip {...args}>
        <>
            <Typography variant="h3">Demo Heading inside info tooltip</Typography>
            <Typography variant="paragraph2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, nihil nobis
                quasi reprehenderit sed voluptas? Ad assumenda consequatur cum dolor dolores
                doloribus enim impedit magnam nam nulla repellendus, sint veritatis? Alias aliquid
                assumenda autem dolor doloremque ea eum explicabo inventore ipsa ipsam iste, minima
                mollitia nisi officia perspiciatis porro quis reiciendis repellat similique soluta
                suscipit vel velit voluptate voluptatibus voluptatum.
            </Typography>
        </>
    </InfoTooltip>
);
