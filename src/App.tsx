import { useAppDispatch, useAppSelector } from "app/hooks";
import React, { useEffect } from "react";
import { Register } from "features/auth/register/Register";
import { Login } from "features/auth/login/Login";
import styled from "styled-components";
import { selectLoading } from "app/app.selectors";
import ButtonAppBar from "components/ButtonAppBar";
import { Route, Routes } from "react-router-dom";
import { appActions } from "app/app.slice";
import { useActions } from "common/hooks/useAppActions";
import { authThunks } from "features/auth/auth.slice";

export const App = () => {

  const isLoading = useAppSelector(selectLoading);
  const { isInitializedApp } = useActions(authThunks)


  const dispatch = useAppDispatch();


  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }));
    }, 3000);
    isInitializedApp({})
  }, []);


  return (
    <>
      <ButtonAppBar />
      <AppContainer>
        {isLoading && <h1>Loader...</h1>}
        <Routes>
          <Route path="/cards" element={<h1>Cards</h1>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Register/>} />
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

