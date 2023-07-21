import React from "react";
import s from './styles.module.css';
import {authThunks} from "features/auth/auth.slice";
import {useActions} from "common/hooks/useAppActions";

export const Register = () => {

    const {register}= useActions(authThunks)

    const registerHandler = () => register({email: "bogdanbw@gmail.com",password: "123456789"});

    return (
        <div className={s.container}>
            <h1>Register</h1>
            <button onClick={registerHandler}>register</button>
        </div>
    );
};