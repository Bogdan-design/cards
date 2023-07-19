import React from "react";
import {useAppDispatch} from "app/hooks";
import s from './styles.module.css'
import {authThunks} from "features/auth/auth.slice";

export const Register = () => {
    const dispatch = useAppDispatch();

    const registerHandler = () => {
        dispatch(authThunks.register({email: "bogdanbw@gmail.com",password: "123456789"}));
    };

    return (
        <div className={s.container}>
            <h1>Register</h1>
            <button onClick={registerHandler}>register</button>
        </div>
    );
};