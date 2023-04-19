import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

import colors from 'cryo-ui-kit/theme/configs/colors';

import GridChild from '@templates/GridChild';

import ArrowButton from '@molecules/Icons/ArrowButton';
import { GuestLanguageSelect } from '@molecules/LanguageDropdown';

import Box from '@atoms/Box';
import { CenterAlign } from '@atoms/CenterAlign';
import Typography from '@atoms/Typography';

const StyledBackToTopArrow = styled(ArrowButton)`
    transform: rotate(-90deg);
`;

const LanguageSelect = () => {
    const { t } = useTranslation();
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <GridChild gridColumn={{ _: 'span 6', tablet: 'span 5', laptop: 'span 2' }}>
            <CenterAlign axis="y" justifyContent="flex-end">
                <Box maxHeight={40} maxWidth={100} width="100%">
                    <GuestLanguageSelect id="footer-dd" isDark />
                </Box>
                <Box display="flex" cursor="pointer" onClick={handleBackToTop}>
                    <Typography
                        display={{ _: 'none', tablet: 'inline' }}
                        variant="accent"
                        color={colors.white}
                        ml="1.6rem"
                    >
                        {t('Back to top')}
                    </Typography>
                    <StyledBackToTopArrow color={colors.white} />
                </Box>
            </CenterAlign>
        </GridChild>
    );
};

export default LanguageSelect;
