import { ReactElement } from 'react';
import { useHover, useLayer, Arrow } from 'react-laag';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import colors from '../../theme/configs/colors';

const TooltipWrapper = styled(motion.div)`
    background-color: ${({ theme }) => theme.colors.greyDark};
    border-radius: 0.3rem;
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 1.5rem;
`;

const Tooltip = ({ children, text }: { children: ReactElement; text: string }): ReactElement => {
    const [isOver, hoverProps] = useHover({
        delayEnter: 300,
        delayLeave: 0,
    });
    const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
        isOpen: isOver,
        triggerOffset: 10,
    });

    return (
        <>
            <div {...triggerProps} {...hoverProps}>
                {children}
            </div>
            {renderLayer(
                <AnimatePresence>
                    {isOver && (
                        <TooltipWrapper
                            className="tooltip"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.1 }}
                            {...layerProps}
                        >
                            {text}
                            <Arrow {...arrowProps} backgroundColor={colors.greyDark} size={6} />
                        </TooltipWrapper>
                    )}
                </AnimatePresence>,
            )}
        </>
    );
};

export default Tooltip;
