import { variant } from 'styled-system';
import styled from 'styled-components';
import { ReactElement, cloneElement } from 'react';
import { GuestAvatarIcon } from '../../icons/svgColored';

export type UserAvatarProps = {
    variant?: 'circle' | 'square';
    size?: 'sm' | 'md' | 'lg';
    photo?: ReactElement;
    alt?: string;
};

const sizeMap = {
    sm: '2.8rem',
    md: '6rem',
    lg: '10.8rem',
};

const sizeVariant = variant({
    prop: 'size',
    variants: {
        sm: {
            width: sizeMap.sm,
            height: sizeMap.sm,
        },
        md: {
            width: sizeMap.md,
            height: sizeMap.md,
        },
        lg: {
            width: sizeMap.lg,
            height: sizeMap.lg,
        },
    },
});

const avatarVariant = variant({
    prop: 'variant',
    variants: {
        circle: {
            borderRadius: '50%',
        },
        square: {
            borderRadius: '4px',
        },
    },
});

const StyledContainer = styled.div<UserAvatarProps>`
    ${sizeVariant};
    ${avatarVariant};

    overflow: hidden;
    position: relative;
`;

const AvatarContainer = styled.div`
    align-items: center;
    color: ${({ theme }) => theme.colors.blackBrand};
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
`;

const UserAvatar = ({ size = 'sm', photo, alt, ...rest }: UserAvatarProps): ReactElement => {
    const imgSize = sizeMap[size];

    if (photo) {
        return (
            <StyledContainer size={size} {...rest}>
                {cloneElement(photo, { width: imgSize, height: imgSize, alt })}
            </StyledContainer>
        );
    }

    return (
        <StyledContainer size={size} {...rest}>
            <AvatarContainer>
                <GuestAvatarIcon width="100%" height="100%" />
            </AvatarContainer>
        </StyledContainer>
    );
};

export default UserAvatar;
