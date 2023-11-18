import React from 'react';
import ReactDOM from 'react-dom'
import './landing-page.css'

// Pages
import LoginSignup from './login-signup';
import Journal from './journal';

const LandingPage = () => {
    const handleClick = () => {
        console.log("Sent to login");
        ReactDOM.render(
          <React.StrictMode>
            <Journal />
          </React.StrictMode>,
          document.getElementById('root')
        );
    }

  return (
    <div className='header'>
      <h1>ReflectHub</h1>
      <div className='intro-text'>
        Hello! Welcome to ReflectHub, a web app for mental health and journaling! 
        ReflectHub aims to help document your current state of mental health as well as 
        provide support and knowledge that will hopefully help your overall well-being!
      </div>

      <button className="login-btn" onClick={handleClick}>Login Here</button>
    </div>
  );
};

ReactDOM.render(<LandingPage />, document.getElementById('root'));

export default LandingPage;