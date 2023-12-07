import axios from 'axios';
import './header.css';

const Header = ({ isSignedIn, setIsSignedIn }) => { 

  const handleJournalClick = () => {
    window.location.href = 'journal';
  };

  const handleGroupClick = () => {
    window.location.href = 'support-group';
  };

  const handleChatBotClick = () => {
    window.location.href = 'chat-bot';
  }

  const onSignInClick = () => {
    window.location.href = 'login-signup';
  }

  const onSignOutClick = async () => {
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

      window.location.href = '/';

      // Update the state to reflect that the user is signed out
      setIsSignedIn(false);
    } catch (error) {
      console.error('Error during sign-out:', error.message);
      // Handle the error as needed
    }
  };

  return (
    <div className='header'>
      {isSignedIn ? (
        <div className= 'header-buttons'>
            <button className = 'chat' onClick = {handleChatBotClick}>Chat Bot</button>
            <button className= 'support group' onClick = {handleGroupClick}>Support Group</button>
            <button className = 'journal' onClick={handleJournalClick}>Journal</button>
            <button className='sign-out-btn' onClick={onSignOutClick}>Sign Out</button>
        </div>
      ) : (
        <button className='sign-in-btn' onClick={onSignInClick}>Sign In</button>
      )}
    </div>
  );
};


export default Header;