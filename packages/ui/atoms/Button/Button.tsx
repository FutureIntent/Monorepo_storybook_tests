import styled from 'styled-components';
import { flexbox, FlexboxProps, ResponsiveValue } from 'styled-system';

import { ReactNode } from 'react';
import { ButtonSize, sizeVariants } from './sizes';
import buttonVariants, { ButtonVariants } from './variants';
import { fontsConfig } from '../Typography';
import Tooltip from '../Tooltip';

export interface ButtonProps extends FlexboxProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants;
    size?: ResponsiveValue<ButtonSize> | ButtonSize;
    tooltipText?: string;
    children: ReactNode;
    withIcon?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const ButtonStyles = styled.button.attrs(
    (props: ButtonProps): ButtonProps => ({
        type: props.type || 'button',
        withIcon: !!props.withIcon,
        variant: props.variant || 'primary',
        size: props.size || { _: 'small', tablet: 'default' },
        ...props,
    }),
)<ButtonProps>`
    ${{ ...fontsConfig.accent }};
    line-height: 1;
    border: 1px solid transparent;
    white-space: nowrap;
    border-radius: 0.3rem;
    transition: color 200ms ease-in-out, background-color 200ms ease-in-out,
        box-shadow 200ms ease-in-out;
    display: flex;
    justify-content: ${({ withIcon }) => (withIcon ? 'space-between' : 'center')};
    align-items: center;
    gap: 1rem;
    overflow: hidden;
    text-align: center;

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        pointer-events: none;
    }

    &:focus {
        outline: none;
    }

    ${buttonVariants};
    ${sizeVariants};
    ${flexbox};
`;

const Button = ({ tooltipText, children, ...rest }: ButtonProps) => {
    if (tooltipText) {
        return (
            <Tooltip text={tooltipText}>
                <ButtonStyles {...rest}>{children}</ButtonStyles>
            </Tooltip>
        );
    }

    return <ButtonStyles {...rest}>{children}</ButtonStyles>;
};

export default Button;
