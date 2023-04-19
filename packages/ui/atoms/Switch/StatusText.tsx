import styled from 'styled-components';
import { fontsConfig } from '../Typography';

const StatusText = styled.span`
    ${{ ...fontsConfig.caption }};
    color: ${({ theme }) => theme.colors.white};
    opacity: 1;
    pointer-events: none;
    position: absolute;
    transition: opacity var(--duration) ease;
    z-index: 1;
`;

export default StatusText;
