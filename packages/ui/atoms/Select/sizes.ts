import { variant as styledVariant } from 'styled-system';

export type SelectSizes = 'small' | 'default';

export const sizeVariants = styledVariant({
    prop: 'sizeVariant',

    variants: {
        default: {
            height: '45px',
            padding: '1.25rem',
        },
        small: {
            height: '40px',
            padding: '1.25rem',
        },
    },
});
