import styled from 'styled-components';
import { ContentInterface } from '../types/drawerTypes';

const Wrapper = styled.div.attrs((props: any) => ({
    side: props.side,
}))`
    overflow: auto;
    user-select: none;
    ${({ side }) =>
        side === 'top' || side === 'bottom'
            ? 'width: 100vw; height: 50vh'
            : 'width: 50vw; height: 100vh'};
`;

const ContentContainer = ({ children, side }: ContentInterface) => (
    <Wrapper side={side} data-testid="contentContainer">
        {children}
    </Wrapper>
);

export default ContentContainer;
