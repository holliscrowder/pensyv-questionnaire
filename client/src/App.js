import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { SignupForm } from "./components/SignupForm";
import NavBar from "./components/NavBar"
import "./App.css"
import {LoginForm} from "./components/LoginForm"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  function handleLogin() {
    console.log("toggling login/logout");
    setIsLoggedIn(!isLoggedIn);
  }

  function loginUser(user) {

  }

  return (
  <div className = "App">
    <div className = "NavBar">
      <NavBar/>
    </div>
    <div>
      {{isLoggedIn} ? <LoginForm /> : <p>Please login to access questionnaire.</p>}
      <button onClick = {handleLogin} type = "button">{isLoggedIn ? "Logout": "Login"}</button>
    </div>
    <main className = "Outlet">
      <Outlet 
        loginUser = {loginUser}
        />
    </main>
  </div>
);
}

export default App;
