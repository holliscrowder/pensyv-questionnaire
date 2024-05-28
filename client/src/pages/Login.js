import React, { useEffect, useState } from "react";
import { LoginForm } from "../components/LoginForm";
import "./Signup.css"
import { useOutletContext } from "react-router-dom";

function Login() {
    const [refreshPage, setRefreshPage] = useState(false);
    const [user, setUser] = useOutletContext();

    return (
        <>
            <h2>Sign in to access survey questions!</h2>
            <main>
                <LoginForm refreshPage={refreshPage} setRefreshPage={setRefreshPage} user={user} setUser={setUser} />
            </main>
        </>
      );
}

export default Login;