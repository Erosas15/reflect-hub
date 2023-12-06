import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import './chat-bot.css';

const ChatBot = ({ isSignedIn, setIsSignedIn}) => {
  const [responses, setResponses] = useState([]);

  const handleContentChange = () => {
    const currentContent = document.querySelector('.chat-box').innerText;
  };

  const handleClick = () => {
    const currentContent = document.querySelector('.chat-box').innerText.trim();
    console.log('Sending:', currentContent);

    // Add logic to send the message to the server and update the messages state
    // setMessages((prevMessages) => [...prevMessages, { id: generateId(), text: currentContent }]);

    document.querySelector('.chat-box').innerText = '';
  };

  return (
    <div className="page">
      <Header isSignedIn={isSignedIn}/>
      <div className="response-box">
        <div className="responses">
          {/* responses go here */}
        </div>
        <div className="ask-box" contentEditable="true" onInput={handleContentChange}></div>
        <button className="submit-button" onClick={handleClick}>
          Send
        </button>
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<ChatBot />, document.getElementById('root'));

export default ChatBot;
