import React, { useState } from 'react';
import './login-signup.css';

import Header from '../Header/header';
import Footer from '../Footer/footer';


const LoginSignup = () => {
    const [action, setAction] = useState('Login');

    const handleFormSwitch = () => {
        setAction((prevAction) => (prevAction === 'Login' ? 'Sign Up' : 'Login'));
    };

    const handleFormSubmit = () => {
        // Placeholder for future Firebase integration
        if (action === 'Login') {
            // Handle login logic
        } else {
            // Handle signup logic
        }
    };

    return (
        <div className='page'>
            <Header/>
            <div className='container'>
                <div className='login_header'>
                    <div className='signin_text'>{action}</div>
                </div>

                <div className='inputs_container'>
                    <div className='input_box'>
                        <input type='text' placeholder='Name'></input>
                    </div>
                    <div className='input_box'>
                        <input type='email' placeholder='Email'></input>
                    </div>
                    <div className='input_box'>
                        <input type='password' placeholder='Password'></input>
                    </div>
                </div>

                <div className='formSwitch'>
                    {action === 'Login' ? (
                        <>
                            Not signed up? <span onClick={handleFormSwitch}>Sign Up</span>
                        </>
                    ) : (
                        <>
                            Already a member? <span onClick={handleFormSwitch}>Login</span>
                        </>
                    )}
                </div>

                <div className='submitContainer'>
                    <div className='submit gray' onClick={handleFormSubmit}>
                        {action === 'Login' ? 'Login' : 'Sign Up'}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default LoginSignup;
