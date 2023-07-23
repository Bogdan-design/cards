import {RootState} from "app/store";

export const selectLoading = (state: RootState) => state.app.isLoading
export const selectIsSignIn = (state:RootState) => state.auth.isSignIn