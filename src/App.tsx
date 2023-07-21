import {Counter} from "features/counter/Counter";
import {useAppDispatch, useAppSelector} from "app/hooks";
import React, {useEffect} from "react";
import {appActions} from "app/app.slice";
import {Register} from "register/Register";
import {Login} from "login/Login";
import styled from "styled-components";
import {selectLoading} from "app/app.selectors";

export const App = () => {

    const isLoading = useAppSelector(selectLoading);

    const dispatch = useAppDispatch();


    useEffect(() => {
        setTimeout(() => {
            dispatch(appActions.setIsLoading({isLoading: false}));
        }, 3000);
    }, []);

    return (
        <AppContainer>

            {isLoading && <h1>Loader...</h1>}
            <Register/>
            <Login/>
            {/*<Counter/>*/}
        </AppContainer>
    );
}

const AppContainer = styled.div`
  display: flex;
  padding-bottom: 0;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`

