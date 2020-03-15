import React from "react";

import "./SignIn.css";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";


class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async (e) => {

        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" });

        } catch (error) {
            console.error(error);
        }


    }
    handleChange = (e) => {

        const { value, name } = e.target;
        this.setState({ [name]: value });

    }


    render() {

        return (
            <div className="sign-in">
                <h2>Already a Member?</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <FormInput
                        name="email"
                        value={this.state.email}
                        type="email"
                        label="email"
                        handleChange={(e) => this.handleChange(e)}
                        required
                    />

                    <label>Password</label>
                    <FormInput
                        name="password"
                        value={this.state.password}
                        type="password"
                        label="password"
                        handleChange={(e) => this.handleChange(e)}
                        required
                    />
                    <Button type="submit">Sign In</Button>
                </form>
                <div>OR</div>
                <Button onClick={signInWithGoogle}>Sign In With Google</Button>
            </div>
        );
    }
}

export default SignIn;