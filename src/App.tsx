import { useAppDispatch, useAppSelector } from "app/hooks";
import React, { useEffect } from "react";
import { appActions } from "app/app.slice";
import { Register } from "register/Register";
import { Login } from "login/Login";
import styled from "styled-components";
import { selectLoading } from "app/app.selectors";
import ButtonAppBar from "components/ButtonAppBar";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";

export const App = () => {

  const isLoading = useAppSelector(selectLoading);


  const dispatch = useAppDispatch();


  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }));
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <ButtonAppBar />
      <AppContainer>
        {isLoading && <h1>Loader...</h1>}
        {!isLoading ? <Navigate to={"/login"} /> : <Navigate to={"/register"} />}
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/*" element={<div>Error 404</div>} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
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

