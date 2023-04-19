import { useState } from 'react';
import { CollapseButton, CollapseContent, CollapseIconWrapper } from './Components';
import Box from '../Box';
import colors from '../../theme/configs/colors';
import { DownIcon } from '../../icons/svg';
import Typography from '../Typography';
import { AccordionHeaderProps } from './types';
import Switch from '../Switch/Switch';
import InfoTooltip from '../InfoTooltip';

const transitionConfig = {
    type: 'spring',
    damping: 27,
    stiffness: 900,
    duration: 0.1,
    mass: 0.8,
};

const Header = ({
    label,
    isOpen,
    handleCollapse,
    infoTooltip,
    isSwitchDisabled,
    withSwitch,
    /* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    setDisabled = () => {},
}: AccordionHeaderProps) => {
    const [isHover, setIsHover] = useState(false);

    const handleHover = () => setIsHover(true);
    const handleBlur = () => setIsHover(false);

    return (
        <CollapseButton
            isOpen={isOpen}
            onClick={handleCollapse}
            onMouseOver={handleHover}
            onMouseLeave={handleBlur}
        >
            <CollapseContent>
                <Box display="flex" gridGap={10}>
                    <CollapseIconWrapper
                        transition={transitionConfig}
                        animate={{
                            color: isOpen ? colors.blueBrand : colors.greyDark,
                            scale: isHover ? 1.1 : 1,
                            rotate: isOpen ? 0 : -90,
                        }}
                    >
                        <DownIcon />
                    </CollapseIconWrapper>
                    <Typography variant="accent" color="blackBrand">
                        {label}
                    </Typography>
                </Box>
                {(infoTooltip || withSwitch) && (
                    <Box display="flex" gridGap={10}>
                        {infoTooltip && <InfoTooltip>{infoTooltip}</InfoTooltip>}
                        {withSwitch && (
                            <Switch
                                name={`${label}-switch`}
                                disabled={isSwitchDisabled}
                                onChange={setDisabled}
                            />
                        )}
                    </Box>
                )}
            </CollapseContent>
        </CollapseButton>
    );
};

export default Header;
