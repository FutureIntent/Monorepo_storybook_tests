import styled from 'styled-components';
import { PullerInterface, PullerLineInterface, PullerWrapperInterface } from '../types/drawerTypes';

const Wrapper = styled.div<PullerWrapperInterface>`
    align-items: center;
    background-color: ${({ pullerColor }) => pullerColor};
    display: flex;
    justify-content: center;

    &.top {
        border-radius: ${({ pullerRadius }) => `0 0 ${pullerRadius}px ${pullerRadius}px`};
        height: ${({ pullerHeight }) => pullerHeight}px;
    }

    &.right {
        border-radius: ${({ pullerRadius }) => `${pullerRadius}px 0 0 ${pullerRadius}px`};
        width: ${({ pullerHeight }) => pullerHeight}px;
    }

    &.bottom {
        border-radius: ${({ pullerRadius }) => `${pullerRadius}px ${pullerRadius}px 0 0`};
        height: ${({ pullerHeight }) => pullerHeight}px;
    }

    &.left {
        border-radius: ${({ pullerRadius }) => `0 ${pullerRadius}px ${pullerRadius}px 0`};
        width: ${({ pullerHeight }) => pullerHeight}px;
    }
`;

const Line = styled.hr<PullerLineInterface>`
    border-color: ${({ lineColor }) => lineColor};

    ${({ isAxisX, lineLength }) =>
        isAxisX
            ? `
    width: 1%;
    height: ${lineLength}px;
    `
            : `
    width: ${lineLength}px;
    height: 1%;
    `}
`;

const PullerContainer = ({
    pullerHeight,
    pullerColor,
    pullerRadius,
    lineLength,
    lineColor,
    side,
    dragControls,
}: PullerInterface) => {
    const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
        dragControls.start(event, { snapToCursor: false });
    };

    return (
        <Wrapper
            data-testid="pullerContainer"
            pullerHeight={pullerHeight}
            pullerColor={pullerColor}
            pullerRadius={pullerRadius}
            className={side}
            onPointerDown={startDrag}
        >
            <Line
                isAxisX={!!(side === 'right' || side === 'left')}
                lineLength={lineLength}
                lineColor={lineColor}
                data-testid="lineContainer"
            />
        </Wrapper>
    );
};

export default PullerContainer;
