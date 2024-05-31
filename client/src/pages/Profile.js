import React, { useState } from "react";
import "./Profile.css"
import { useOutletContext } from "react-router-dom";
import {ProfileForm} from "../components/ProfileForm";
import { Link } from "react-router-dom";

function Profile() {
    const [user, setUser, isLoggedIn] = useOutletContext();
    const [isUpdated, setIsUpdated] = useState(false);


if (isUpdated == false) {
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
            <ProfileForm className = "profile" user={user} setUser={setUser} isUpdated={isUpdated} setIsUpdated={setIsUpdated} />
        </>
      );
    }
      else {
        return (
            <div className = "updated">
                <p>Profile Updated! What would you like to do next?</p>
                <li>
                    <Link to="/">Home</Link>
                </li>  
                <li>
                    <Link to="/survey">Survey</Link> 
                </li>  
                <li>
                    <Link to="/profile">Update Profile</Link> 
                </li> 
            </div>    
            )
    }
}

export default Profile;