import { StylesConfig } from 'react-select';
import { SelectOption } from '../types';
import colors from '../../../theme/configs/colors';

const defaultConfig: StylesConfig<SelectOption, false> = {
    control: (_, state) => {
        let cursor = 'pointer';

        if (state.isDisabled) cursor = 'not-allowed';
        if (state.selectProps.readonly) cursor = 'default';

        return {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            position: 'relative',
            minHeight: '100%',
            width: '100%',
            cursor,
        };
    },
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        transition: 'all .2s ease',
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : '',
        path: {
            fill: state.selectProps.color,
        },
    }),
    valueContainer: (initialStyles) => ({
        ...initialStyles,
        overflow: 'unset',
        padding: undefined,
        pointerEvents: 'none',
        input: {
            width: '100%',
        },
    }),
    singleValue: () => ({
        'color': colors.blackBrand,
        'maxWidth': 'calc(100% - 8px)',
        'textOverflow': 'ellipsis',
        'whiteSpace': 'nowrap',
        'overflow': 'hidden',
        'transform': 'translateY(14px)',
        '@media all and (min-width: 768px)': {
            transform: 'translateY(19px)',
        },
    }),
    placeholder(initialStyles) {
        return {
            ...initialStyles,
            'fontSize': '1.2rem',
            'transform': 'translateY(0)',
            '@media all and (min-width: 768px)': {
                fontSize: '1.6rem',
            },
        };
    },
    menu: (provided) => ({
        ...provided,
        zIndex: 9999,
        left: 0,
    }),
    container: () => ({
        width: '100%',
    }),
    input: () => ({
        width: '100%',
        input: {
            width: '100%!important',
        },
    }),
};

export default defaultConfig;
