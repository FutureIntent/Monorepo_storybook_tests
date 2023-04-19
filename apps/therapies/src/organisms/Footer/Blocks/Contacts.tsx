import colors from 'cryo-ui-kit/theme/configs/colors';

import GridChild from '@templates/GridChild';

// import Address from '@molecules/Icons/Address';
// import Mail from '@molecules/Icons/Mail';
// import Phone from '@molecules/Icons/Phone';

import Typography from 'cryo-ui-kit/atoms/Typography';

const Contacts = () => (
    <>
        <GridChild gridColumn={{ _: 'span 12', laptop: 'span 2' }}>
            {/* <CenterAlign axis="y" mb="1.25rem"> */}
            {/* <Address size="large" color={colors.blueBrand} /> */}
            <a
                href="https://maps.google.com/?q=Lybecksgatan 37, S-252 69. Råå, Sweden"
                target="_blank"
                rel="noreferrer"
            >
                <Typography color={colors.white} variant="paragraph2" ml="1.25rem">
                    Lybecksgatan 37, S-252 69. Råå, Sweden
                </Typography>
            </a>
            {/* </CenterAlign> */}
        </GridChild>
        <GridChild gridColumn={{ _: 'span 12', laptop: 'span 2' }}>
            {/* <CenterAlign axis="y" mb="1.25rem"> */}
            {/* <Mail size="large" color={colors.blueBrand} /> */}
            <a href="mailto:info@cryocenter.se">
                <Typography color={colors.white} variant="paragraph2" ml="1.25rem">
                    info@cryocenter.se
                </Typography>
            </a>
            {/* </CenterAlign> */}
        </GridChild>
        <GridChild gridColumn={{ _: 'span 12', laptop: 'span 2' }}>
            {/* <CenterAlign axis="y"> */}
            {/* <Phone size="large" color={colors.blueBrand} /> */}
            <a href="tel:+46(0)703-163730">
                <Typography color={colors.white} variant="paragraph2" ml="1.25rem">
                    +46(0)703-163730
                </Typography>
            </a>
            {/* </CenterAlign> */}
        </GridChild>
    </>
);

export default Contacts;
