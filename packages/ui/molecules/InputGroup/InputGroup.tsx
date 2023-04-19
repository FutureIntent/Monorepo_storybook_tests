import styled from 'styled-components';
import { forwardRef, Ref } from 'react';
import { GroupContainerInterface, InputGroupInterface } from './types/InputGroupTypes';

const InputGroupContainer: any = styled.div.attrs((props: GroupContainerInterface) => ({
    repeat: props.repeat,
    split: props.split,
}))`
    column-gap: 1px;
    display: grid;
    grid-template-columns: ${({ repeat, split }) => split || `repeat(${repeat}, 1fr)`};
    width: 100%;
`;

const InputGroup = forwardRef(
    ({ children, childrenLength, ...props }: InputGroupInterface, ref: Ref<HTMLDivElement>) => (
        <InputGroupContainer
            ref={ref}
            repeat={children.length}
            split={
                childrenLength && childrenLength.length === children.length
                    ? childrenLength.join(' ')
                    : null
            }
            {...props}
        >
            {children.map((child: JSX.Element) => child)}
        </InputGroupContainer>
    ),
);

export default InputGroup;
