import styled from 'styled-components';

import { props as defaultFilteredProps } from '@styled-system/should-forward-prop';
import Typography, { TypographyProps, fontsConfig } from '../Typography';

export const Label = styled.label`
    border-radius: 0.3rem;
    bottom: 0;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: 2;
`;

export const LabelText = styled(Typography).withConfig({
    shouldForwardProp: (prop) =>
        ![...defaultFilteredProps, 'withPlaceholder', 'hasLeftIcon'].includes(String(prop)),
})<TypographyProps & { hasLeftIcon?: boolean; withPlaceholder?: boolean }>`
    ${{ ...fontsConfig.paragraph2 }};
    bottom: 0;
    height: 100%;
    left: ${({ hasLeftIcon }) => (hasLeftIcon ? '3.7rem' : '1rem')};
    position: absolute;
    transform: translateY(${({ withPlaceholder }) => (withPlaceholder ? '11px' : '12px')});
    transition: transform 0.2s ease-in-out, font-size 0.2s ease-in-out;
    width: 100%;
`;
