import React, { useState } from 'react';
import axios from 'axios';
import './login-signup.css';
import Footer from '../Footer/footer';

const LoginSignup = () => {
    const [action, setAction] = useState('Login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const handleFormSwitch = () => {
        setAction((prevAction) => (prevAction === 'Login' ? 'Sign Up' : 'Login'));
    };

    const handleFormSubmit = async() => {
        try {

            const config = {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            };
    

            if (action ==='Login'){
                const response = await axios.post('http://localhost:3001/auth/api/signin',
                {email,password}, config);

                sessionStorage.setItem('user', JSON.stringify(response.data.user));

                console.log(response.data);
                window.location.href = 'journal';
            }else {
                const response = await axios.post('http://localhost:3001/auth/api/signup',
                {name, email, password},config);

                console.log(response.data);
                window.location.href = '/';
            }
        } catch (error){
            console.error('error during submission',error.message);
        }

    };

    return (
        <div className='page'>
            <div className='container'>
                <div className='login_header'>
                    <div className='signin_text'>{action}</div>
                </div>

                <div className='inputs_container'>
                    <div className='input_box'>
                        <input type='text' placeholder='Name' value={name} onChange ={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='input_box'>
                        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>

                    </div>
                    <div className='input_box'>
                        <input type='email' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
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
