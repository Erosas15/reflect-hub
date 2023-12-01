import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './support-group.css';

const SupportGroup = () => {
  const [content, setContent] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleClick = () => {
    // Handle save functionality
    console.log('Sending:', content);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="page">
      <div className={`menu-toggle ${menuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
        {menuOpen ? 'Close Menu' : 'Open Menu'}
      </div>
      <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
        {menuOpen && (
          <>
            <button onClick={toggleMenu}>Close Menu</button>
            <button>Journal</button>
            <button>Chatbot</button>
            <button>Support Group</button>
            <button>Logout</button>
          </>
        )}
      </div>
      <div className="text-chat">
        <div className="messages">
          {/* Messages go here */}
        </div>
        <div className="chat-box" contentEditable="true" onChange={handleContentChange}>
          {content}
        </div>
        <button className="send-button" onClick={handleClick}>
          Send
        </button>
      </div>
      <div className="members">
        {/* Member List */}
        <div className="member">
          <img src="path-to-profile-image" alt="Profile" />
          <span>John</span>
        </div>
        <div className="member">
          <img src="path-to-profile-image" alt="Profile" />
          <span>Jane</span>
        </div>
        {/* Add more members as needed */}
      </div>
    </div>
  );
};

ReactDOM.render(<SupportGroup />, document.getElementById('root'));

export default SupportGroup;
