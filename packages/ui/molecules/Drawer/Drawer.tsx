import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimationControls, useDragControls } from 'framer-motion';
import shortid from 'shortid';
import { DrawerInterface } from './types/drawerTypes';
import ContentContainer from './components/content';
import PullerContainer from './components/puller';
import { dragConstraints, dragElastic, initialPosition } from './framer/drawerSettings';
import { useResize } from '../../hooks/useResize';
import { handleAnimation, handleDragEnd } from './triggers/triggers';

const DrawerContainer = styled.div`
    display: flex;
    position: fixed;
    touch-action: none;
    user-select: none;

    &.top {
        flex-direction: column-reverse;
        top: -50vh;
    }

    &.right {
        flex-direction: row;
        right: -50vw;
    }

    &.bottom {
        bottom: -50vh;
        flex-direction: column;
    }

    &.left {
        flex-direction: row-reverse;
        left: -50vw;
    }
`;

const Drawer = ({
    side = 'bottom',
    pullerHeight = 30,
    pullerColor = 'rgba(255, 0, 0, 0.8)',
    lineLength = 60,
    pullerRadius = 20,
    lineColor = 'rgba(242, 255, 0, 1)',
    isOpen = false,
    children,
}: DrawerInterface) => {
    const dragControls = useDragControls();
    const controls = useAnimationControls();

    const [open, setOpen] = useState<boolean>(isOpen);

    // Motion drawer's component rerender on resize in case no external listener is used
    useResize();

    useEffect(() => {
        if (isOpen !== open) handleAnimation({ side, open, setOpen, controls });
    }, [isOpen]);

    return (
        <DrawerContainer
            as={motion.div}
            initial={open ? initialPosition({ side }) : false}
            animate={controls}
            drag={side === 'top' || side === 'bottom' ? 'y' : 'x'}
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={dragConstraints({ side })}
            dragElastic={dragElastic(side)}
            dragMomentum={false}
            onDragEnd={(_, info) => handleDragEnd({ info, pullerHeight, side, controls, setOpen })}
            className={side}
            // Neither the most elegant nor optimised solution, but on resize motion components lose drag constraints and ignore prop overrides. Required a full component rerender.
            // I didn't find other workarounds.
            // https://github.com/framer/motion/issues/1659
            key={shortid.generate()}
            data-testid="drawerContainer"
        >
            <PullerContainer
                pullerHeight={pullerHeight}
                pullerColor={pullerColor}
                pullerRadius={pullerRadius}
                lineLength={lineLength}
                lineColor={lineColor}
                side={side}
                dragControls={dragControls}
            />
            <ContentContainer side={side}>{children}</ContentContainer>
        </DrawerContainer>
    );
};

export default Drawer;
