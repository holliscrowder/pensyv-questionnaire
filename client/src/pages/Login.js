import React from "react";
import { LoginForm } from "../components/LoginForm";
import "./Signup.css"
import { useOutletContext } from "react-router-dom";

function Login() {

    return (
        <>
        <h2>Sign in to access survey questions!</h2>
        <main>
            <LoginForm />
        </main>
          
        </>
      );
}

export default Login;