import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export const SurveyForm = () => {
    const [questions, setQuestions] = useState("")
    const [refreshPage, setRefreshPage] = useState(false);

    useEffect(() => {
        fetch("questions")
          .then((r) => r.json())
          .then((data) => {
            setQuestions(data);
          });
      }, []);

    // const formSchema = yup.object().shape({
    //     question1: yup.integer().required("Must enter valid score between (0-4)").min(0).max(4),
    //     question2: yup.integer().required("Must enter valid score between (0-4)").min(0).max(4),
    //     question3: yup.integer().required("Must enter valid score between (0-4)").min(0).max(4),
    //     question4: yup.integer().required("Must enter valid score between (0-4)").min(0).max(4),
    //     question5: yup.integer().required("Must enter valid score between (0-4)").min(0).max(4),
    // })


    // const formik = useFormik({
    //     initialValues: {
    //         question1: "",
    //         question2: "",
    //         question3: "",
    //         question4: "",
    //         question5: ""
    //     },
    //     validationSchema: formSchema,
    //     onSubmit: 
    //         (values) => {
    //             fetch("signup", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-type": "application/json"
    //                 },
    //                 body: JSON.stringify(values, null, 2),
    //             }).then((response) => {
    //                 if (response.status == 201) {
    //                     setRefreshPage(!refreshPage)
    //                 }
    //             });
    //         },
    // });

    // if (!questions.length) {
    //     return <p> Loading Questions... </p>
    // }


    // return (
    //     <div className = "signup">
    //         <form onSubmit = {formik.handleSubmit}>
    //             <label htmlFor = "email">Email Address</label>
    //             <br />
    //             <input
    //                 id = "email"
    //                 name = "email"
    //                 onChange = {formik.handleChange}
    //                 value = {formik.values.email}
    //             />
    //             <p style = {{ color: "red" }}> {formik.errors.email}</p>
    //             <label htmlFor = "username">Username</label>
    //             <br />

    //             <input 
    //                 id = "username"
    //                 name = "username"
    //                 onChange = {formik.handleChange}
    //                 value = {formik.values.username}
    //             />
    //             <p style = {{ color: "red" }}> {formik.errors.username}</p>
    //             <button type = "submit">Submit</button>
    //         </form>
    //     </div>
    // )


    return (<></>)

}