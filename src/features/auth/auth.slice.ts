import {createSlice} from "@reduxjs/toolkit";
import {ArgLoginType, ArgRegisterType, authApi, ProfileType, RegisterResponseType} from "features/auth/auth.api";
import {createAppAsyncThunk} from "common/utils/create-app-async-thunk";


const register = createAppAsyncThunk<RegisterResponseType, ArgRegisterType>('auth/register', arg => {
    return authApi.register(arg)
        .then(res => {
            return res.data
        })
})

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>('auth/login', arg => {
    return authApi.login(arg)
        .then(res => {
            return {profile: res.data}
        })
})

const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: null as ProfileType | null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.profile = action.payload.profile
        })
    }
})

export const authReducer = slice.reducer
export const authActions = slice.actions
export const authThunks = {register, login}