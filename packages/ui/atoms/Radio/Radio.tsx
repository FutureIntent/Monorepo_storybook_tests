import { ReactElement } from 'react';
import { RadioInput, RadioInputWrapper, RadioLabel, Fill } from './Components';
import Typography from '../Typography';

export interface IRadioProps {
    groupName?: string;
    checked?: boolean;
    disabled?: boolean;
    label: string;
    value: string;
}

const spring = {
    type: 'spring',
    damping: 25,
    stiffness: 400,
    duration: 20,
    mass: 0.5,
};

const Radio = ({ value, label, checked, groupName, ...rest }: IRadioProps): ReactElement => (
    <RadioLabel isChecked={checked}>
        <RadioInputWrapper>
            <RadioInput type="radio" value={value} {...rest} name={groupName} />
            <Fill
                animate={{
                    width: checked ? '60%' : '0%',
                    height: checked ? '60%' : '0%',
                }}
                transition={spring}
            />
        </RadioInputWrapper>
        <Typography variant="paragraph2" color="currentColor">
            {label}
        </Typography>
    </RadioLabel>
);

export default Radio;
