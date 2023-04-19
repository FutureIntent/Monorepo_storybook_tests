import styled from 'styled-components';

import mediaQueries from 'cryo-ui-kit/theme/configs/mediaQueries';

import GridParent from '@templates/GridParent';

import AppStores from '@organisms/Footer/Blocks/AppStores';
import Contacts from '@organisms/Footer/Blocks/Contacts';
import FooterLogo from '@organisms/Footer/Blocks/FooterLogo';
import colors from 'cryo-ui-kit/theme/configs/colors';
import Select from 'cryo-ui-kit/atoms/Select';

const StyledFooter = styled.footer`
    //height: var(--footer-height);
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: ${({ theme }) => theme.zIndices.footer};
`;

const StyledInfoBlock = styled.div`
    background-color: ${colors.blackBrand};
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding: 2.25rem 1.6rem;
    width: 100%;

    ${mediaQueries.tablet} {
        padding: 2.8125rem 2.8125rem 1.25rem;
    }
`;

const Footer = () => (
    <StyledFooter id="footer">
        <StyledInfoBlock>
            <GridParent noGutter>
                <FooterLogo />
                <Contacts />
                <Select label="New Label" />
                {/* <LanguageSelect /> */}
                {/* <AppStores /> */}
                {/* <Socials /> */}
            </GridParent>
        </StyledInfoBlock>
        {/* <Privacy /> */}
    </StyledFooter>
);

export default Footer;
