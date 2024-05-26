import React from "react";
import { SignupForm } from "../components/SignupForm";
import "./Signup.css"

function Signup() {

    return (
        <>
        <h2>Want to join? Sig up below!</h2>
        <h3>Enter a valid email and choose a username.</h3>
        <main>
            <SignupForm />
        </main>
          
        </>
      );
}

export default Signup;