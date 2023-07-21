import React from 'react';
import {authThunks} from "features/auth/auth.slice";
import s from "register/styles.module.css";
import {useActions} from "common/hooks/useAppActions";

export const Login = () => {

    const {login}=useActions(authThunks)

    const loginHandler = () => login({email: "bogdanbw@gmail.com",password: "123456789",rememberMe:false});


    return (
        <div className={s.container}>
            <h1>Login</h1>
            <button onClick={loginHandler}>register</button>
        </div>
    );
};

