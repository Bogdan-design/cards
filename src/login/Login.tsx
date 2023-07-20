import React from 'react';
import {useAppDispatch} from "app/hooks";
import {authThunks} from "features/auth/auth.slice";
import s from "register/styles.module.css";

export const Login = () => {
    const dispatch = useAppDispatch();

    const loginHandler = () => {
        dispatch(authThunks.login({email: "bogdanbw@gmail.com",password: "123456789",rememberMe:false}));
    };
    return (
        <div className={s.container}>
            <h1>Login</h1>
            <button onClick={loginHandler}>register</button>
        </div>
    );
};

