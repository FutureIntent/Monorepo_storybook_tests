import styled from 'styled-components';
import colors from '../../../theme/configs/colors';

import Typography, { TypographyProps, fontsConfig } from '../../Typography/Typography';

export const StyledLabel = styled.label`
    color: ${colors.greyDark};
    cursor: text;
    padding-top: 12px;
    position: absolute;
    top: 0;
    transition: padding-top 0.2s ease-in-out;
    white-space: nowrap;
    width: 100%;
`;

export const StyledLabelText: any = styled(Typography)<TypographyProps>`
    ${{ ...fontsConfig.paragraph2 }};
    color: inherit;
    transition: font-size 0.2s ease-in-out, color 0.2s ease-in-out;
    width: 100%;
`;
