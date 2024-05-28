import { LeaveForm } from "../components/LeaveForm";
import React, { useEffect, useState } from "react";
import "./Leave.css"
import { ref } from "yup";

function Leave() {
    const [refreshPage, setRefreshPage] = useState(false);
    return (
        <>
            <div>
                <h2>You can remove your user profile and all associated data from Pensyv at any time!</h2>
                <p> *** <b>NOTE</b> ***</p>
                <p><b>Your data will be permanently deleted with no recovery.</b></p>
                <p>Please re-enter email and username to confirm profile removal.</p>
                <LeaveForm refreshPage={refreshPage} setRefreshPage={setRefreshPage}/>
            </div>
        </>
      );
}

export default Leave;