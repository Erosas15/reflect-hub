import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import './support-group.css';

const SupportGroup = ({ isSignedIn, setIsSignedIn }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/messages/api/get-messages', {
          params: {
            userId1: 'lqtvJHBOzROY3caILGxQ4v95X0F2', // Replace with the actual current user ID
            userId2: 'k2tefNYNW2QnnHTkZJwZJ3DW5yt2', // Replace with the actual other user ID
          },
        });
        setMessages(response.data.reverse()); // Reverse the order of messages
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleContentChange = () => {
    // Directly set the content without relying on the state
    const currentContent = document.querySelector('.chat-box').innerText;
    // Note: innerText will preserve spaces and line breaks
  };

  const handleClick = () => {
    const currentContent = document.querySelector('.chat-box').innerText.trim();
    console.log('Sending:', currentContent);
  
    // Replace newline characters with <br> elements
    const formattedContent = currentContent.replace(/\n/g, '<br>');
  
    // Update the state with the new message at the end (reverse order)
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: generateId(), text: formattedContent },
    ]);
  
    // Clear the content after sending
    document.querySelector('.chat-box').innerText = '';
  
    // Scroll to the bottom after sending a message
    const messagesContainer = document.querySelector('.messages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };
  

  const generateId = () => {
    // You can use a library like uuid to generate unique IDs
    // For simplicity, this example generates a simple timestamp-based ID
    return new Date().getTime().toString();
  };

  return (
    <div className="page">
      <Header isSignedIn={isSignedIn} />
      <div className="text-chat">
        <div className="messages">
          {messages.map((message) => (
            <div key={message.id} className={"message" /* ${message.userId === currUser.id ? 'self' : 'other'} */}>
              <div className={"message-id" /* ${message.userId === currUser.id ? 'self' : 'other'} */}>
                {message.id}
              </div>
              <div className="message-text" dangerouslySetInnerHTML={{ __html: message.text }} />
            </div>
          ))}
        </div>
        <div className="chat-box" contentEditable="true" onInput={handleContentChange}></div>
        <button className="send-button" onClick={handleClick}>
          Send
        </button>
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<SupportGroup />, document.getElementById('root'));

export default SupportGroup;
