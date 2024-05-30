import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./SignupForm.css"
import { useNavigate, useOutletContext } from "react-router-dom";

export const LoginForm = ({user, setUser, authorizedEmail, setAuthorizedEmail}) => {
    // const [user, setUser, isLoggedIn] = useOutletContext();
    
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');
    const formSchema = yup.object().shape({
        email: yup.string().email("Invalid email format").required("Must enter valid email format")
    })

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch("login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(values, null, 2),
            })
            .then((response) => {
                if (!response.ok) {
                    // If the response is not ok, try to parse the error message from JSON
                    return response.json().then((errorData) => {
                        throw new Error(errorData.email_status || 'Network response was not ok');
                    });
                }
                return response.json();
            })
            .then((data) => {
                // const { user_data } = data;
                // debugger
                // setUser(user_data);
                setUser(data)
                navigate("/survey");
            })
            .catch((error) => {
                // console.error('Error fetching data:', error);
                setErrorMessage(error.message || 'An error occurred. Please try again later.');
                // Display an error message to the user
                // You can set some state to show an error message in your component
                // For example: setErrorState(error.message);
            });
        },
    });

    return (
        <>
            <div className = "login">
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
                    <button type = "submit">Login</button>
                </form>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
        </>
    )




}