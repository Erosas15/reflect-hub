import React from 'react';
import ReactDOM from 'react-dom'
import './landing-page.css'

// Pages
import LoginSignup from './login-signup';

const LandingPage = () => {
    const handleClick = () => {
        console.log("Sent to login");
        ReactDOM.render(
          <React.StrictMode>
            <LoginSignup />
          </React.StrictMode>,
          document.getElementById('root')
        );
    }

  return (
    <div className='header'>ReflectHub
      <div className='intro-text'>
        Hello! Welcome to ReflectHub, a web app for mental health and journaling!
      </div>

      <button className="login-btn" onClick={handleClick}>Login Here</button>
    </div>
  );
};

ReactDOM.render(<LandingPage />, document.getElementById('root'));

export default LandingPage;
