import styled from 'styled-components';

import colors from 'cryo-ui-kit/theme/configs/colors';

import GridChild from '@templates/GridChild';

// import AppleStore from '@molecules/Icons/home/AppleStore';
// import GoogleStore from '@molecules/Icons/home/GoogleStore';

import Box from 'cryo-ui-kit/atoms/Box';
import Typography from 'cryo-ui-kit/atoms/Typography';

const StoreButton = styled.button`
    background-color: #091036;
    border: 1px solid ${colors.white};

    &:not(:last-of-type) {
        margin-right: 1.6rem;
    }
`;

const AppStores = () => (
    <GridChild gridColumn="2/ span 5">
        <Typography mt={25} mb={4} variant="caption" color={colors.greyDark}>
            Also available in
        </Typography>
        <Box display="flex">
            <StoreButton>{/* <GoogleStore /> */}</StoreButton>
            <StoreButton>{/* <AppleStore /> */}</StoreButton>
        </Box>
    </GridChild>
);

export default AppStores;
