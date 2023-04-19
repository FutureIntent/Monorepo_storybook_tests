import { useAppSelector } from '@hooks';
import { useRefreshToken } from '@services/auth/hooks';
import { useUser } from '@services/user/hooks';
import { selectUser } from '@store/user/selectors';
import dayjs from 'dayjs';
import nookies from 'nookies';
import { ReactElement, useEffect, useMemo, useState } from 'react';

import AuthenticationContext from './AuthContext';

interface IAuthProviderProps {
    children: ReactElement;
}

const AuthProvider = ({ children }: IAuthProviderProps): ReactElement | null => {
    const appUser = useAppSelector(selectUser);
    const { data: user, isIdle: userIsIdle } = useUser();
    const { refetch: refetchUser, isIdle } = useRefreshToken();
    const [isAuthenticated, setIsAuthenticated] = useState(!!appUser?.id);
    const { refreshTokenExpireDate } = nookies.get();
    const value = useMemo(
        () => ({ isAuthenticated, setIsAuthenticated }),
        [isAuthenticated, appUser?.id],
    );

    useEffect(() => {
        if (
            !isAuthenticated &&
            isIdle &&
            !!refreshTokenExpireDate &&
            dayjs(refreshTokenExpireDate).isBefore(dayjs())
        ) {
            refetchUser();
        }
    }, [isIdle]);

    useEffect(() => {
        if (userIsIdle) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setIsAuthenticated(!!user?.id);
        }
    }, [userIsIdle]);

    return (
        <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
    );
};

export default AuthProvider;
