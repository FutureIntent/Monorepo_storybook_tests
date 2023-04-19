import { TriggerInterface } from '../types/inputTypes';
import colors from '../../../../theme/configs/colors';

export const handleFocus = ({
    wrapper,
    label,
    hasError,
    hideIcons,
    setHiddenIcons,
}: TriggerInterface) => {
    if (hideIcons && setHiddenIcons) setHiddenIcons(false);
    if (hasError) return;
    if (wrapper) wrapper.style.borderColor = colors.blueBrand;
    if (label) label.style.color = colors.blueBrand;
};

export const handleBlur = ({
    wrapper,
    label,
    hasError,
    hideIcons,
    setHiddenIcons,
}: TriggerInterface) => {
    if (hideIcons && setHiddenIcons) setHiddenIcons(true);
    if (hasError) return;
    if (wrapper) wrapper.style.borderColor = colors.grey;
    if (label) label.style.color = colors.greyDark;
};

export const handleError = ({ wrapper, label, input, hasError }: TriggerInterface) => {
    // warning state if has error regardless of focus
    if (wrapper && label && hasError) {
        wrapper.style.borderColor = colors.redWarning;
        label.style.color = colors.redWarning;
        return;
    }

    // focused state if has focus and no error (for real time validation)
    if (wrapper && label && document.activeElement === input) {
        wrapper.style.borderColor = colors.blueBrand;
        label.style.color = colors.blueBrand;
        return;
    }

    // regular state if no error and no focus
    if (wrapper && label) {
        wrapper.style.borderColor = colors.grey;
        label.style.color = colors.greyDark;
    }
};

export const handleResize = ({ setWindowWidth }: TriggerInterface) => {
    if (setWindowWidth) setWindowWidth(window.innerWidth);
};
