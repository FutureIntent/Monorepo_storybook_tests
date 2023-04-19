import { ThemeProvider } from 'styled-components';
import theme from '../theme/configs';
import GlobalStyles from '../theme/GlobalStyles';
import { Context as ResponsiveContext } from 'react-responsive';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';
import colors from '../theme/configs/colors';
import Box from '../atoms/Box';

export const parameters = {
    layout: 'centered',
    viewport: {
        viewports: {
            ...INITIAL_VIEWPORTS,
        },
    },
    backgrounds: {
        values: [
            { name: 'light', value: colors.greyCyan },
            { name: 'dark', value: colors.blackBrand },
        ],
    },
};

addDecorator((story) => (
    <ResponsiveContext.Provider value={{ width: 1200 }}>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {story()}
        </ThemeProvider>
    </ResponsiveContext.Provider>
));
