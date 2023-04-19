import { variant as styledVariant } from 'styled-system';
import colors from '../../theme/configs/colors';
import { hexToRgb } from '../../utils/helpers';
import shadows from '../../theme/configs/shadows';

export type ButtonVariants =
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'borderless'
    | 'borderlessNeutral'
    | 'borderlessNegative';

const buttonVariants = styledVariant({
    prop: 'variant',
    variants: {
        primary: {
            'color': colors.white,
            'backgroundColor': colors.blueBrand,
            'boxShadow': shadows.blue,
            '&:hover': {
                backgroundColor: colors.blueDim,
            },
            '&:disabled': {
                backgroundColor: colors.greyDark,
            },
        },
        secondary: {
            'color': colors.blueBrand,
            'backgroundColor': `rgba(${hexToRgb(colors.blueBrand)}, 0.1)`,
            '&:hover': {
                color: colors.white,
                backgroundColor: colors.blueBrand,
            },
            '&:disabled': {
                color: colors.greyDark,
                backgroundColor: colors.grey,
            },
        },
        outline: {
            'color': colors.blueBrand,
            'backgroundColor': 'transparent',
            'borderColor': colors.blueBrand,
            '&:hover': {
                color: colors.blueDim,
                borderColor: colors.blueDim,
            },
            '&:disabled': {
                color: colors.greyDark,
                backgroundColor: colors.greyDark,
            },
        },
        borderless: {
            'color': colors.blueBrand,
            'backgroundColor': 'transparent',
            '&:hover': {
                color: colors.blueDim,
                backgroundColor: `rgba(${hexToRgb(colors.blueBrand)}, 0.1)`,
            },
            '&:disabled': {
                color: colors.greyDark,
                backgroundColor: colors.greyCyan,
            },
        },
        borderlessNeutral: {
            'color': colors.greyDark,
            'backgroundColor': 'transparent',
            '&:hover': {
                color: colors.blueBrand,
                backgroundColor: `rgba(${hexToRgb(colors.blueBrand)}, 0.1)`,
            },
            '&:disabled': {
                color: colors.greyDark,
                backgroundColor: colors.greyCyan,
            },
        },
        borderlessNegative: {
            'color': colors.greyDark,
            'backgroundColor': 'transparent',
            '&:hover': {
                color: colors.redWarning,
                backgroundColor: `rgba(${hexToRgb(colors.redWarning)}, 0.1)`,
            },
            '&:disabled': {
                color: colors.greyDark,
                backgroundColor: colors.greyCyan,
            },
        },
    },
});

export default buttonVariants;
