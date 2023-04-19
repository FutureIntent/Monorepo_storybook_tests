import styled from 'styled-components';
import { motion } from 'framer-motion';

const DisabledOverlay = styled(motion.div).attrs(() => ({
    initial: { x: '-100%' },
    animate: { x: '0%' },
    exit: { x: '-100%' },
}))`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.greyDark};
    cursor: not-allowed;
    display: flex;
    font-size: 2rem;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

export default DisabledOverlay;
