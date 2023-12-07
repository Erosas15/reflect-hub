import React from 'react';
import ReactDOM from 'react-dom'
import './landing-page.css'

import Header from '../Header/header';
import Footer from '../Footer/footer';

const LandingPage = ({ isSignedIn, onSignInClick, onSignOutClick }) => {

  console.log(isSignedIn);

  const onLoginClick = () => {
    window.location.href = 'login-signup';
  }

  return (
    <div>

      <Header
        isSignedIn={isSignedIn}
        onSignInClick={onSignInClick}
        onSignOutClick={onSignOutClick}/>

      {isSignedIn ? (
        <div className='page-body-signedin'>
          <h1>ReflectHub</h1>
          <div className='welcome-text'>
            Hi, Welcome to ReflectHub! With ReflectHub you can spill your deepest thoughts in your own personal journal. You will have the option of joining a chat room to ask for advice or provide advice to others. If you want someone to talk to, 
            Our GPT ChatBot is always down for a chat!
          </div>
        </div>
        
      ) : (
        <div className='page-body-signedout'>
          <h1>ReflectHub</h1>
          <div className='intro-text'>
          Hello! Welcome to ReflectHub, a web app for mental health and journaling! ReflectHub aims to help document your current state of mental health as well as provide support and knowledge that will hopefully help your overall well-being!
          </div>
          <button className='login-btn' onClick={onLoginClick}>Login</button>
        </div>
        )
      }

      

      <Footer/>
    </div>
  );
};

ReactDOM.render(<LandingPage />, document.getElementById('root'));

export default LandingPage;