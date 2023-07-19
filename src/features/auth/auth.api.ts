import {instance} from "common/api/comon.api";
import {ArgRegisterType} from "features/auth/auth.slice";

export const authApi = {
    register: (data:ArgRegisterType) => {
        return instance.post<RegisterResponseType>('auth/register',{email:data.email,password:data.password})
    }
}


//types
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