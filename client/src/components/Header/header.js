import './header.css';

const Header = ({ isSignedIn, onSignOut }) => { // don't know why onSignInClick was a passed value but i set it to a function for now

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

  return (
    <div className='header'>
      {isSignedIn ? (
        <div className= 'header-buttons'>
            <button className = 'chat' onClick = {handleChatBotClick}>Chat Bot</button>
            <button className= 'support group' onClick = {handleGroupClick}>Support Group</button>
            <button className = 'journal' onClick={handleJournalClick}>Journal</button>


          <button className='sign-out-btn' onClick={onSignOut}>Sign Out</button>
        </div>
      ) : (
        <button className='sign-in-btn' onClick={onSignInClick}>Sign In</button>
      )}
    </div>
  );
};


export default Header;