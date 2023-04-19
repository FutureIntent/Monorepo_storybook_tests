import { useAppDispatch } from '@hooks';
import {
    checkSms,
    ICheckSmsProps,
    ISignInWithPhoneProps,
    ISignInWithPhoneResponse,
    refreshToken,
    signInWithPhone,
    signOut,
    signUpEmail,
    singInEmail,
} from '@services/auth/requests';
import {
    IAuthEmailConfirmResponse,
    IAuthEmailCredentialsProps,
    IAuthEmailResponse,
} from '@services/auth/types';
import { setToken } from '@services/axios';
import { getUser } from '@services/user/requests';
import { setUser } from '@store/user/slice';
import { TOKEN_LIFETIME } from '@utils/jwtTokenHelpers';
import { AxiosError } from 'axios';
import nookies from 'nookies';
import {
    useMutation,
    useQueryClient,
    UseMutationResult,
    UseQueryResult,
    useQuery,
} from 'react-query';

/** *******************
 * Email Authorisation
 ******************* */

export const useSignUpEmail = (): UseMutationResult<
    IAuthEmailResponse,
    string[],
    IAuthEmailCredentialsProps
> =>
    useMutation<IAuthEmailResponse, string[], IAuthEmailCredentialsProps>(signUpEmail, {
        onSuccess: async (response) => {
            try {
                return response;
            } catch (error) {
                // eslint-disable-next-line no-console
                return console.error('Something went wrong: ', error);
            }
        },
    });

export const useSignInEmail = (): UseMutationResult<
    IAuthEmailConfirmResponse,
    string[],
    IAuthEmailCredentialsProps
> => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useMutation<IAuthEmailConfirmResponse, string[], IAuthEmailCredentialsProps>(
        singInEmail,
        {
            onSuccess: async (response) => {
                await setToken(response.data.token);
                const userData = await getUser();

                queryClient.setQueryData('user', userData);
                dispatch(setUser(userData));
            },
        },
    );
};

/** *******************
 * Phone Authorisation
 ******************* */

export const useSignInByPhone = (): UseMutationResult<
    ISignInWithPhoneResponse,
    string[],
    ISignInWithPhoneProps
> =>
    useMutation<ISignInWithPhoneResponse, string[], ISignInWithPhoneProps>(signInWithPhone, {
        onSuccess: async (response) => {
            try {
                return response;
            } catch (error) {
                // eslint-disable-next-line no-console
                return console.error('Something went wrong: ', error);
            }
        },
    });

export const useCheckSms = (): UseMutationResult<
    IAuthEmailConfirmResponse,
    string[],
    ICheckSmsProps
> => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useMutation<IAuthEmailConfirmResponse, string[], ICheckSmsProps>(checkSms, {
        onSuccess: async (response) => {
            await setToken(response.data.token);
            const userData = response.data.userInfo;

            nookies.set(null, 'refreshTokenExpireDate', response.data.refreshToken);
            queryClient.setQueryData('user', userData);
            dispatch(setUser(userData));
        },
    });
};

/** *******************
 * Global Authorisation
 ******************* */

export const useSignOut = () => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useMutation(signOut, {
        onSuccess: async () => {
            setToken(null);
            nookies.destroy(null, 'refreshTokenExpireDate');
            queryClient.setQueryData('user', null);
            dispatch(setUser(null));

            window.localStorage.setItem('logout', Date.now().toString());
        },
    });
};

export const useRefreshToken = (): UseQueryResult<boolean, AxiosError> => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();

    return useQuery(
        'refreshToken',
        async () => {
            const tokenData = await refreshToken();

            if (tokenData.data.token) {
                setToken(tokenData.data.token);
                nookies.set(null, 'refreshTokenExpireDate', tokenData.data.refreshTokenExpires);

                queryClient.setQueryData('user', tokenData.data.userInfo);
                dispatch(setUser(tokenData.data.userInfo));

                return true;
            }

            queryClient.setQueryData('user', null);
            dispatch(setUser(null));

            return false;
        },
        {
            refetchInterval: TOKEN_LIFETIME,
            staleTime: TOKEN_LIFETIME,
            retry: false,
            enabled: false,
        },
    );
};
