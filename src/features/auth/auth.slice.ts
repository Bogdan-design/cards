import { createSlice } from "@reduxjs/toolkit";
import {
  ArgLoginType,
  ArgRegisterType,
  authApi,
  LogOutType,
  ProfileType,
  RegisterResponseType
} from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/create-app-async-thunk";
import { appActions } from "app/app.slice";


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

const login = createAppAsyncThunk<{ isSignIn: boolean }, ArgLoginType>("auth/login", arg => {
  return authApi.login(arg)
    .then(res => {
      return { isSignIn: true };
    })

});

const logOut = createAppAsyncThunk<{ isSignIn: boolean }, void>("auth/logout", _ => {
  return authApi.logOut()
    .then(res => {
      return { isSignIn: false };
    });

});

const isSignInApp = createAppAsyncThunk<{ isSignIn: boolean }, void>("auth/me", (_, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI;
  return authApi.me()
    .then(res => {
        if (res) {
          return { isSignIn: true };
        } else {
          return rejectWithValue("Please Sign in or Sign up");
        }
      }
    )
    .finally(() => {
      dispatch(appActions.isAppInitialized({ isAppInitialized: true }));
    });
});

const initialState = {
  profile: null as ProfileType | null,
  isSignIn: false as boolean
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isSignIn = action.payload.isSignIn
      })
      .addCase(isSignInApp.fulfilled, (state, action) => {
        state.isSignIn = action.payload.isSignIn;
      })
      .addCase(logOut.fulfilled,(state,action)=>{
        state.isSignIn=action.payload.isSignIn
      })
  }
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { register, login, isSignInApp,logOut };