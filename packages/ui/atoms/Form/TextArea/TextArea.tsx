import styled from 'styled-components';
import { forwardRef, Ref, useRef } from 'react';
import { StyledLabel, StyledLabelText } from '../Label/Label';
import { fontsConfig } from '../../Typography/Typography';
import colors from '../../../theme/configs/colors';
import { mediaQueriesReversed } from '../../../theme/configs/mediaQueries';

const TextAreaContainer = styled.div`
    background-color: transparent;
    border: 1px solid ${colors.grey};
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    position: relative;
    transition: border-color 0.2s ease-in-out;
    width: 100%;
`;

const StyledTextArea: any = styled.textarea`
    background-color: transparent;
    border: 1px solid var(--grey);
    border-radius: 3px;
    ${{ ...fontsConfig.paragraph2 }};
    margin: 25px 0 0;
    min-height: 100px;
    padding: 0 12px;
    resize: vertical;
    width: 100%;

    ${mediaQueriesReversed.tablet} {
        margin-top: 20px;
    }

    & + ${StyledLabel} {
        padding: 20px 12px 0;
        width: 100%;
    }
    &:-webkit-autofill:focus {
        border: 1px solid ${colors.blueBrand} !important;
    }
    &:read-only {
        background-color: ${colors.greyLt};
        border: 1px solid ${colors.greyLt};
    }
    &:focus + ${StyledLabel} {
        padding: 5px 12px 0;
    }
    &:focus + ${StyledLabel} ${StyledLabelText} {
        ${{ ...fontsConfig.caption }};
    }

    &:not(:placeholder-shown) + ${StyledLabel} {
        padding: 5px 12px 0;
    }

    &:not(:placeholder-shown) + ${StyledLabel} ${StyledLabelText} {
        ${{ ...fontsConfig.caption }};
    }
`;

export interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    name: string;
    id: string;
    value?: string | number;
}

const TextArea = forwardRef(
    ({ label, name, value, id, ...props }: TextAreaProps, ref: Ref<HTMLTextAreaElement>) => {
        const wrapperRef = useRef<HTMLDivElement>(null);
        const labelRef = useRef<HTMLLabelElement>(null);

        const handleFocus = () => {
            if (labelRef.current) labelRef.current.style.color = colors.blueBrand;
            if (wrapperRef.current) wrapperRef.current.style.borderColor = colors.blueBrand;
        };

        const handleBlur = () => {
            if (wrapperRef.current) wrapperRef.current.style.borderColor = colors.grey;
            if (labelRef.current) labelRef.current.style.color = colors.greyDark;
        };

        return (
            <TextAreaContainer ref={wrapperRef} data-testid="areaContainer">
                <StyledTextArea
                    placeholder=" "
                    name={name}
                    value={value}
                    id={id}
                    ref={ref}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    {...props}
                />
                <StyledLabel
                    htmlFor={id}
                    ref={labelRef}
                    className="styledLabel"
                    data-testid="styledLabel"
                >
                    <StyledLabelText variant="paragraph2" className="styledLabelText">
                        {label}
                    </StyledLabelText>
                </StyledLabel>
            </TextAreaContainer>
        );
    },
);

export default TextArea;
