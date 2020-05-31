import React, {Component} from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {ButtonsBarContainer, SignInContainer, SignInTitle} from "./sign-in.styles";
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux"

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {emailSignInStart} = this.props;
        const { email, password } = this.state;
        emailSignInStart(email, password);
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {googleSignInStart, } = this.props;
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        handleChange={this.handleChange}
                        type="email"
                        value={this.state.email}
                        label="Email"
                        required/>
                    <FormInput
                        name="password"
                        handleChange={this.handleChange}
                        type="password"
                        value={this.state.password}
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
}

const ma2p = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({email, password}))
})

export default connect(null, ma2p)(SignIn);