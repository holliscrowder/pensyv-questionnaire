import React, { useEffect, useState } from "react";
import { LoginForm } from "../components/LoginForm";
import "./Login.css"
import { useOutletContext } from "react-router-dom";

function Login() {
    const [refreshPage, setRefreshPage] = useState(false);
    const [user, setUser, isLoggedIn] = useOutletContext();

    return (
        <>
            <div className = "login_header">
                <h2>Login with your user email to access survey questions.</h2>
            </div>
            <main>
                <LoginForm user={user} setUser={setUser} className = "login"/>
            </main>
        </>
      );
}

export default Login;