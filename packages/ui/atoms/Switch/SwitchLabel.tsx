import styled from 'styled-components';
import { motion } from 'framer-motion';

const spring = {
    type: 'spring',
    damping: 27,
    stiffness: 900,
    duration: 0.1,
    mass: 0.1,
};

const SwitchLabel = styled(motion.label).attrs(() => ({
    whileTap: {
        scale: 0.8,
    },
    transition: spring,
}))`
    --duration: 0.4s;

    align-items: center;
    border-radius: 0.4rem;
    cursor: pointer;
    display: flex;
    height: 3rem;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    transition: transform var(--duration) ease;
    width: 6.6rem;
`;

export default SwitchLabel;
