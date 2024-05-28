import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./SignupForm.css"
import { useNavigate } from "react-router-dom";

export const LoginForm = ({refreshPage, setRefreshPage, user, setUser}) => {
    // const [refreshPage, setRefreshPage] = useState(false);
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        email: yup.string().email("Invalid email").required("Must enter valid email")
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
            }).then((response) => {
                if (response.status == 200) {
                    // setRefreshPage(!refreshPage);
                    return response.json()
                }
                
            }).then((response) => {
                setUser(response);
                console.log(user);
                navigate("/survey")
            }
            )

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
            </div>
        </>
    )




}