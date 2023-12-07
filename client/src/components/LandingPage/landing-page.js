import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
import './landing-page.css'

import Header from '../Header/header';
import Footer from '../Footer/footer';

const LandingPage = ({ isSignedIn, setIsSignedIn }) => {
  const handleSignInClick = () => {
    window.location.href = "login-signup";
  };

  const handleSignOutClick = async () => {
    try {
      const user = localStorage.getItem('userID');
      if (!user) {
        // Handle the case where user data is not found in sessionStorage
        return;
      }

      const config = {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      // Send a request to your backend sign-out endpoint
      await axios.post('http://localhost:3001/auth/api/signout', { uid: user }, config);

      // Clear user data from sessionStorage
      localStorage.removeItem('userID');

      // Update the state to reflect that the user is signed out
      setIsSignedIn(false);
    } catch (error) {
      console.error('Error during sign-out:', error.message);
      // Handle the error as needed
    }
  };

  console.log(isSignedIn);

  return (
    <div>


      <Header
        isSignedIn={isSignedIn}
        onSignInClick={handleSignInClick}
        onSignOut={handleSignOutClick}/>

      {isSignedIn ? (
        <div className='page-body-signedin'>
          <h1>ReflectHub</h1>
          <div className='welcome-text'>
            Hi, Welcome to ReflectHub! With ReflectHub you can spill your deepest thoughts in your own personal journal. You will have the option of joining a chat room to ask for advice or provide advice to others. If you want someone to talk to, 
            Our GBT ChatBot is always down for a chat!
          </div>
        </div>
        
      ) : (
        <div className='page-body-signedout'>
          <h1>ReflectHub</h1>
          <div className='intro-text'>
          Hello! Welcome to ReflectHub, a web app for mental health and journaling! ReflectHub aims to help document your current state of mental health as well as provide support and knowledge that will hopefully help your overall well-being!
          </div>
          <button className='login-btn' onClick={handleSignInClick}>Login</button>
        </div>
        )
      }

      

      <Footer/>
    </div>
  );
};

ReactDOM.render(<LandingPage />, document.getElementById('root'));

export default LandingPage;