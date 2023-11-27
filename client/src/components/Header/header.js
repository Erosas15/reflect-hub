import './header.css';

const Header = ({ isSignedIn, onSignOut, onSignInClick }) => {
  return (
    <div className='header'>
      {isSignedIn ? (
        <button className='sign-in-btn' onClick={onSignOut}>Sign Out</button>
      ) : (
        <button className='sign-in-btn' onClick={onSignInClick}>Sign In</button>
      )}
    </div>
  );
};


export default Header;