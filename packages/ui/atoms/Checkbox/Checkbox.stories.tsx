import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox, { ICheckboxProps } from './Checkbox';

export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {},
} as ComponentMeta<typeof Checkbox>;

export const Basic: ComponentStory<typeof Checkbox> = ({
    label,
    ...rest
}: { label: string } & ICheckboxProps) => <Checkbox label="Checkbox subject" {...rest} />;
