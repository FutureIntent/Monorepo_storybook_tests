import styled from 'styled-components';
import { ChangeEvent, ForwardedRef, forwardRef, useState } from 'react';
import { AnimatePresence, motion, useSpring } from 'framer-motion';
import { LockIcon } from '../../icons/svg';
import DisabledOverlay from './DisabledOverlay';
import SwitchLabel from './SwitchLabel';
import StatusText from './StatusText';
import Fill from './Fill';
import Toggle from './Toggle';

const LabelOn = styled(StatusText)`
    left: 1.1rem;
`;

const LabelOff = styled(StatusText)`
    right: 1.05rem;
`;

const InputRoot = styled.input.attrs(() => ({ type: 'checkbox' }))`
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;

    &:checked {
        + ${SwitchLabel} {
            transform: translate(3rem);
        }

        ~ ${Fill} {
            background-color: ${({ theme }) => theme.colors.blueBrand};
        }

        ~ ${LabelOff} {
            opacity: 0;
        }
    }

    &:not(:checked) {
        + ${SwitchLabel} {
            transform: translate(3rem);
        }

        ~ ${Fill} {
            background-color: ${({ theme }) => theme.colors.greyDark};
        }

        ~ ${LabelOn} {
            opacity: 0;
        }
    }
`;

const Wrapper = styled(motion.div)`
    align-items: center;
    display: flex;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

export interface SwitchProps {
    name: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Switch = (
    { name, defaultChecked = false, disabled, onChange = () => {}, ...rest }: SwitchProps,
    ref: ForwardedRef<HTMLInputElement>,
) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const toggle = useSpring(isChecked ? 41 : 5, {
        stiffness: 600,
        damping: 27,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        onChange(e);
        setIsChecked(e.target.checked);
        toggle.set(e.target.checked ? 41 : 5);
    };

    return (
        <SwitchLabel>
            <AnimatePresence>
                {!disabled && (
                    <Wrapper
                        initial={{ x: disabled ? '0%' : '-100%' }}
                        animate={{ x: disabled ? '-100%' : '0%' }}
                        exit={{ x: disabled ? '0%' : '-100%' }}
                    >
                        <InputRoot
                            name={name}
                            disabled={disabled}
                            defaultChecked={isChecked}
                            onChange={handleChange}
                            {...rest}
                            ref={ref}
                        />
                        <LabelOn>On</LabelOn>
                        <LabelOff>Off</LabelOff>
                        <Toggle style={{ x: toggle }} />
                        <Fill />
                    </Wrapper>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {disabled && (
                    <DisabledOverlay>
                        <LockIcon />
                    </DisabledOverlay>
                )}
            </AnimatePresence>
        </SwitchLabel>
    );
};

export default forwardRef(Switch);
