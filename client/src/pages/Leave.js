import { LeaveForm } from "../components/LeaveForm";
import React, { useEffect, useState } from "react";
import "./Leave.css"
import { ref } from "yup";
import { useOutletContext } from "react-router-dom";

function Leave() {
    const [refreshPage, setRefreshPage] = useState(false);

    return (
        <>
            <div className = "leave">
                <h2 className = "leave">You can remove your user profile and all associated data from Pensyv at any time!</h2>
                <p className = "leave"> *** <b className = "leave">NOTE</b> ***</p>
                <p className = "leave"><b className = "leave">Your data will be permanently deleted with no recovery.</b></p>
                <p className = "leave">Please re-enter email and username to confirm profile removal.</p>
                <LeaveForm />
            </div>
        </>
      );
}

export default Leave;