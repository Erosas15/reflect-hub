import './header.css';

const Header = ({ isSignedIn, onSignOut, onSignInClick }) => {

  const handleJournalClick = () => {
    window.location.href = "journal";
  };

  const handleGroupClick = () => {
    window.location.href = 'support-group';
  };

  const handleChatBotClick = () => {
    window.location.href = 'journal';
    console.log("chatboxed clicked");
  }

  return (
    <div className='header'>
      {isSignedIn ? (
        <div className= 'header-buttons'>
            <button className = 'chat' onClick = {handleChatBotClick}>ChatBox</button>
            <button className= 'groups' onClick = {handleGroupClick}>Groups</button>
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