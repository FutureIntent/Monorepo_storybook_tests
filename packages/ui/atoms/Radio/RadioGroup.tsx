import { ReactElement } from 'react';
import { Control, useController } from 'react-hook-form';
import Box from '../Box/Box';
import Radio from './Radio';

interface RadioGroupProps {
    groupName: string;
    control: Control;
    children: ReactElement[];
    required?: boolean;
    defaultValue?: string;
}

const RadioGroup = ({
    groupName,
    control,
    defaultValue,
    required,
    children,
}: RadioGroupProps): ReactElement => {
    const {
        field: { value, onChange, name },
    } = useController({
        name: groupName,
        control,
        rules: { required: !!required },
        defaultValue,
    });

    return (
        <Box display="flex" flexDirection="column" gridGap={10}>
            {children.map(
                (child) =>
                    child &&
                    child.type === Radio && (
                        <child.type
                            {...child.props}
                            key={child.props.value}
                            onChange={onChange}
                            groupName={name}
                            checked={value === child.props.value}
                        />
                    ),
            )}
        </Box>
    );
};

export default RadioGroup;
