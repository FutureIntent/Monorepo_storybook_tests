import type { AppProps } from 'next/app';
import { NextPage } from 'next';

import { PersistGate } from 'redux-persist/integration/react';
import { Context as ResponsiveContext } from 'react-responsive';
import QueryProvider from 'cryo-ui-kit/providers/QueryProvider';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import ModalProvider from 'cryo-ui-kit/providers/ModalProvider';
import { ReactElement, ReactNode, useMemo } from 'react';
import GlobalStyles from 'cryo-ui-kit/theme/GlobalStyles';
import theme from 'cryo-ui-kit/theme/configs';
import AuthProvider from '@providers/AuthProvider';
import Layout from '@templates/Layout';
import { wrapper } from '@store';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const CryoTherapiesApp = ({ Component, ...rest }: AppPropsWithLayout) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    const defScreenSize = useMemo(() => ({ width: 1200 }), []);
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

    return (
        <QueryProvider>
            <Provider store={store}>
                <PersistGate
                    persistor={
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        // eslint-disable-next-line no-underscore-dangle
                        store._persistor
                    }
                >
                    <ResponsiveContext.Provider value={defScreenSize}>
                        <ThemeProvider theme={theme}>
                            <ModalProvider>
                                <AuthProvider>
                                    <>
                                        <GlobalStyles />
                                        {getLayout(<Component {...props.pageProps} />)}
                                    </>
                                </AuthProvider>
                            </ModalProvider>
                        </ThemeProvider>
                    </ResponsiveContext.Provider>
                </PersistGate>
            </Provider>
        </QueryProvider>
    );
};

export default CryoTherapiesApp;
