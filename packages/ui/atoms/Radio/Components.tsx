import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fontsConfig } from '../Typography';

const spring = {
    type: 'spring',
    damping: 27,
    stiffness: 900,
    duration: 0.1,
    mass: 0.1,
};

export const RadioInputWrapper = styled(motion.div)`
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.greyDark};
    border-radius: 50%;

    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    display: flex;
    font-size: 1.2rem;
    height: 3rem;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 3rem;
    ${{ ...fontsConfig.paragraph2 }};
`;

export const RadioLabel = styled(motion.label).attrs(
    ({ isChecked, ...rest }: { isChecked: boolean }) => ({
        isChecked: !!isChecked,
        whileTap: {
            scale: 0.95,
        },
        transition: spring,
        ...rest,
    }),
)<{ isChecked: boolean }>`
    align-items: center;
    color: ${({ theme }) => theme.colors.greyDark};
    display: flex;
    gap: 1rem;

    &:hover {
        color: ${({ theme }) => theme.colors.blueBrand};
        cursor: pointer;

        ${RadioInputWrapper} {
            border-color: ${({ theme }) => theme.colors.blueBrand};
        }
    }

    &:checked {
      background-color: red;
    }

        ${({ isChecked, theme }) =>
            isChecked &&
            `
        color: ${theme.colors.blackBrand};

        ${RadioInputWrapper} {
            border-color: ${theme.colors.blueBrand};
        }
        `}
    }
`;

export const Fill = styled(motion.div)`
    background: ${({ theme }) => theme.colors.blueBrand};
    border-radius: 50%;
    margin-left: 1px;
`;

export const RadioInput = styled.input`
    left: 0;
    position: absolute;
    top: 0;
    visibility: hidden;
`;
