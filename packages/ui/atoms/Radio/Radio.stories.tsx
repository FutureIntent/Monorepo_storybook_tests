import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

export default {
    title: 'Radio',
    component: Radio,
    argTypes: {},
} as ComponentMeta<typeof Radio>;

const depoOptions = [
    { label: 'Depo 1', value: 'depo1' },
    { label: 'Depo 2', value: 'depo2' },
    { label: 'Depo 3', value: 'depo3' },
    { label: 'Depo 4', value: 'depo4' },
];

export const Basic: ComponentStory<typeof Radio> = () => {
    const { control } = useForm();

    return (
        <RadioGroup control={control} groupName="testing">
            {depoOptions.map((option) => (
                <Radio key={option.value} label={option.label} value={option.value} />
            ))}
        </RadioGroup>
    );
};
