import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { SignupForm } from "./components/SignupForm";
import NavBar from "./components/NavBar"

function App() {
  return (<>
    <NavBar />
    <main>
      <Outlet/>
    </main>
  </>
  
);
}

export default App;
