import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { SignupForm } from "./components/SignupForm";
import NavBar from "./components/NavBar"
import "./App.css"
import {LoginForm} from "./components/LoginForm"

function App() {
  const [user, setUser] = useState(null);

  return (
  <div className = "App">
    <div className = "NavBar">
      <NavBar/>
    </div>
    <main className = "Outlet">
      <Outlet 
        context = {[
          user,
          setUser
        ]}
      />
    </main>
  </div>
);
}

export default App;
