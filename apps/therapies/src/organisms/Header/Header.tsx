import { useAppSelector } from '@hooks';
import { selectIsLoggedIn } from '@store/user/selectors';
import routeMap from '@utils/RouteMap';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import colors from 'cryo-ui-kit/theme/configs/colors';
import mediaQueries, { mediaSizes } from 'cryo-ui-kit/theme/configs/mediaQueries';

import GridChild from '@templates/GridChild';
import GridParent from '@templates/GridParent';

import Navigation from '@organisms/Header/Navigation';

// import { CryoBalance } from '@molecules/CryoBalance';
// import LogoColorBusiness from '@molecules/Icons/logo/business/LogoColorBusiness';
// import LogoColorDef from '@molecules/Icons/logo/def/LogoColorDef';
// import LogoColorPartner from '@molecules/Icons/logo/partner/LogoColorPartner';
// import LogoColorTherapy from '@molecules/Icons/logo/therapies/LogoColorTherapy';
// import { GuestLanguageSelect } from '@molecules/LanguageDropdown';
// import AppMenu from '@molecules/Menu/Menu';

import Box from 'cryo-ui-kit/atoms/Box';
// import Link from 'cryo-ui-kit/atoms/Link';

const StyledHeader = styled.div`
    align-items: center;
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.grey};
    display: flex;
    height: var(--header-height);
    justify-content: space-between;
    padding: 5px 15px;
    position: relative;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndices.header};

    ${mediaQueries.tablet} {
        padding: 10px 45px;
    }
`;

const StyledLink = styled.a`
    display: flex;
    height: 100%;

    svg {
        width: auto;
    }
`;

const Header = () => {
    const { pathname } = useRouter();
    const isWiderThenLaptopS = useMediaQuery({ query: mediaSizes.laptopS });
    const isUserLoggedIn = useAppSelector(selectIsLoggedIn);

    let ActiveLogo;

    // switch (true) {
    //     case pathname.indexOf(routeMap.therapies) !== -1:
    //         ActiveLogo = <LogoColorTherapy size={{ _: 'medium3', laptopS: 'large3' }} />;
    //         break;
    //     case pathname.indexOf(routeMap.business) !== -1:
    //         ActiveLogo = <LogoColorBusiness size={{ _: 'medium3', laptopS: 'large3' }} />;
    //         break;
    //     case pathname.indexOf(routeMap.partner) !== -1:
    //         ActiveLogo = <LogoColorPartner size={{ _: 'medium3', laptopS: 'large3' }} />;
    //         break;
    //     case isUserLoggedIn:
    //         ActiveLogo = <LogoColorTherapy size={{ _: 'medium3', laptopS: 'large3' }} />;
    //         break;
    //     default:
    //         ActiveLogo = <LogoColorDef size={{ _: 'medium3', laptopS: 'large3' }} />;
    //         break;
    // }

    return (
        <header>
            <StyledHeader id="header">
                <GridParent as="div" noGutter>
                    <GridChild gridColumn={{ _: 'span 4', tablet: 'span 6', laptopS: 'span 3' }}>
                        <StyledLink href={routeMap.home}>
                            <Box height="100%" display="flex" alignItems="center">
                                {ActiveLogo}as
                            </Box>
                        </StyledLink>
                    </GridChild>
                    {isWiderThenLaptopS && isUserLoggedIn && (
                        <GridChild display={{ _: 'none', laptopS: 'block' }} gridColumn="span 6">
                            <Navigation />
                        </GridChild>
                    )}
                    <GridChild
                        gridColumn={{ _: 'span 8', tablet: 'span 6', laptopS: '10 / span 3' }}
                    >
                        <Box
                            display="flex"
                            justifyContent="flex-end"
                            alignItems="center"
                            gridColumnGap={10}
                        >
                            {!isUserLoggedIn && (
                                <Box width="95px">
                                    {/* <GuestLanguageSelect id="header-dd" size="small" /> */}
                                </Box>
                            )}
                            {/* {isUserLoggedIn && <CryoBalance />} */}
                            {/* <AppMenu /> */}
                        </Box>
                    </GridChild>
                </GridParent>
            </StyledHeader>
            <Box pt={15} display={{ _: 'block', laptopS: 'none' }} id="headersUnknownBox">
                <Navigation />
            </Box>
        </header>
    );
};

export default Header;
