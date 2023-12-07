import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";


import Header from '../Header/header';
import Footer from '../Footer/footer';
import './chat-bot.css';

const ChatBot = ({ isSignedIn, setIsSignedIn}) => {
  const [messages, setMessages] = useState([]);


  const handleContentChange = () => {
    const currentContent = document.querySelector('.ask-box').innerText;
  };

  const handleClick = async() => {
    const currentContent = document.querySelector('.ask-box').innerText.trim();
    console.log('Sending:', currentContent);


    let answer = "";
    try{
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };
    const response = await axios.post(
      "http://localhost:3001/chat/api/message",
      {
        input: currentContent
      }, config);
      answer = response.data.answer;
    }
    catch(error){
      answer = "Please rephrase that if possible."
    }
  

    //const formattedContent = currentContent.replace(/\n/g, "<br>");

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: 'User', text: currentContent },
      {id: 'ChatBot', text: answer}
    ]);



    //Get a response to the most recent message. 

    // Add logic to send the message to the server and update the messages state
    // setMessages((prevMessages) => [...prevMessages, { id: generateId(), text: currentContent }]);

    document.querySelector('.ask-box').innerText = '';

    // const messagesContainer = document.querySelector(".messages");
    // messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  const generateId = () => {
    // You can use a library like uuid to generate unique IDs
    // For simplicity, this example generates a simple timestamp-based ID
    return new Date().getTime().toString();
  };

  return (
    <div className="page">
      <Header isSignedIn={isSignedIn}/>
      <div className="response-box">
        <div className="responses">
          {/* responses go here */}
          {messages.map((message) => (
            <div
              key={message.id}
              className={
                "message" /* ${message.userId === currUser.id ? 'self' : 'other'} */
              }
            >
              <div
                className={
                  "message-id" /* ${message.userId === currUser.id ? 'self' : 'other'} */
                }
              >
                {message.id}
              </div>
              <div
                className="message-text"
                dangerouslySetInnerHTML={{ __html: message.text }}
              />
            </div>
          ))}
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
