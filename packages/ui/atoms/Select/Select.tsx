import { ForwardedRef, forwardRef, useState } from 'react';
import ReactSelect, { components, IndicatorProps } from 'react-select';
import styled from 'styled-components';
import { ResponsiveValue } from 'styled-system';
import { props as defaultFilteredProps } from '@styled-system/should-forward-prop';
import FieldWrapper from '../FieldWrapper';
import { Label, LabelText } from '../Label';
import colors from '../../theme/configs/colors';
import { SelectOption, SelectProps } from './types';
import defaultConfig from './stylesConfig/default';
import { SelectSizes, sizeVariants } from './sizes';
import Typography from '../Typography';
import { DropdownIcon } from '../../icons/svg';
import { mediaQueriesReversed } from '../../theme/configs/mediaQueries';

const ExtendedFieldWrapper = styled(FieldWrapper).withConfig({
    shouldForwardProp: (prop) =>
        ![...defaultFilteredProps, 'sizeVariant', 'hasValue', 'isFocused', 'disabled'].includes(
            String(prop),
        ),
})<{
    isFocused: boolean;
    hasValue: boolean;
    disabled?: boolean;
    sizeVariant: ResponsiveValue<SelectSizes>;
}>`
    ${sizeVariants};
    font-size: 1.6rem;
    height: 45px;

    ${mediaQueriesReversed.tablet} {
        font-size: 1.2rem;
        height: 40px;
    }

    .select:not(.read-only) {
        ${({ isFocused, theme }) =>
            isFocused !== undefined &&
            !isFocused &&
            `
        ~ ${Label} {
              border: 1px solid ${theme.colors.grey};
          }
    `};

        &.error ~ ${Label} {
            border-color: ${({ theme }) => theme.colors.redWarning};

            ${LabelText} {
                color: ${({ theme }) => theme.colors.redWarning};
            }
        }
    }

    ${({ disabled }) =>
        disabled &&
        `
   cursor: not-allowed;
      opacity: 0.4;
      `}

    ${({ isFocused, hasValue, theme }) =>
        ((isFocused !== undefined && isFocused) || hasValue) &&
        `
        .select:not(.read-only) {
        ~ ${Label} {
                ${isFocused ? `border: 1px solid ${theme.colors.blueBrand}` : ''};

                ${LabelText} {
                  ${isFocused ? `color: ${theme.colors.blueBrand}` : ''};
                    font-size: 1rem;
                    transform: translateY(6px);

                    @media all and (min-width: 768px) {
                        font-size: 1.2rem;
                    }
                }
                
            }
    `};
`;

const DropdownIndicator = (props: IndicatorProps<SelectOption, false>) => (
    <components.DropdownIndicator {...props}>
        <DropdownIcon />
    </components.DropdownIndicator>
);

const Select = (
    {
        iconLeft,
        iconRight,
        name,
        label = 'Testing Label',
        placeholder = ' ',
        selected,
        defaultValue,
        readonly,
        error,
        isDirty,
        disabled,
        sizeVariant = { _: 'small', tablet: 'default' },
        onChange = () => {},
        ...rest
    }: SelectProps,
    ref: ForwardedRef<HTMLSelectElement>,
) => {
    const [value, setValue] = useState(defaultValue);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const classes = [];

    if (readonly) {
        classes.push('read-only');
    }

    if (error) {
        classes.push('error');
    }

    if (disabled) {
        classes.push('disabled');
    }

    const handleChange = (selectedOption: any) => {
        setValue(selectedOption);
        onChange(selectedOption);
    };

    return (
        <>
            <ExtendedFieldWrapper
                disabled={disabled}
                sizeVariant={sizeVariant}
                hasValue={
                    Boolean(selected?.value) ||
                    Boolean(value?.value) ||
                    Boolean(placeholder && placeholder !== ' ')
                }
                isFocused={isFocused}
            >
                {iconLeft}
                <ReactSelect
                    aria-labelledby={name}
                    name={name}
                    data-testid={`select-${name}`}
                    className={`select ${classes.join(' ')}`}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    inputRef={ref}
                    menuIsOpen={readonly ? false : undefined}
                    openMenuOnClick={!readonly}
                    isDisabled={disabled}
                    isSearchable={false}
                    styles={defaultConfig}
                    readonly={readonly}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    components={{
                        DropdownIndicator,
                    }}
                    {...rest}
                />
                {label && (
                    <Label htmlFor={name} aria-label={label}>
                        <LabelText
                            hasLeftIcon={Boolean(iconLeft)}
                            withPlaceholder={placeholder !== ' ' && !!label}
                            variant="paragraph2"
                            color={colors.greyDark}
                        >
                            {label}
                        </LabelText>
                    </Label>
                )}
                {iconRight}
            </ExtendedFieldWrapper>
            {Boolean(error) && (
                <Typography variant="caption" color={colors.redWarning} pt={5} pl={15}>
                    {error}
                </Typography>
            )}
        </>
    );
};

export default forwardRef(Select);
