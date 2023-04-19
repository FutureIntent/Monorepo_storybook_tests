import { IUser } from '@services/user/requests';

export enum IAuthEmailVerificationStatus {
    init = 'Initialized',
    complete = 'Complete',
    error = 'Error',
    fail = 'Failed',
}
export interface IAuthEmailResponse {
    data: {
        id: string;
        resendAvailable: string;
        status: IAuthEmailVerificationStatus;
    };
}

export interface IAuthEmailConfirmResponse {
    data: {
        token: string;
        refreshToken: string;
        userInfo: IUser;
    };
}

export interface IAuthEmailCredentialsProps {
    email: string;
    password: string;
}
