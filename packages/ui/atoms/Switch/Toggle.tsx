import styled from 'styled-components';
import { motion } from 'framer-motion';

const Toggle = styled(motion.div)`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.2rem;
    content: '';
    height: 2rem;
    position: absolute;
    width: 2rem;
    z-index: 1;
`;

export default Toggle;
