import React from "react";
import "./Survey.css"
import { SurveyForm } from "../components/SurveyForm";

function Survey() {

    return (
        <>
          <main>
            <h2> Daily Mood Questionnaire </h2>
                <p>The following questions will ask you for a response on a scale of 0-4 based on how you felt  
                    <b> in the past 24 hours:</b>
                </p>
                <p>
                    4 - Extremely: This statement applies <b> without exception.</b>
                </p>
                <p>
                    3 - Quite a Lot: This statement<b> pretty much </b> summarizes how I felt.
                </p>
                <p>
                    2 - Moderately: I felt like this <b> around half of the time. </b>
                </p>
                <p>
                    1 - A Little: I felt like this <b> sometimes. </b>
                </p>
                <p>
                    0 - Not at All: I <b> never </b> felt like this at any point.
                </p>
            <SurveyForm />
          </main>
        </>
      );
}

export default Survey;