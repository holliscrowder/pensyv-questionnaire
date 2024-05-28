import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, useNavigate } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { SignupForm } from "./components/SignupForm";
import NavBar from "./components/NavBar"
import "./App.css"
import {LoginForm} from "./components/LoginForm"

function App() {
  const [user, setUser] = useState(null);
  const isLoggedIn = !!user
  const navigate = useNavigate();
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("checksession")
      .then((response) => {
        if (response.status == 200) {  
          return response.json()
        } else {
          throw response
        }
      })
      .then((data) => {
        setUser(data)
    
      })
      .catch(e => {
      });
  }, []);

  function handleLogout() {
    fetch("logout", {
      method: "DELETE",
      headers: {
          "Content-type": "application/json"
      }})
    .then((response) => {
      if (response.message == "204: No Content") {
        return response.json()
      }
    })
    .then((data) => {
      setUser(null)
      navigate("/")
    })
  }

  return (
  <div className = "App">
    <div className = "NavBar">
      <NavBar user={user} isLoggedIn={isLoggedIn}/>
      {isLoggedIn ? <button onClick = {handleLogout}>Logout</button> : <></>}
    </div>
    <main className = "Outlet">
      <Outlet 
        context = {[
          user,
          setUser,
          isLoggedIn
        ]}
      />
    </main>
  </div>
);
}

export default App;
