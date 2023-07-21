import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "app/store";
import {App} from "App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Root} from "routes/Root";
import {SignIn} from "routes/SignIn";
import {SignUp} from "routes/SignUp";
import {Profile} from "routes/Profile";
import {Cards} from "routes/Cards";
import {Learn} from "routes/Learn";
import {Packs} from "routes/Packs";
import {ForgotPassword} from "routes/ForgotPassword";
import {CheckEmail} from "routes/CheckEmail";
import {SetNewPassword} from "routes/SetNewPassword";
import ButtonAppBar from "components/ButtonAppBar";
import { Login } from "login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: "Error"
    },
    {
        path: "login",
        element: <Login/>,
        errorElement: "Error"
    },
    {
        path: "sign-in",
        element: <SignIn/>,
        errorElement: "Error"
    },
    {
        path: "sign-up",
        element: <SignUp/>,
        errorElement: "Error"
    },
    {
        path: "profile",
        element: <Profile/>,
        errorElement: "Error"
    },
    {
        path: "cards",
        element: <Cards/>,
        errorElement: "Error"
    },
    {
        path: "learn",
        element: <Learn/>,
        errorElement: "Error"
    },
    {
        path: "packs",
        element: <Packs/>,
        errorElement: "Error"
    },
    {
        path: "forgot-password",
        element: <ForgotPassword/>,
        errorElement: "Error"
    },
    {
        path: "check-email",
        element: <CheckEmail/>,
        errorElement: "Error"
    },
    {
        path: "set-new-password",
        element: <SetNewPassword/>,
        errorElement: "Error"
    },

]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
        <Provider store={store}>
            {/*<RouterProvider router={router}/>*/}
            <App/>
        </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
