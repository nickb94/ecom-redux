import React, { Component } from "react";

import "./SignUp.css";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";


class SignUp extends Component {

  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password checck")
      return;
    }

    try {

      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

    } catch (error) {
      console.error(error);
    }

  }


  handleChange = e => {

    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  render() {

    const { displayName, email, password, confirmPassword } = this.state;

    return (

      <div className="sign-up">

        <h2> Sign Up</h2>
        <span className="title">I do not have a account</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <label>Display Name</label>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="display Name"
            required
          />
          <label>Email</label>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="email"
            required
          />
          <label>Password</label>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="password"
            required
          />
          <label>confirmPassword</label>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="ConfirrmPass"
            required
          />
          <Button type="submit">SignUp</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;