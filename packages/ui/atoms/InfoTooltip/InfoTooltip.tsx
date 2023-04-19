import { MouseEvent, ReactElement, useState } from 'react';
import { useLayer } from 'react-laag';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import ResizeObserver from 'resize-observer-polyfill';
import { TooltipIcon } from '../../icons/svg';
import mediaQueries from '../../theme/configs/mediaQueries';

const TooltipWrapper = styled(motion.div)`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.6rem;
    box-shadow: 0 4px 16px rgba(16, 21, 64, 0.2);
    color: ${({ theme }) => theme.colors.white};
    max-width: 70rem;
    padding: 1rem 1.5rem 2rem;

    ${mediaQueries.tablet} {
        padding: 2rem 3rem 4rem;
    }
`;

const Container = styled.div<{ isOpen: boolean }>`
    border-radius: 0.3rem;
    color: ${({ theme }) => theme.colors.greyDark};
    display: flex;
    font-size: 2rem;
    padding: 0.5rem;

    &:hover {
        background-color: ${({ theme }) => theme.colors.blueTransparent};
    }

    ${({ isOpen, theme }) =>
        isOpen &&
        `
    color: ${theme.colors.blueBrand};
    background-color: ${theme.colors.blueTransparent};
    `};
`;

const InfoTooltip = ({ children }: { children?: ReactElement }): ReactElement | null => {
    const [isOpen, setOpen] = useState(false);
    const { triggerProps, layerProps, renderLayer } = useLayer({
        isOpen,
        triggerOffset: 10,
        auto: true,
        onOutsideClick: () => setOpen(false),
        ResizeObserver,
    });

    const handleToggleTooltip = (e: MouseEvent<SVGSVGElement>): void => {
        e.stopPropagation();

        setOpen(!isOpen);
    };

    if (!children) return null;

    return (
        <Container isOpen={isOpen}>
            <TooltipIcon {...triggerProps} onClick={handleToggleTooltip} />
            {renderLayer(
                <AnimatePresence>
                    {isOpen && (
                        <TooltipWrapper
                            className="tooltip"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.1 }}
                            {...layerProps}
                        >
                            {children}
                        </TooltipWrapper>
                    )}
                </AnimatePresence>,
            )}
        </Container>
    );
};

export default InfoTooltip;
