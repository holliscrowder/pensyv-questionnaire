import React, { useEffect, useState } from "react";
import { LoginForm } from "../components/LoginForm";
import "./Login.css"
import { useOutletContext } from "react-router-dom";


function Login() {
    const [refreshPage, setRefreshPage] = useState(false);
    const [user, setUser, isLoggedIn] = useOutletContext();
    const [authorizedEmail, setAuthorizedEmail] = useState(true);

    return (
        <>
            {authorizedEmail? 
                <div className = "login_header">
                    <h2>Login with your user email to access survey questions.</h2>
                </div>
                : 
                <p>Email not found. Please enter authorized email.</p>
            }
            <main>
                <LoginForm user={user} setUser={setUser} authorizedEmail = {authorizedEmail} setAuthorizedEmail = {setAuthorizedEmail} className = "login"/>
            </main>
        </>
      );
}

export default Login;