import * as rtl from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { FormProvider, useForm } from 'react-hook-form';
import theme from '../theme/configs';

const Screen = ({ children }: { children: ReactNode }): ReactElement => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const ScreenWithFormProvider = ({ children }: { children: ReactNode }): ReactElement => {
    const methods = useForm();

    return (
        <ThemeProvider theme={theme}>
            <FormProvider {...methods}>{children}</FormProvider>
        </ThemeProvider>
    );
};

export const render = (ui: ReactElement, options = {}): rtl.RenderResult =>
    rtl.render(ui, { wrapper: Screen, ...options });

export const renderWithForm = (ui: ReactElement, options = {}): rtl.RenderResult =>
    rtl.render(ui, { wrapper: ScreenWithFormProvider, ...options });

export * from '@testing-library/react';
export { render as renderWithTheme };
export { renderWithForm as renderWithFormProvider };
