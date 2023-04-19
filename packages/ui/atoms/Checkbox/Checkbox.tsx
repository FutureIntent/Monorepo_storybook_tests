import { ChangeEvent, ForwardedRef, ReactElement, useState, forwardRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { CheckboxInput, CheckboxInputWrapper, CheckboxLabel, Fill } from './Components';
import Box from '../Box/Box';
import Typography from '../Typography';

export interface ICheckboxProps {
    name: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

const tickVariants = {
    pressed: (isChecked: boolean) => ({ pathLength: isChecked ? 0.85 : 0.2 }),
    checked: { pathLength: 1 },
    unchecked: { pathLength: 0 },
};

const spring = {
    type: 'spring',
    damping: 25,
    stiffness: 400,
    duration: 20,
    mass: 0.5,
};

const Checkbox = (
    {
        name = 'test',
        defaultChecked = false,
        label,
        disabled,
        onChange = () => {},
        ...rest
    }: ICheckboxProps,
    ref: ForwardedRef<HTMLInputElement>,
): ReactElement => {
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();

        onChange(e);
        setIsChecked(e.target.checked);
    };

    return (
        <CheckboxLabel isChecked={isChecked}>
            <CheckboxInputWrapper>
                <CheckboxInput
                    name={name}
                    disabled={disabled}
                    defaultChecked={isChecked}
                    onChange={handleChange}
                    {...rest}
                    ref={ref}
                />
                <Fill
                    initial={{ x: isChecked ? '-100%' : '-20%', y: isChecked ? '-100%' : '-20%' }}
                    animate={{ x: !isChecked ? '-100%' : '-20%', y: !isChecked ? '-100%' : '-20%' }}
                    transition={spring}
                />
                <Box
                    display="flex"
                    position="absolute"
                    top={0}
                    left={0}
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="100%"
                >
                    <motion.svg
                        initial={false}
                        animate={isChecked ? 'checked' : 'unchecked'}
                        whileHover="hover"
                        whileTap="pressed"
                        width="1em"
                        height="1em"
                        onClick={() => setIsChecked(!isChecked)}
                        viewBox="0 0 16 13"
                    >
                        <motion.path
                            d="M1.99951 6L6.30811 10L14.0004 2"
                            strokeWidth="3"
                            fill="transparent"
                            stroke="hsl(0, 0%, 100%)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={tickVariants}
                            style={{ pathLength, opacity }}
                            custom={isChecked}
                        />
                    </motion.svg>
                </Box>
            </CheckboxInputWrapper>
            <Typography variant="paragraph2" color="currentColor">
                {label}
            </Typography>
        </CheckboxLabel>
    );
};

export default forwardRef(Checkbox);
