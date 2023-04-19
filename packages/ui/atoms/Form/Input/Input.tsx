import { forwardRef, Ref, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { mediaQueriesReversed } from '../../../theme/configs/mediaQueries';
import { StyledLabel, StyledLabelText } from '../Label/Label';
import Typography, { fontsConfig } from '../../Typography/Typography';
import colors from '../../../theme/configs/colors';
import {
    ErrorMessageInterface,
    IconPropsInterface,
    InputProps,
    InputWrapperInterface,
} from './types/inputTypes';
import IconIterator from './components/iconIterator';
import { handleBlur, handleError, handleFocus, handleResize } from './triggers/triggers';
import ShowPassword from './components/showPassword';
import PasswordEvaluator from './components/passwordEvaluator';
import Button from '../../Button/Button';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 200px;
    position: relative;
    width: 100%;
`;

const InputWrapper: any = styled.div.attrs(
    ({ iconBefore, iconAfter, showPassword, hasButton }: InputWrapperInterface) => ({
        paddingLeft: iconBefore ? '0' : '12px',
        paddingRight: iconAfter || showPassword || hasButton ? '0' : '12px',
    }),
)`
    align-items: center;
    background-color: transparent;
    border: 1px solid ${colors.grey};
    border-radius: 3px;
    display: flex;
    transition: border-color 0.2s ease-in-out;
    width: 100%;
    padding: 0 ${(props) => props.paddingRight} 0 ${(props) => props.paddingLeft};
`;

const InputHolder = styled.div`
    align-items: flex-start;
    display: flex;
    height: 43px;
    justify-content: flex-start;
    position: relative;
    width: 100%;
    ${mediaQueriesReversed.tablet} {
        height: 38px;
    }
`;

const StyledInputElement = styled.input`
    ${{ ...fontsConfig.paragraph2 }};
    -moz-appearance: textfield;
    background-color: transparent;
    padding: 18px 0 0;
    width: 100%;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &::-ms-reveal {
        display: none;
    }
    &:read-only {
        background-color: ${colors.greyLt};
        border: 1px solid ${colors.greyLt};
    }
    &:-webkit-autofill:focus {
        border: none;
    }
    &:focus + ${StyledLabel} {
        padding-top: 3px;
        ${mediaQueriesReversed.tablet} {
            padding-top: 5px;
        }
    }
    &:focus + ${StyledLabel} ${StyledLabelText} {
        ${{ ...fontsConfig.caption }};
    }

    &:not(:placeholder-shown) + ${StyledLabel} {
        padding-top: 3px;
        ${mediaQueriesReversed.tablet} {
            padding-top: 5px;
        }
    }

    &:not(:placeholder-shown) + ${StyledLabel} ${StyledLabelText} {
        ${{ ...fontsConfig.caption }};
    }

    &:disabled {
        background-color: transparent;
        border: none;
    }
`;

const ErrorMessage: any = styled.span.attrs(({ evaluator }: ErrorMessageInterface) => ({
    paddingLeft: evaluator ? '0' : '12px',
}))`
    height: 2em;
    margin-top: 5px;
    overflow-y: auto;
    width: 100%;
    padding-left: ${(props) => props.paddingLeft};
    word-break: break-word;
`;

const InputButton = styled(Button)`
    height: 45px;
    padding: 5px;
    width: 40%;

    ${mediaQueriesReversed.tablet} {
        height: 40px;
    }
`;

const Input = forwardRef(
    (
        {
            label,
            disabled = false,
            name,
            button,
            value = '',
            strengthBar = false,
            type = 'text',
            startIcons,
            endIcons,
            errorMessage = null,
            hideIcons = false,
            id,
            ...props
        }: InputProps,
        ref: Ref<HTMLInputElement>,
    ) => {
        const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
        const [hiddenIcons, setHiddenIcons] = useState<boolean>(hideIcons);
        const [inputType, setInputType] = useState<string>(type);
        const [error, setError] = useState<string | null>(errorMessage);
        const [evaluator, setEvaluator] = useState<boolean>(strengthBar);
        const [inputDisabled, setInputDisabled] = useState<boolean>(disabled);

        const wrapperRef = useRef<HTMLDivElement>(null);
        const labelRef = useRef<HTMLLabelElement>(null);

        useEffect(() => {
            handleError({
                wrapper: wrapperRef.current,
                label: labelRef.current,
                input: document.getElementById(id),
                hasError: !!error,
            });
        });

        useEffect(() => {
            setHiddenIcons(hideIcons);
            setInputType(type);
            setError(errorMessage);
            setEvaluator(strengthBar);
            setInputDisabled(disabled);
        }, [hideIcons, type, errorMessage, strengthBar, disabled]);

        useEffect(() => {
            window.addEventListener('resize', () => handleResize({ setWindowWidth }));
            return () => {
                window.removeEventListener('resize', () => handleResize({ setWindowWidth }));
            };
        }, []);

        const iconProps: IconPropsInterface = {
            hideIcons: hiddenIcons,
            hasError: !!error,
            width: windowWidth,
        };

        return (
            <InputContainer>
                <InputWrapper
                    ref={wrapperRef}
                    iconBefore={!!startIcons}
                    iconAfter={!!endIcons}
                    showPassword={type === 'password'}
                    hasButton={!!button}
                    data-testid="border"
                >
                    {startIcons && !inputDisabled && (
                        <IconIterator icons={startIcons} {...iconProps} />
                    )}

                    <InputHolder>
                        <StyledInputElement
                            type={inputType}
                            placeholder=" "
                            name={name}
                            value={value}
                            ref={ref}
                            onFocus={() =>
                                handleFocus({
                                    hideIcons,
                                    hasError: !!error,
                                    wrapper: wrapperRef.current,
                                    label: labelRef.current,
                                    setHiddenIcons,
                                })
                            }
                            onBlur={() =>
                                handleBlur({
                                    hideIcons,
                                    hasError: !!error,
                                    wrapper: wrapperRef.current,
                                    label: labelRef.current,
                                    setHiddenIcons,
                                })
                            }
                            id={id}
                            disabled={inputDisabled}
                            {...props}
                        />
                        {label && (
                            <StyledLabel htmlFor={id} ref={labelRef} data-testid="label">
                                <StyledLabelText variant="paragraph2">{label}</StyledLabelText>
                            </StyledLabel>
                        )}
                    </InputHolder>

                    {type === 'password' && !inputDisabled && (
                        <ShowPassword
                            inputType={inputType}
                            setInputType={setInputType}
                            {...iconProps}
                        />
                    )}

                    {endIcons && !inputDisabled && <IconIterator icons={endIcons} {...iconProps} />}

                    {button && (
                        <InputButton
                            variant="borderless"
                            name={button.name}
                            disabled={disabled}
                            onClick={disabled ? () => {} : () => button.handleAction(button.name)}
                        >
                            <Typography
                                variant="paragraph2"
                                fontWeight={700}
                                color={colors.blueBrand}
                            >
                                {button.text}
                            </Typography>
                        </InputButton>
                    )}
                </InputWrapper>

                {strengthBar && !inputDisabled && (
                    <PasswordEvaluator value={value as string} setError={setError} />
                )}

                <ErrorMessage evaluator={evaluator}>
                    <Typography variant="caption" color={colors.redWarning} hideOverflow={false}>
                        {error}
                    </Typography>
                </ErrorMessage>
            </InputContainer>
        );
    },
);

export default Input;
