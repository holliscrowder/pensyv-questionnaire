import React from "react";
import { SignupForm } from "../components/SignupForm";
import "./Signup.css"
import { useOutletContext } from "react-router-dom";

function Signup() {

    return (
        <>
        <h2>Want to join? Sign up below!</h2>
        <h3>Enter a valid email and choose a username.</h3>
        <main>
            <SignupForm />
        </main>
          
        </>
      );
}

export default Signup;