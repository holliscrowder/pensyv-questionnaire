import React from "react";
import { SignupForm } from "../components/SignupForm";
import "./Signup.css"
import { useOutletContext } from "react-router-dom";

function Signup() {
    const [user, setUser] = useOutletContext();

    return (
        <>
        <h2>Want to join? Sign up below!</h2>
        <p>Enter a valid email and choose a username.</p>
        <main>
            <SignupForm user={user} setUser={setUser}/>
        </main>
          
        </>
      );
}

export default Signup;