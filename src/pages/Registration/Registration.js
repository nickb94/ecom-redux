import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import {Footer} from "../../components/Footer/Footer"

import "./Registration.css";

const Registration = () => {

    return (
        <>
        <div className="registration">
            <SignIn />
            <SignUp />
        </div>
        <Footer />
        </>
    );

}

export default Registration;
