import {
    IAuthEmailConfirmResponse,
    IAuthEmailCredentialsProps,
    IAuthEmailResponse,
} from '@services/auth/types';
import axios from '@services/axios';

axios.defaults.withCredentials = true;

/**
 * Auth with email
 */

export const signUpEmail = ({
    email,
    password,
}: IAuthEmailCredentialsProps): Promise<IAuthEmailResponse> =>
    axios
        .post('/user/register/email', { email, password }, { withCredentials: false })
        .then((response) => response.data)
        .catch((error) => Promise.reject(error.response.data.message));

/**
 * Sign-in by e-mail.
 *
 * @param {IAuthEmailCredentialsProps} props
 */
export const singInEmail = ({
    email,
    password,
}: IAuthEmailCredentialsProps): Promise<IAuthEmailConfirmResponse> =>
    axios
        .post('/user/signin/email', { email, password })
        .then((response) => response.data)
        .catch((error) => Promise.reject(error.response.data.message));

export const refreshToken = () =>
    axios
        .post('/user/refresh-auth')
        .then((response) => response.data)
        .catch((error) => {
            if (error.response.status === 401) {
                return Promise.resolve({ accessToken: null });
            }

            return Promise.reject(error);
        });

export const signOut = () =>
    axios.post('/user/logout').catch((error) => Promise.reject(error.response.data.message));

/**
 * Auth with phone number
 */

export interface ISignInWithPhoneResponse {
    data: {
        requestId: string;
        resendAvailable: number;
        status: 'Approved' | 'Pending';
    };
}

export interface ISignInWithPhoneProps {
    phoneNumber: string;
}

export const signInWithPhone = ({
    phoneNumber,
}: ISignInWithPhoneProps): Promise<ISignInWithPhoneResponse> =>
    axios
        .post('/user/register-by-phone', { phoneNumber })
        .then((response) => response.data)
        .catch((error) => Promise.reject(error.response.data.message));

export interface ICheckSmsProps {
    phoneCountryCode: string;
    phoneNumber: string;
    verificationId: string;
    verificationCode: string;
}

export const checkSms = ({
    phoneCountryCode,
    phoneNumber,
    verificationId,
    verificationCode,
}: ICheckSmsProps): Promise<IAuthEmailConfirmResponse> =>
    axios
        .post('/user/check-sms', {
            phoneCountryCode,
            phoneNumber,
            verificationId,
            verificationCode,
        })
        .then((response) => response.data)
        .catch((error) => Promise.reject(error.response.data.message));
