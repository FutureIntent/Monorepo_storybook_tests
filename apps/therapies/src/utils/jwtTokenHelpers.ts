import { isSSR } from '@utils/helpers';
import nookies from 'nookies';

const DAYS = 7;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
const MILISECONDS_IN_SECOND = 1000;

export const TOKEN_LIFETIME =
    DAYS * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MILISECONDS_IN_SECOND;

export const parseJwt = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join(''),
    );

    return JSON.parse(jsonPayload);
};

export const getRefreshTokenExpires = () => {
    if (isSSR()) return null;

    const { refreshTokenExpires } = nookies.get();

    return refreshTokenExpires;
};

export const setRefreshTokenExpires = ({ date }: { date?: string }) => {
    if (date) {
        nookies.set(null, 'refreshTokenExpires', date);
    }
};

export const removeRefreshToken = () => {
    nookies.destroy(null, 'refreshTokenExpires');
};
