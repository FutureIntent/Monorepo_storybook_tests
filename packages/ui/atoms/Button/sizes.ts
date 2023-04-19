import { variant as styledVariant } from 'styled-system';

export type ButtonSize = 'default' | 'small';

export const sizeVariants = styledVariant({
    prop: 'size',

    variants: {
        default: {
            minWidth: '45px',
            height: '45px',
            padding: '1.1rem clamp(1.1rem, 2rem, 2rem)',
        },
        small: {
            minWidth: '40px',
            height: '40px',
            padding: 'clamp(0.8rem, 1.05rem, 1.05rem) clamp(0.8rem, 2rem, 2rem)',
        },
    },
});
