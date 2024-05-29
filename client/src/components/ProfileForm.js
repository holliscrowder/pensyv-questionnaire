import {React, useState} from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./ProfileForm.css";
import { Link } from "react-router-dom";

export const ProfileForm = ({user, setUser}) => {
    const [isUpdated, setIsUpdated] = useState(false);

    const formSchema = yup.object().shape({
        email: yup.string().email("Invalid email").required("Must enter valid email"),
        username: yup.string().required("Must enter username").max(50)
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            username: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch("users", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(values, null, 2),
            }).then((response) => {
                if (response.status == 201) {
                    return response.json()
                }

            }).then((data) => {
                console.log(data);
                setUser(data);
                setIsUpdated(true)
            });
        },
    });

    if (isUpdated == false) {
        return (
            <div className = "profile">
                <form onSubmit = {formik.handleSubmit}>
                    <label htmlFor = "email">Email Address</label>
                    <br />
                    <input
                        id = "email"
                        name = "email"
                        onChange = {formik.handleChange}
                        value = {formik.values.email}
                    />
                    <p style = {{ color: "red" }}> {formik.errors.email}</p>
                    <label htmlFor = "username">Username</label>
                    <br />

                    <input 
                        id = "username"
                        name = "username"
                        onChange = {formik.handleChange}
                        value = {formik.values.username}
                    />
                    <p style = {{ color: "red" }}> {formik.errors.username}</p>
                    <button type = "submit">Update Profile</button>
                </form>
            </div>
        )
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