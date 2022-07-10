import React from 'react';
import Logo from '../component/Logo.js';
import SignUpForm from '../component/SignUpForm.js';
import '../style/Signup.css';

const Signup = () => {
    return (
        <div id="signupDiv">
            <section id="signupLogo">
                <Logo margin="5%" />
            </section>
            <section>
                <SignUpForm />
            </section>
        </div>
    );
};

export default Signup;