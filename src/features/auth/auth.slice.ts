import { createSlice } from "@reduxjs/toolkit";
import { ArgLoginType, ArgRegisterType, authApi, ProfileType, RegisterResponseType } from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk";


const register = createAppAsyncThunk<RegisterResponseType, ArgRegisterType>("auth/register", (arg, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  return authApi.register(arg)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      return rejectWithValue("");
    });
});

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>("auth/login", arg => {
  return authApi.login(arg)
    .then(res => {
      return { profile: res.data };
    });
});

const isSignIn = createAppAsyncThunk<{ isSignIn: boolean }, void>("auth/me", _ => {
  return authApi.me()
    .then(res => {
      return { isSignIn: true };
    });
});

const initialState = {
  profile: null as ProfileType | null,
  isSignIn: false as boolean
}

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
      state.profile = action.payload.profile})
      .addCase(isSignIn.fulfilled, (state, action) => {
      state.isSignIn = action.payload.isSignIn
    })
      }
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { register, login, isInitializedApp: isSignIn };