import React, { useEffect, useState } from "react";
import { LoginForm } from "../components/LoginForm";
import "./Profile.css"
import { useOutletContext } from "react-router-dom";
import {ProfileForm} from "../components/ProfileForm"

function Profile() {
    const [user, setUser, isLoggedIn] = useOutletContext();

    return (
        <>
            <div className = "profile_header">
                <h2>User Profile</h2>
                <p>You can update your user profile details at any time.</p>
            </div>
            <div className = "profile_instructions">
                <p><b>Current email: </b> {user.email}</p>
                <p><b>Current username: </b> {user.username}</p>
            </div>
            <ProfileForm className = "profile" user={user} setUser={setUser}/>
        </>
      );
}

export default Profile;