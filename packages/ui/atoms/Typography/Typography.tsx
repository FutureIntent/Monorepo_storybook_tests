import { props } from '@styled-system/should-forward-prop';
import { ComponentClass, ReactNode, ReactElement } from 'react';
import styled from 'styled-components';
import {
    variant as styledVariant,
    space,
    color as textColor,
    typography,
    textAlign,
    SpaceProps,
    TextAlignProps,
    TypographyProps as TypographyBaseProps,
    ResponsiveValue,
    VerticalAlignProps,
    verticalAlign,
} from 'styled-system';
import type { UseActiveViewportSizeReturn } from '../../hooks/useActiveViewportSize';
import { Device, deviceList } from '../../theme/configs/breakpoints';
import { useActiveViewportSize } from '../../hooks';

export const FONT_FAMILY = 'Manrope, san-serif';
export const FONT_HEAVY = 900;
export const FONT_BOLD = 700;
export const FONT_REGULAR = 400;

export type Variant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'paragraph'
    | 'paragraph2'
    | 'caption'
    | 'accent'
    | 'homeBanner'
    | 'link';

type TypographyVariant = Variant | ({ _: Variant } & { [key in Device]?: Variant });

type TransformText = 'capitalize' | 'lowercase' | 'uppercase' | 'none';
type WhiteSpaceOptions = 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-line' | 'pre-wrap';

export interface TypographyProps
    extends SpaceProps,
        TextAlignProps,
        TypographyBaseProps,
        VerticalAlignProps {
    variant?: TypographyVariant;
    color?: ResponsiveValue<string>;
    hoverColor?: ResponsiveValue<string>;
    hideOverflow?: boolean;
    as?: ComponentClass | string | null;
    children: ReactNode;
    transformText?: TransformText;
    id?: string | null;
    whiteSpace?: ResponsiveValue<WhiteSpaceOptions>;
}

interface StyledTypographyProps extends TypographyProps {
    variant: TypographyVariant;
}

export const variantMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    paragraph: 'p',
    paragraph2: 'p',
    caption: 'p',
    accent: 'span',
    homeBanner: 'p',
    link: 'p',
};

export const fontsConfig = {
    h1: {
        'fontFamily': FONT_FAMILY,
        'fontSize': '3.6rem',
        'fontWeight': FONT_HEAVY,
        '@media all and (min-width: 768px)': {
            fontSize: '5.6rem',
        },
    },
    h2: {
        'fontFamily': FONT_FAMILY,
        'fontSize': '2.7rem',
        'fontWeight': FONT_HEAVY,
        '@media all and (min-width: 768px)': {
            fontSize: '3.6rem',
        },
    },
    h3: {
        'fontFamily': FONT_FAMILY,
        'fontSize': '2.1rem',
        'fontWeight': FONT_HEAVY,
        '@media all and (min-width: 768px)': {
            fontSize: '2.8rem',
        },
    },
    paragraph: {
        'fontFamily': FONT_FAMILY,
        'fontSize': '1.5rem',
        'fontWeight': FONT_REGULAR,
        '@media all and (min-width: 768px)': {
            fontSize: '1.8rem',
        },
    },
    paragraph2: {
        'fontFamily': FONT_FAMILY,
        'fontSize': '1.2rem',
        'fontWeight': FONT_REGULAR,
        '@media all and (min-width: 768px)': {
            fontSize: '1.6rem',
        },
    },
    caption: {
        'fontFamily': FONT_FAMILY,
        'fontSize': '1rem',
        'fontWeight': FONT_REGULAR,
        '@media all and (min-width: 768px)': {
            fontSize: '1.2rem',
        },
    },
    accent: {
        'fontFamily': FONT_FAMILY,
        'fontSize': '1.8rem',
        'fontWeight': FONT_BOLD,
        '@media all and (min-width: 768px)': {
            fontSize: '1.5rem',
        },
    },
    homeBanner: {
        fontFamily: FONT_FAMILY,
        fontSize: '2.4rem',
        fontWeight: FONT_REGULAR,
    },
    link: {
        fontFamily: FONT_FAMILY,
        fontSize: '1.6rem',
        fontWeight: FONT_REGULAR,
    },
};

const typographyVariant = styledVariant({
    prop: 'variant',
    variants: fontsConfig,
});

const getAsProp = (
    variant: TypographyVariant,
    activeViewportSize: UseActiveViewportSizeReturn,
): string => {
    // Variant is of simple string variant="h1" approach
    if (typeof variant === 'string') {
        return variantMap[variant];
    }

    // Variant is of complex object type variant={{ _: 'h2', laptop: 'h1' }}
    // Variant has key of current activeViewportSize
    if (variant[activeViewportSize]) {
        return variantMap[variant[activeViewportSize]!];
    }

    // Variant does not contain activeViewportSize key. Return the closest one.
    let closestVariantDevice = deviceList
        .slice(
            0,
            deviceList.findIndex((device) => device === activeViewportSize),
        )
        .reverse()
        .find((device) => {
            if (Object.prototype.hasOwnProperty.call(variant, device)) {
                return true;
            }

            return false;
        });

    // Variant does not contain any closest key from deviceList. Return default _ value.
    if (!closestVariantDevice) {
        closestVariantDevice = 'laptopS';
    }

    return variantMap[variant[closestVariantDevice]!];
};

const StyledTypography = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        ![...props, 'color', 'hoverColor', 'transformText', 'hideOverflow'].includes(String(prop)),
})<StyledTypographyProps>`
    text-decoration: none;
    line-height: 1.25;
    ${typographyVariant};
    ${textColor};
    ${textAlign};
    ${space};
    ${typography};
    ${verticalAlign};

    transition: color 200ms ease-in-out;

    ${({ whiteSpace }) => (whiteSpace ? `white-space: ${whiteSpace};` : null)}

    ${({ transformText }: { transformText?: TransformText }) =>
        transformText ? `text-transform: ${transformText};` : null}

    ${({ hoverColor, theme }) =>
        hoverColor &&
        `
            &:hover {
                color: ${theme.colors[hoverColor as string]};
            }
    `}

    ${({ hideOverflow = true }: { hideOverflow?: boolean }) =>
        hideOverflow &&
        `
            text-overflow: ellipsis;
            overflow: hidden;
    `}
`;

const Typography = ({
    variant = 'paragraph',
    color = 'blackBrand',
    hoverColor,
    as = null,
    children,
    transformText,
    hideOverflow = true,
    id = null,
    ...rest
}: TypographyProps): ReactElement => {
    const activeViewportSize = useActiveViewportSize();
    const asPropFromVariant = getAsProp(variant, activeViewportSize);

    return (
        <StyledTypography
            id={id}
            variant={variant}
            transformText={transformText}
            color={color}
            hoverColor={hoverColor}
            as={as || asPropFromVariant}
            hideOverflow={hideOverflow}
            {...rest}
        >
            {children}
        </StyledTypography>
    );
};

export default Typography;
