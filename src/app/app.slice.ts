import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: InitialStateType = {
  error: null as string | null,
  isLoading: true,
  isAppInitialized: false
};


const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading;
    },
    isAppInitialized:(state,action:PayloadAction<{isAppInitialized:boolean}>) => {
      state.isAppInitialized = action.payload.isAppInitialized
    }
  },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;

//type
type InitialStateType = {
  error: string | null,
  isLoading: boolean,
  isAppInitialized: boolean,
}