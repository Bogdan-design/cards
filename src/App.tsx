import { useAppSelector } from "app/hooks";
import React, { useEffect } from "react";
import { Register } from "features/auth/register/Register";
import { Login } from "features/auth/login/Login";
import styled from "styled-components";
import { selectIsAppInitialized, selectIsSignIn, selectLoading, selectProfile } from "app/app.selectors";
import ButtonAppBar from "components/ButtonAppBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useActions } from "common/hooks/useAppActions";
import { authThunks } from "features/auth/auth.slice";

export const App = () => {

  const isLoading = useAppSelector(selectLoading);
  const isInitializedApp = useAppSelector(selectIsAppInitialized);
  const isSignIn = useAppSelector(selectIsSignIn);

  console.log(isSignIn);
  console.log(isInitializedApp);


  const { isSignInApp } = useActions(authThunks);
  const navigate = useNavigate()

  useEffect(() => {
    if (!isSignIn) {
       navigate('/login')
    }
    isSignInApp({});
  }, []);

  if (!isInitializedApp) {
    return <div style={{ position: "fixed", width: "100%", top: "45%", textAlign: "center" }}>
      <CircularProgress color="secondary" />
    </div>;
  }


  return (
    <>
      <ButtonAppBar />
      <AppContainer>
        {isLoading && <h1>Loader...</h1>}
        <Routes>
          <Route path="/" element={<h1>Cards</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<div>Error 404</div>} />
        </Routes>
      </AppContainer>
    </>

  );
};

const AppContainer = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;

