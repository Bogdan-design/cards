import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi} from "features/auth/auth.api";

export type ArgRegisterType = { email: string, password: string }

const register = createAsyncThunk('auth/register', async (arg:ArgRegisterType) => {
    debugger
    const res = await authApi.register(arg)
        .then(res => {
        debugger
    })
})

const slice = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {}
})

export const authReducer = slice.reducer
export const authThunks = {register}