import colors from 'cryo-ui-kit/theme/configs/colors';

import { CenterAlign } from '@atoms/CenterAlign';
import Typography from '@atoms/Typography';

const Privacy = () => (
    <CenterAlign width="100%" height="3.75rem" backgroundColor="#091036" py="1.2rem">
        <Typography variant="paragraph2" color={colors.blueBrand} mr="2.5rem">
            Privacy Policy
        </Typography>
        <Typography variant="paragraph2" color={colors.blueBrand}>
            Terms of Use
        </Typography>
    </CenterAlign>
);

export default Privacy;
