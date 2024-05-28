import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./SignupForm.css"

export const LoginForm = () => {
    const [refreshPage, setRefreshPage] = useState(false);

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
                if (response.status == 201) {
                    console.log(response);
                    setRefreshPage(!refreshPage)
                }
            });
        },
    });

    return (
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
                <button type = "submit">Submit</button>
            </form>
        </div>
    )




}