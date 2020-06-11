import React, { useState } from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { ButtonsBarContainer, SignInContainer, SignInTitle } from "./sign-in.styles";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import { connect } from "react-redux"


const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setCredentials] = useState({ email: '', password: '' })


    const handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = userCredentials;
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    }

    const { email, password } = userCredentials;

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    handleChange={handleChange}
                    type="email"
                    value={email}
                    label="Email"
                    required />
                <FormInput
                    name="password"
                    handleChange={handleChange}
                    type="password"
                    value={password}
                    label="Password"
                    required
                />
                <ButtonsBarContainer>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        Sign in with Google
                        </CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    );
}

const ma2p = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password }))
})

export default connect(null, ma2p)(SignIn);