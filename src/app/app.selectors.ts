import {RootState} from "app/store";

export const selectLoading = (state: RootState) => state.app.isLoading
export const selectIsAppInitialized = (state:RootState) => state.app.isAppInitialized
export const selectIsSignIn = (state:RootState) => state.auth.isSignIn
export const selectProfile = (state:RootState) => state.auth.profile
