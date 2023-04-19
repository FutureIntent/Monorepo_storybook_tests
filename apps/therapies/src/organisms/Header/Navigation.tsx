// import { Stack } from '@mui/material';
import { getToken } from '@services/axios/axios';
import routeMap from '@utils/RouteMap';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import styled from 'styled-components';

import colors from 'cryo-ui-kit/theme/configs/colors';

// import Link from '@atoms/Link';
import Typography from 'cryo-ui-kit/atoms/Typography';

const NavLink = styled.a<{ isActive?: boolean }>`
    position: relative;

    ${({ isActive }) =>
        isActive &&
        `
        &:after {
            background-color: ${colors.blueBrand};
            bottom: -5px;
            content: '';
            height: 3px;
            left: 0;
            position: absolute;
            width: 100%;
    }
    `};
`;

const Navigation = (): ReactElement | null => {
    const { pathname } = useRouter();
    const isSignedIn = getToken();

    if (!isSignedIn) return null;

    return (
        <div direction="row" spacing={7} justifyContent="center" alignItems="center" height="100%">
            <NavLink href={routeMap.home} isActive={pathname === routeMap.home}>
                <Typography variant="caption" color={colors.blackBrand} transformText="uppercase">
                    Home
                </Typography>
            </NavLink>
            <NavLink
                href={routeMap.therapies}
                isActive={pathname.indexOf(routeMap.therapies) !== -1}
            >
                <Typography variant="caption" color={colors.blackBrand} transformText="uppercase">
                    THERAPIES
                </Typography>
            </NavLink>
            <NavLink href={routeMap.devices} isActive={pathname.indexOf(routeMap.devices) !== -1}>
                <Typography variant="caption" color={colors.blackBrand} transformText="uppercase">
                    DEVICES
                </Typography>
            </NavLink>
        </div>
    );
};

export default Navigation;
