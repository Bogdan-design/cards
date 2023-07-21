import {instance} from "common/api/comon.api";

export const authApi = {
    register: (data: ArgRegisterType) => {
        return instance.post<RegisterResponseType>('auth/register', data)
    },
    login: (data: ArgLoginType) => {
        return instance.post<ProfileType>('auth/login', data)
    }

}


//types
export type ArgRegisterType = {
    email: string;
    password: string;
};

export type ArgLoginType = {
    email: string;
    password: string;
    rememberMe: boolean;
};

export type RegisterResponseType = {
    addedUser: {
        _id: string;
        email: string;
        rememberMe: boolean;
        isAdmin: boolean;
        name: string;
        verified: boolean;
        publicCardPacksCount: number;
        created: string;
        updated: string;
        __v: number;
    };
};

export type ProfileType = {
    _id: string,
    email: string,
    rememberMe: boolean,
    isAdmin: boolean,
    name: string,
    verified: boolean,
    publicCardPacksCount: number,
    created: string,
    updated: string,
    __v: number,
    token: string,
    tokenDeathTime: number
}