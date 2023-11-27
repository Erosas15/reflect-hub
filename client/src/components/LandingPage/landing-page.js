import React from 'react';
import ReactDOM from 'react-dom'
import './landing-page.css'

import Header from '../Header/header';
import Footer from '../Footer/footer';

const LandingPage = () => {
    const handleClick = () => {
      window.location.href = "login-signup"
    }

  return (
    <div>
      <Header/>
      <div className='page-body'>
        <h1>ReflectHub</h1>
        <div className='intro-text'>
        Hello! Welcome to ReflectHub, a web app for mental health and journaling! ReflectHub aims to help document your current state of mental health as well as provide support and knowledge that will hopefully help your overall well-being!
        </div>
        <button className='login-btn' onClick={handleClick}>Login</button>
      </div>
      <Footer/>
    </div>
  );
};

ReactDOM.render(<LandingPage />, document.getElementById('root'));

export default LandingPage;