import styled from 'styled-components';
import { forwardRef, Ref } from 'react';
import shortid from 'shortid';
import { IconInterface, IconWrapperInterface } from '../types/inputTypes';
import colors from '../../../../theme/configs/colors';
import { mediaQueriesReversed } from '../../../../theme/configs/mediaQueries';

const IconContainer = styled.div`
    align-items: center;
    border: none;
    display: flex;
    justify-content: center;
`;

export const IconWrapper: any = styled.div.attrs(
    ({ hideIcons, hasError }: IconWrapperInterface) => ({
        hiddenIcons: hideIcons ? 'hidden' : 'visible',
        iconColor: hasError ? colors.redWarning : colors.greyDark,
    }),
)`
    align-items: center;
    color: ${(props: any) => props.iconColor};
    display: flex;
    justify-content: center;
    visibility: ${(props: any) => props.hiddenIcons};
    cursor: pointer;
    height: 45px;
    width: 45px;
    transition: color 0.2s ease-in-out;

    ${mediaQueriesReversed.tablet} {
        height: 40px;
        width: 40px;
    }

    &:hover {
        color: ${colors.blueBrand};
    }
`;

const IconIterator = forwardRef(
    ({ icons, hasError, hideIcons, width }: IconWrapperInterface, ref: Ref<HTMLDivElement>) => (
        <IconContainer>
            {icons.map((item: IconInterface) => (
                <IconWrapper
                    key={shortid.generate()}
                    onMouseDown={() => item.handleAction(item.name)}
                    hideIcons={hideIcons}
                    hasError={!!hasError}
                    ref={ref}
                    data-testid="svgIcon"
                >
                    <item.icon
                        width={width <= 768 ? '25px' : '30px'}
                        height={width <= 768 ? '25px' : '30px'}
                    />
                </IconWrapper>
            ))}
        </IconContainer>
    ),
);

export default IconIterator;
