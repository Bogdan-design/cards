import { useAppDispatch, useAppSelector } from "app/hooks";
import React, { useEffect } from "react";
import { Register } from "features/auth/register/Register";
import { Login } from "features/auth/login/Login";
import styled from "styled-components";
import { selectIsSignIn, selectLoading } from "app/app.selectors";
import ButtonAppBar from "components/ButtonAppBar";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {

  const isLoading = useAppSelector(selectLoading);
  const isSignIn = useAppSelector(selectIsSignIn)


  const dispatch = useAppDispatch();


  useEffect(() => {
    // setTimeout(() => {
    //   dispatch(appActions.setIsLoading({ isLoading: false }));
    // }, 3000);
  }, []);

  if(isSignIn) {
    // return <Navigate to={"/login"}
  }

  return (
    <>
      <ButtonAppBar />
      <AppContainer>
        {isLoading && <h1>Loader...</h1>}
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
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

