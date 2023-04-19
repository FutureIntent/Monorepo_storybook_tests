import Axios from 'axios';
import nookies from 'nookies';

const axios = Axios.create({
    headers: {
        'Content-Type': 'application/json-patch+json',
        'crossDomain': true,
    },
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    // baseURL: process.env.NEXT_PUBLIC_LOCAL_API_URL,
});

export const setToken = (newToken: string | null): void => {
    if (!newToken) return;

    nookies.set(null, 'token', newToken);
};

export const getToken = (): string | null => {
    const { token } = nookies.get();

    return token;
};

axios.interceptors.request.use((config) => {
    const accessToken = getToken();

    if (accessToken && config?.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

export default axios;
