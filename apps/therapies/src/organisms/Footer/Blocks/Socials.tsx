import { Stack } from '@mui/material';
import styled from 'styled-components';

import colors from 'cryo-ui-kit/theme/configs/colors';

import GridChild from '@templates/GridChild';

import Instagram from '@molecules/Icons/Instagram';
import LinkedIn from '@molecules/Icons/LinkedIn';
import SocialFacebook from '@molecules/Icons/SocialFacebook';
import YouTube from '@molecules/Icons/YouTube';

const StyledSvgWrapper = styled.div`
    color: #858aa2;

    &:hover {
        color: ${colors.white};
        cursor: pointer;
    }
`;

const Socials = () => (
    <GridChild
        gridColumn={{
            _: '2/ span 10',
            tablet: 'span 2',
            laptop: 'span 5',
        }}
    >
        <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            height="100%"
            spacing="12px"
        >
            <StyledSvgWrapper>
                <SocialFacebook size="large3" />
            </StyledSvgWrapper>
            <StyledSvgWrapper>
                <Instagram size="large3" />
            </StyledSvgWrapper>
            <StyledSvgWrapper>
                <YouTube size="large3" />
            </StyledSvgWrapper>
            <StyledSvgWrapper>
                <LinkedIn size="large3" />
            </StyledSvgWrapper>
        </Stack>
    </GridChild>
);

export default Socials;
