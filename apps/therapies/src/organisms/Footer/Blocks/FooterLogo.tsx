import routeMap from '@utils/RouteMap';
import Link from 'next/link';

// import { CenterAlign } from '@atoms/CenterAlign';
//
// import CryoLogoTherapiesWhite from '@molecules/Icons/home/CryoLogoTherapiesWhite';

import GridChild from '@templates/GridChild';

const FooterLogo = () => (
    <GridChild gridColumn={{ _: 'span 6', tablet: 'span 7', laptopS: '2/ span 2' }} gridRow={1}>
        <Link href={routeMap.home}>
            {/* <CenterAlign maxWidth="240px"> */}
            {/*    <CryoLogoTherapiesWhite width="240px" /> */}
            {/* </CenterAlign> */}
            test
        </Link>
    </GridChild>
);

export default FooterLogo;
