import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export const SignupForm = () => {
    const [refreshPage, setRefreshPage] = useState(false);

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
            fetch("signup", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(values, null, 2),
            }).then((response) => {
                if (response.status == 201) {
                    setRefreshPage(!refreshPage)
                }
            });
        },
    });

    return (
        <div>
            <form onSubmit = {formik.handleSubmit} style = {{ margin: "30px"}}>
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
                <button type = "submit">Submit</button>
            </form>
        </div>
    )




}