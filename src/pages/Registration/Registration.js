import React from "react";
import "./Registration.css";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const Registration = () => {

    return (

        <div className="registration">
            <SignIn />
            <SignUp />
        </div>
    );

}

export default Registration;
