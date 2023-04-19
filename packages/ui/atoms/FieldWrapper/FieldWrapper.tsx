import styled from 'styled-components';

import { props as defaultFilteredProps } from '@styled-system/should-forward-prop';
import { Label, LabelText } from '../Label';

export const FieldWrapper = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        ![...defaultFilteredProps, 'withPlaceholder'].includes(String(prop)),
})<{ withPlaceholder?: boolean }>`
    align-items: center;
    color: ${({ theme }) => theme.colors.greyDark};
    display: flex;
    flex: 1;
    font-size: 2.4rem;
    gap: 0.5rem;
    padding: 0 1.25rem;
    position: relative;

    svg {
        font-size: 24px;
        z-index: 4;
    }

    input:not(.read-only),
    textarea:not(.read-only),
    select:not(.read-only) {
        &:not(:focus) ~ ${Label} {
            border: 1px solid ${({ theme }) => theme.colors.grey};
        }

        &:focus {
            ~ ${Label} {
                border: 1px solid ${({ theme }) => theme.colors.blueBrand};

                ${LabelText} {
                    color: ${({ theme }) => theme.colors.blueBrand};
                }
            }
        }

        &.error ~ ${Label} {
            border-color: ${({ theme }) => theme.colors.redWarning};

            ${LabelText} {
                color: ${({ theme }) => theme.colors.redWarning};
            }
        }
    }

    input.read-only,
    textarea.read-only,
    .select.read-only,
    select.read-only {
        ~ ${Label} {
            background-color: ${({ theme }) => theme.colors.greyLt};
            border: 1px solid ${({ theme }) => theme.colors.grey};
            z-index: 2;
        }

        &:focus ~ ${Label} ${LabelText} {
            color: ${({ theme }) => theme.colors.greyDark};
        }
    }

    input,
    textarea,
    select {
        font-size: 1.2rem;
        transform: translateY(9px);
        z-index: 3;

        @media all and (min-width: 768px) {
            font-size: 1.6rem;
        }

        ${({ withPlaceholder }) =>
            withPlaceholder &&
            `
            ~ ${Label}
            ${LabelText} {
              font-size: 1rem;
              transform: translateY(6px);
              
              @media all and (min-width: 768px) {
                font-size: 1.2rem;
              }
            }
            
            &::placeholder {
              font-size: 1.2rem;
              
              @media all and (min-width: 768px) {
                font-size: 1.6rem;
              }
              
            } 
        `}

        &:focus:not(.read-only),
            &:not(:placeholder-shown) {
            ~ ${Label} ${LabelText} {
                font-size: 1rem;
                transform: translateY(6px);

                @media all and (min-width: 768px) {
                    font-size: 1.2rem;
                }
            }
        }
    }
`;
