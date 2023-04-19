import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ResponsiveValue } from 'styled-system';

export const CollapsableContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 0.3rem;
    position: relative;
    width: 100%;
`;

export const AccordionContainer = styled(motion.div)<{
    isOpen: boolean;
    rowGap?: ResponsiveValue<number>;
}>`
    display: flex;
    flex-direction: column;
    grid-row-gap: ${({ rowGap }) => rowGap}rem;
    width: 100%;

    ${CollapsableContainer} {
        border-radius: 0.3rem;
        width: 100%;

        ${({ rowGap, theme }) =>
            !rowGap &&
            `
            border-bottom-color: transparent;
            
            &:last-of-type {
            border-bottom-color: ${theme.colors.grey};
            border-radius: 0 0 0.3rem 0.3rem;
        }

        &:not(:first-of-type):not(:last-of-type) {
            border-radius: 0;
        }

        &:first-of-type {
            border-radius: 0.3rem 0.3rem 0 0;
        }
        `}
    }
`;

export const CollapseButton = styled.button<{ isOpen: boolean }>`
    background-color: ${({ theme }) => theme.colors.greyLt};

    border: 0;
    cursor: pointer;
    font-size: 1.8rem;
    outline: none;
    padding: 1rem 1.5rem;
    width: 100%;

    ${({ isOpen }) =>
        isOpen &&
        `
    border-radius: 0.3rem 0.3rem 0 0;
  `}
`;

export const CollapseIconWrapper = styled(motion.div)`
    align-items: center;
    display: flex;
    transform-origin: center center;
`;

export const CollapseContent = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export const CollapsePanel = styled(motion.div)`
    background-color: ${({ theme }) => theme.colors.greyLt};
    border-radius: 0 0 0.3rem 0.3rem;
    border-top-color: transparent;
    padding: 1rem 1.5rem;
`;
